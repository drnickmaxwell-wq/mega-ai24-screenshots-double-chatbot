"use client";
import React, { useRef, useEffect } from "react";

export default function HeroVideo({
  videoSrc = "/videos/hero/coastal-dental-hero.mp4",
  posterSrc = "/videos/hero/hero-poster.jpg",
  className = "",
}: { videoSrc?: string; posterSrc?: string; className?: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v || !videoSrc) return;
    const onLoaded = () => void 0;
    v.addEventListener("loadeddata", onLoaded);
    v.play().catch(() => void 0);
    return () => v.removeEventListener("loadeddata", onLoaded);
  }, [videoSrc]);

  return (
    <div className={`relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden ${className}`}>
      <video ref={ref} className="absolute inset-0 w-full h-full object-cover"
             poster={posterSrc} autoPlay muted loop playsInline preload={videoSrc ? "metadata" : "none"}>
        {videoSrc && <source src={videoSrc} type="video/mp4" />}
      </video>
      <div className="absolute inset-0 hero-mask" />
    </div>
  );
}
