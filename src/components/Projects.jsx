import { ExternalLink, Rocket } from 'lucide-react'

const projects = [
  {
    title: 'AI Chat Portfolio Assistant',
    description:
      'A chat-based guide embedded in the portfolio that answers questions about my work and experience using vector search.',
    tags: ['React', 'FastAPI', 'Pinecone', 'OpenAI'],
    link: 'https://github.com/yourname/ai-portfolio-assistant',
  },
  {
    title: '3D Product Showcase',
    description:
      'Interactive product viewer powered by Spline with camera paths, hotspots, and smooth scroll‑linked animations.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: 'https://github.com/yourname/3d-product-showcase',
  },
  {
    title: 'Realtime Finance Dashboard',
    description:
      'Live market data, alerts, and multi‑chart layouts with dark mode and keyboard navigation.',
    tags: ['Next.js', 'WebSockets', 'Tailwind'],
    link: 'https://github.com/yourname/realtime-finance-dashboard',
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
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
              >
                <span>View repo</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
