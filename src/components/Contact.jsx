import { useState } from 'react';

export default function Contact() {
  const primary = '#3d8a7f';
  const dark = '#1e293b';
  const bg = '#F6EFEC';
  const accent = '#F76C0F';

  const [form, setForm] = useState({ name: '', email: '', service: '', details: '' });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: bg }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold" style={{ color: dark }}>Contact Amphibia</h2>
          <p className="mt-2 text-slate-600">
            Tell us about your project and we’ll respond promptly with next steps.
          </p>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Service Required</label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring"
                >
                  <option value="">Select a service</option>
                  <option>Hydrographic Surveys</option>
                  <option>Cable Route Surveys</option>
                  <option>Marine Consultancy</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Project Details</label>
                <textarea
                  rows={5}
                  required
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full px-6 py-3 text-sm font-semibold shadow-sm hover:opacity-90"
                style={{ backgroundColor: primary, color: 'white' }}
              >
                Request a Quote
              </button>
              {submitted && (
                <p className="text-sm" style={{ color: primary }}>
                  Thanks! Well be in touch shortly.
                </p>
              )}
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold" style={{ color: dark }}>Project Feasibility Highlights</h3>
              <p className="mt-2 text-sm text-slate-600">
                As you share your scope, consider data needs, site conditions, and regulatory milestones.
              </p>
              <div className="mt-4 rounded-xl border bg-white p-4 text-sm shadow-sm">
                <div className="mb-3 font-semibold" style={{ color: accent }}>Quick Assessment</div>
                <ul className="space-y-2">
                  <li><span className="font-medium">Service:</span> {form.service || '—'}</li>
                  <li><span className="font-medium">Key Notes:</span> {form.details ? `${form.details.slice(0, 120)}${form.details.length > 120 ? '…' : ''}` : 'Provide project details for an overview.'}</li>
                </ul>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <div className="font-semibold" style={{ color: dark }}>Office</div>
                <div className="mt-1 text-slate-600">123 Marine Way, Port City</div>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <div className="font-semibold" style={{ color: dark }}>Contact</div>
                <div className="mt-1 text-slate-600">+1 (555) 123-4567 • hello@amphibia.co</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
