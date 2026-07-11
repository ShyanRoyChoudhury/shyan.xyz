import { navLinks } from '@/lib/content';

const linkBase =
  'rounded px-2.5 py-1.5 font-mono text-[13px] transition-colors';

function NavAnchor({
  link,
  className,
}: {
  link: (typeof navLinks)[number];
  className: string;
}) {
  return (
    <a
      href={link.href}
      className={className}
      {...(link.external ? { target: '_blank', rel: 'noopener' } : {})}
    >
      {link.prefix && (
        <span
          aria-hidden="true"
          className="text-fg-faint transition-colors group-hover:text-amber"
        >
          {link.prefix}
        </span>
      )}
      {link.label}
    </a>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="wrap flex h-14 items-center justify-between gap-4">
        <a
          href="#top"
          aria-label="Shyan Roy Choudhury — home"
          className="whitespace-nowrap font-mono text-[13px] tracking-wide text-fg-dim"
        >
          <span className="font-semibold text-amber">shyan</span>@remote
          <span className="hidden text-fg sm:inline">:~</span>
          <span className="hidden sm:inline">$ _</span>
        </a>

        {/* desktop links */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href} className={link.cta ? 'ml-2' : undefined}>
                <NavAnchor
                  link={link}
                  className={
                    link.cta
                      ? `${linkBase} border border-line-hi text-fg hover:border-amber hover:text-amber`
                      : `${linkBase} group text-fg-dim hover:bg-bg-raise hover:text-fg`
                  }
                />
              </li>
            ))}
          </ul>
        </nav>

        {/* mobile: CSS-only disclosure — every anchor stays reachable at any width */}
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded border border-line-hi px-2.5 py-1.5 font-mono text-[13px] text-fg-dim hover:border-amber hover:text-amber [&::-webkit-details-marker]:hidden">
            menu <span aria-hidden="true">▾</span>
          </summary>
          <nav aria-label="Primary, mobile">
            <ul className="absolute right-0 top-full mt-2 w-44 rounded-lg border border-line bg-bg-raise p-1 shadow-[0_12px_32px_-16px_rgba(0,0,0,0.7)]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavAnchor
                    link={link}
                    className="group block rounded px-3 py-2 font-mono text-[13px] text-fg-dim transition-colors hover:bg-bg-inset hover:text-fg"
                  />
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
