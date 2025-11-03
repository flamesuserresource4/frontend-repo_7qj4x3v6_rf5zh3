import { Cpu, Microscope, BookOpen, Globe } from 'lucide-react';

const areas = [
  {
    icon: Cpu,
    title: 'Data Science & AI in Education',
    desc:
      'Applying machine learning to learning analytics, adaptive assessment, and student support systems.',
  },
  {
    icon: Microscope,
    title: 'Cyber Security & Safety',
    desc:
      'Securing educational platforms and protecting privacy through robust cryptography and policy.',
  },
  {
    icon: BookOpen,
    title: 'Digital Pedagogy',
    desc:
      'Exploring human-centered design for interactive, accessible, and inclusive learning experiences.',
  },
  {
    icon: Globe,
    title: 'Sustainability & Resilience',
    desc:
      'Researching eco-friendly infrastructure and resilient systems for future-ready campuses.',
  },
];

export default function ResearchAreas() {
  return (
    <section id="research" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Research Areas
          </h2>
          <p className="mt-3 text-slate-600">
            Structured like a comprehensive research hub with a modern, student-first experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-indigo-100 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
