export default function Hero() {
  const bg = '#F6EFEC';
  const primary = '#3d8a7f';
  const accent = '#F76C0F';
  const dark = '#1e293b';

  return (
    <section id="home" className="relative overflow-hidden" style={{ backgroundColor: bg }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 py-20 md:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: '#ffffff', color: primary }}>
              Trusted Marine Survey & Consultancy
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl" style={{ color: dark }}>
              Marine Survey Excellence
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: '#475569' }}>
              Amphibia delivers precise hydrographic surveys, cable route assessments, and marine consulting with a commitment to safety and quality.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#services"
                className="rounded-full px-6 py-3 text-sm font-semibold shadow-sm hover:opacity-90"
                style={{ backgroundColor: primary, color: 'white' }}
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="rounded-full px-6 py-3 text-sm font-semibold border"
                style={{ borderColor: primary, color: primary }}
              >
                Contact Us
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-4">
              {[
                { label: 'Years Experience', value: '15+' },
                { label: 'Projects Delivered', value: '120+' },
                { label: 'Industry Partners', value: '30+' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl p-4 text-center shadow-sm" style={{ backgroundColor: '#ffffff' }}>
                  <div className="text-2xl font-bold" style={{ color: dark }}>{stat.value}</div>
                  <div className="text-xs" style={{ color: '#64748b' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=1200&auto=format&fit=crop"
                alt="Marine survey vessel at sea"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-30"
                 style={{ background: `radial-gradient(circle at 30% 30%, ${accent}, transparent 60%)` }}
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24" style={{ background: 'linear-gradient(to bottom, rgba(246,239,236,0), rgba(246,239,236,1))' }} />
    </section>
  );
}
