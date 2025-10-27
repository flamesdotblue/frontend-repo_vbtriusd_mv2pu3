import { useState, useEffect } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      // Update active section based on scroll position
      const sections = ['home', 'services', 'contact'];
      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, top: Math.abs(rect.top) };
      });
      const current = offsets.sort((a, b) => a.top - b.top)[0]?.id || 'home';
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const bgColor = '#F6EFEC';
  const primary = '#3d8a7f';
  const dark = '#1e293b';

  return (
    <header
      className={classNames(
        'sticky top-0 z-50 transition-shadow',
        scrolled ? 'shadow-md' : 'shadow-none'
      )}
      style={{ backgroundColor: bgColor }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div
              className="h-8 w-8 rounded-md"
              style={{ backgroundColor: primary }}
            />
            <span className="text-lg font-semibold tracking-wide" style={{ color: dark }}>
              Amphibia
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={classNames(
                  'text-sm font-medium transition-colors',
                  active === item.id ? 'underline underline-offset-8' : ''
                )}
                style={{ color: active === item.id ? primary : dark }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full px-4 py-2 text-sm font-semibold shadow-sm hover:opacity-90"
              style={{ backgroundColor: primary, color: 'white' }}
            >
              Get Quote
            </a>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none"
            aria-label="Toggle menu"
            style={{ color: dark }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t" style={{ borderColor: '#e5e7eb' }}>
          <div className="space-y-1 px-4 py-3">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium"
                style={{ color: active === item.id ? primary : dark, backgroundColor: active === item.id ? '#ffffff' : 'transparent' }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full px-4 py-2 text-center text-sm font-semibold shadow-sm"
              style={{ backgroundColor: primary, color: 'white' }}
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
