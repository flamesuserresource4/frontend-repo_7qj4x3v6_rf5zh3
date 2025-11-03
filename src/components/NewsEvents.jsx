import { Calendar, Newspaper } from 'lucide-react';

const news = [
  {
    type: 'News',
    title: 'Grant awarded for AI-driven learning analytics',
    date: 'Oct 15, 2025',
    description:
      'Our team secured funding to explore interpretable models that support educators in real-time.',
  },
  {
    type: 'Event',
    title: 'Cybersecurity in Education Symposium',
    date: 'Nov 10, 2025',
    description:
      'Join researchers and industry leaders to discuss secure-by-design digital learning ecosystems.',
  },
  {
    type: 'Publication',
    title: 'Resilient campus networks for sustainable operations',
    date: 'Sep 01, 2025',
    description:
      'A new paper proposing a framework for energy-aware, fault-tolerant infrastructure at scale.',
  },
];

export default function NewsEvents() {
  return (
    <section id="news" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              News & Events
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl">
              Highlights, announcements, and upcoming activities across our research community.
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-inset ring-slate-200 hover:bg-slate-50"
          >
            <Newspaper className="h-4 w-4" />
            View all updates
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {news.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-xs font-medium text-indigo-700">
                <Calendar className="h-4 w-4" />
                <span>{item.date}</span>
                <span className="inline-flex h-6 items-center rounded-full bg-indigo-50 px-2 text-[11px] text-indigo-700 ring-1 ring-inset ring-indigo-200">
                  {item.type}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
