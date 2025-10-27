import { Anchor, Compass, Map } from 'lucide-react';

const services = [
  {
    icon: Anchor,
    title: 'Hydrographic Surveys',
    desc: 'High-resolution bathymetry, seabed classification, and environmental data acquisition for safe marine operations.',
    bullets: ['Multibeam & Singlebeam', 'Side-Scan Sonar', 'Tide & Current Measurements'],
    img: 'https://images.unsplash.com/photo-1530717449302-72b1e1ff3273?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: Compass,
    title: 'Cable Route Surveys',
    desc: 'Comprehensive route engineering with geophysical and geotechnical assessments for subsea cables.',
    bullets: ['Pre-Route Investigations', 'Hazard Mapping', 'Post-Lay Inspection'],
    img: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: Map,
    title: 'Marine Consultancy',
    desc: 'Strategic guidance, risk assessments, and regulatory compliance for offshore projects.',
    bullets: ['Permitting Support', 'HSE & QMS Advisory', 'Data Management'],
    img: 'https://images.unsplash.com/photo-1501635238895-63f29cfc06b0?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Services() {
  const bg = '#F6EFEC';
  const primary = '#3d8a7f';
  const dark = '#1e293b';
  const accent = '#F76C0F';

  return (
    <section id="services" className="py-20" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold" style={{ color: dark }}>Comprehensive Marine Survey Solutions</h2>
            <p className="mt-2 text-slate-600">
              Our team blends advanced instrumentation with rigorous methodology to deliver reliable results.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-full px-5 py-2 text-sm font-semibold shadow-sm"
            style={{ backgroundColor: primary, color: 'white' }}
          >
            Get a Quote
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm">
              <div className="h-40 w-full overflow-hidden">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-md p-2" style={{ backgroundColor: '#F6EFEC' }}>
                    <s.icon className="h-5 w-5" style={{ color: primary }} />
                  </div>
                  <h3 className="text-lg font-semibold" style={{ color: dark }}>{s.title}</h3>
                </div>
                <p className="text-sm text-slate-600">{s.desc}</p>
                <ul className="mt-2 space-y-1 text-sm">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <a href="#contact" className="text-sm font-semibold" style={{ color: primary }}>
                    Discuss this service →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
