"use client";
import { useState } from "react";

/** Luxury chatbot shell for Screenshots routes (kept separate from AI24/Manus). */
export default function ChatDockScreenshots() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [log, setLog] = useState<string[]>([]);

  const send = async () => {
    const q = value.trim();
    if (!q) return;
    setLog((l) => [...l, `You: ${q}`]);
    setValue("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ q, context: "screenshots" }),
      });
      const data = await res.json();
      setLog((l) => [...l, `Assistant: ${data.a || "Thanks!"}`]);
    } catch {
      setLog((l) => [...l, "Assistant: (connection issue)"]);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 rounded-full px-5 py-3 text-white"
        style={{
          background: "linear-gradient(135deg, var(--magenta), var(--turquoise))",
          boxShadow: "0 0 16px rgba(64,196,180,.25)",
        }}
        aria-expanded={open}
        aria-controls="screenshots-chatdock"
      >
        {open ? "Close" : "Chat"}
      </button>

      {open && (
        <div
          id="screenshots-chatdock"
          className="fixed bottom-20 right-6 w-[360px] rounded-2xl theme-border theme-glass backdrop-blur p-3 shadow-2xl"
        >
          <div className="h-[240px] overflow-auto rounded-md bg-white/85 p-2 text-sm text-black">
            {log.map((l, i) => (
              <div key={i} className="mb-1">{l}</div>
            ))}
          </div>
          <div className="mt-2 flex gap-2">
            <input
              className="flex-1 rounded-md border px-2 py-2 text-sm"
              placeholder="Ask me something…"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
            />
            <button
              onClick={send}
              className="rounded-md px-4 py-2 text-white"
              style={{ background: "var(--magenta)", boxShadow: "var(--glow-magenta)" }}
            >
              Send
            </button>
          </div>
          <p className="mt-2 text-xs opacity-70">No diagnosis; we can book or escalate.</p>
        </div>
      )}
    </>
  );
}
