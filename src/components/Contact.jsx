import { Mail, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-indigo-600" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Get in Touch</h2>
        </div>

        <form className="mt-8 grid gap-4 sm:grid-cols-2">
          <input
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            placeholder="Your name"
            required
          />
          <input
            type="email"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            placeholder="Email address"
            required
          />
          <textarea
            rows={4}
            className="sm:col-span-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            placeholder="Tell me about your project..."
            required
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white shadow hover:bg-gray-800 sm:col-span-2"
          >
            <Send className="h-4 w-4" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
