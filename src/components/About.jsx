export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">About Me</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I’m a developer who loves turning ideas into interactive experiences. My work blends modern design systems with clean, scalable code. I enjoy collaborating with teams and clients to ship intuitive products that feel fast and look great on every device.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-sm text-gray-500">Specialties</p>
                <p className="mt-1 font-semibold text-gray-900">Frontend, UI/UX, Web Animations</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-sm text-gray-500">Stack</p>
                <p className="mt-1 font-semibold text-gray-900">React, TypeScript, Tailwind, FastAPI</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-0 rounded-2xl bg-gradient-to-br from-indigo-200/60 via-cyan-200/60 to-teal-200/60 blur-2xl" />
            <div className="relative z-10 rounded-2xl border bg-white p-6 shadow-lg">
              <ul className="space-y-4">
                {[
                  'Pixel-perfect, responsive layouts',
                  'Accessible components and interactions',
                  'Performance-focused architecture',
                  'Clean code with reusable patterns',
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
