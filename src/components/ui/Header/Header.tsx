import { useState } from 'react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Me', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#1f1f1f]/90 pt-[env(safe-area-inset-top)] backdrop-blur-md font-pixel">
      <nav className="mx-auto flex h-14 max-w-[1190px] items-center justify-between px-4 md:h-[61px] md:px-[37px]">
        <a href="#home" className="text-[17px] uppercase text-[#8ace00] md:text-[24px]">
          Yuan
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex xl:gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-[15px] uppercase text-white transition-colors hover:text-[#8ace00] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#8ace00] after:transition-all after:duration-150 hover:after:w-full xl:text-[17px]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[4px] lg:hidden"
        >
          <span className={`block h-[3px] w-6 bg-[#8ace00] transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block h-[3px] w-6 bg-[#8ace00] transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-[3px] w-6 bg-[#8ace00] transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <ul className="flex flex-col border-t-2 border-[#1A1A1A] px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-[14px] uppercase text-white transition-all hover:text-[#8ace00]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
