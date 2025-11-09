import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/30 px-3 py-1 text-xs font-semibold backdrop-blur-md text-gray-800">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for new projects
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Building modern, playful, and interactive web experiences
            </h1>
            <p className="mt-4 text-gray-700 text-lg">
              I craft responsive, accessible, and high-performance products with a focus on delightful user experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center rounded-md bg-gray-900 text-white px-5 py-3 font-medium shadow hover:bg-gray-800 transition-colors">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center rounded-md bg-white/70 backdrop-blur text-gray-900 px-5 py-3 font-medium shadow hover:bg-white transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white" />
    </section>
  )
}
