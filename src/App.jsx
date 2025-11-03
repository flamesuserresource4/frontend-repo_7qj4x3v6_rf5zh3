import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResearchAreas from './components/ResearchAreas';
import NewsEvents from './components/NewsEvents';

function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-sm font-semibold text-slate-900">About</h4>
            <p className="mt-2 text-sm text-slate-600">
              An educational research hub connecting people, projects, and publications with an
              immersive, future-forward design.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
            <p className="mt-2 text-sm text-slate-600">research@example.edu</p>
            <p className="text-sm text-slate-600">+1 (555) 000-1234</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Location</h4>
            <p className="mt-2 text-sm text-slate-600">Innovation Drive, Knowledge City</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Follow</h4>
            <div className="mt-2 flex gap-3 text-slate-600">
              <a href="#" className="hover:text-slate-900">LinkedIn</a>
              <a href="#" className="hover:text-slate-900">Twitter</a>
              <a href="#" className="hover:text-slate-900">GitHub</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Edu Research Hub</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ResearchAreas />
        <NewsEvents />
        {/* Placeholder section for publications list to mirror hub structure */}
        <section id="publications" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Publications</h2>
              <p className="mt-3 text-slate-600">
                Browse selected papers and reports that showcase our latest contributions.
              </p>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-xs font-medium text-indigo-700">2025 • Journal</p>
                  <h3 className="mt-2 text-lg font-semibold">
                    Toward trustworthy AI for adaptive learning at scale
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Authors: A. Researcher, B. Scholar, C. Innovator
                  </p>
                  <a href="#" className="mt-3 inline-block text-sm font-semibold text-indigo-600">
                    View paper →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
