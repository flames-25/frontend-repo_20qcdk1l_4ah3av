import { ExternalLink, Code, Rocket } from 'lucide-react'

const projects = [
  {
    title: 'Interactive 3D Landing',
    description:
      'A playful 3D hero with Spline integration, motion transitions, and smooth page sections.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Design System Starter',
    description:
      'A component library with accessible primitives, tokens, and docs powered by MDX.',
    tags: ['TypeScript', 'Tailwind', 'Storybook'],
    link: '#',
  },
  {
    title: 'Realtime Dashboard',
    description:
      'A metrics dashboard with live data, charts, and dark mode. Built for speed and clarity.',
    tags: ['FastAPI', 'React', 'WebSockets'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Rocket className="h-5 w-5 text-indigo-600" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Featured Projects</h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              <p className="mt-2 text-gray-700">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="mt-6 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
              >
                <span>View details</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
