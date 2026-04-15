import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import Logo from './Logo'

const WA_LINK =
  'https://wa.me/5516991967195?text=Ol%C3%A1%21+Sou+da+%5BEMPRESA%5D+em+%5BCIDADE%2FUF%5D.+Quero+comprar+produtos+congelados+da+Pani%26Forno.+Pode+me+enviar+cat%C3%A1logo%2C+pre%C3%A7os+e+condi%C3%A7%C3%B5es+para+B2B%3F+Meu+nome+%C3%A9+%5BNOME%5D.'

const navItems = [
  { label: 'Início', href: '#hero' },
  { label: 'Por que nós', href: '#why-us' },
  { label: 'Sobre', href: '#about' },
  { label: 'Produtos', href: '#products' },
  { label: 'Clientes', href: '#clients' },
  { label: 'Empresas', href: '#companies' },
  { label: 'Contato', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-sm border-b border-gray-100'
      }`}
    >
      {/* Top primary color bar */}
      <div className="h-1 bg-primary w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <Logo size={48} />
            <div className="hidden sm:block">
              <div className="text-primary font-black text-lg leading-none">Pani&Forno</div>
              <div className="text-secondary text-xs font-semibold leading-none">Distribuidora B2B</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:scale-105 shadow-sm"
          >
            <MessageCircle size={16} />
            Falar no WhatsApp
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 shadow-lg">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary py-2 border-b border-gray-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-secondary text-white text-sm font-bold px-5 py-3 rounded-full mt-2"
              onClick={() => setOpen(false)}
            >
              <MessageCircle size={16} />
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
