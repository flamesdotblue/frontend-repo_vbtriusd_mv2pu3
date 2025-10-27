import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';

function Footer() {
  const dark = '#1e293b';
  const primary = '#3d8a7f';
  return (
    <footer className="mt-20" style={{ backgroundColor: dark }}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md" style={{ backgroundColor: primary }} />
            <span className="text-white font-semibold">Amphibia</span>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#home" className="text-slate-300 hover:text-white">Home</a>
            <a href="#services" className="text-slate-300 hover:text-white">Services</a>
            <a href="#contact" className="text-slate-300 hover:text-white">Contact</a>
          </nav>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Amphibia Marine Survey & Consultancy</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F6EFEC' }}>
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
