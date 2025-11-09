export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">About Me</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I’m a full‑stack developer focused on crafting fast, accessible, and delightful web products. I love
              bringing ideas to life with clean architecture, thoughtful UI, and smooth interactions that feel great
              on every device.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-sm text-gray-500">Specialties</p>
                <p className="mt-1 font-semibold text-gray-900">Frontend architecture, Design systems, 3D/UI motion</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-sm text-gray-500">Stack</p>
                <p className="mt-1 font-semibold text-gray-900">React, Next.js, TypeScript, Tailwind, Node.js, FastAPI</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-500">Skills</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {["JavaScript","TypeScript","React","Next.js","Tailwind CSS","Spline","Three.js","Node.js","FastAPI","MongoDB","PostgreSQL","REST","WebSockets","Jest","Playwright","GitHub Actions","Docker"].map((skill) => (
                  <span key={skill} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-0 rounded-2xl bg-gradient-to-br from-indigo-200/60 via-cyan-200/60 to-teal-200/60 blur-2xl" />
            <div className="relative z-10 rounded-2xl border bg-white p-6 shadow-lg">
              <ul className="space-y-4">
                {[
                  'Type‑safe APIs with FastAPI + TypeScript clients',
                  '3D & interactive visuals using Spline / Three.js',
                  'Testing with Jest & Playwright for reliability',
                  'CI/CD pipelines with GitHub Actions & Docker',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
