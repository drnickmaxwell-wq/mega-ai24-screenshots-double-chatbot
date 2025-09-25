export const metadata = { title: "Treatments · Screenshots (Preview)" };

const links = [
  { href: "/screenshots/treatments/3d-printed-veneers", label: "3D Printed Veneers" },
  { href: "/screenshots/treatments/implants", label: "Dental Implants" },
  { href: "/screenshots/treatments/orthodontics", label: "Orthodontics" },
  { href: "/screenshots/treatments/whitening", label: "Whitening" },
  { href: "/screenshots/treatments/emergency", label: "Emergency Dentistry" },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-[var(--content)] px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">Treatments (Screenshots)</h1>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <a className="underline" href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
