import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-gray-900 text-lg">
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">MyPortfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <div className="ml-4 flex items-center gap-3">
              <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100">
                <Github className="h-5 w-5" />
              </a>
              <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100">
                <Linkedin className="h-5 w-5" />
              </a>
              <a aria-label="Email" href="#contact" className="p-2 rounded-md hover:bg-gray-100">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </nav>

          <button
            aria-label="Toggle menu"
            className="md:hidden rounded-md p-2 hover:bg-gray-100"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="mt-2 grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
