import { MessageCircle, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'

const WA_LINK =
  'https://wa.me/5516991967195?text=Ol%C3%A1%21+Sou+da+%5BEMPRESA%5D+em+%5BCIDADE%2FUF%5D.+Quero+comprar+produtos+congelados+da+Pani%26Forno.+Pode+me+enviar+cat%C3%A1logo%2C+pre%C3%A7os+e+condi%C3%A7%C3%B5es+para+B2B%3F+Meu+nome+%C3%A9+%5BNOME%5D.'

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Por que Pani&Forno', href: '#why-us' },
  { label: 'Sobre', href: '#about' },
  { label: 'Produtos', href: '#products' },
]

const moreLinks = [
  { label: 'Clientes', href: '#clients' },
  { label: 'Para Empresas', href: '#companies' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Contato', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Logo size={56} />
              <div>
                <div className="font-black text-xl">Pani&amp;Forno</div>
                <div className="text-blue-300 text-xs font-semibold">Distribuidora de Congelados</div>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6 max-w-xs">
              Distribuindo pães, pão de queijo e salgados congelados para empresas em Ribeirão
              Preto – SP e região. Somente B2B.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white text-sm font-bold px-5 py-3 rounded-full transition-colors"
            >
              <MessageCircle size={16} />
              Falar com o Comercial
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest text-blue-300 mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-blue-200 hover:text-white text-sm transition-colors"
                    dangerouslySetInnerHTML={{ __html: l.label }}
                  />
                </li>
              ))}
              {moreLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-blue-200 hover:text-white text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest text-blue-300 mb-5">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-secondary-light mt-0.5 flex-shrink-0" />
                <span className="text-blue-200 text-sm">(16) 99196-7195</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={14} className="text-secondary-light mt-0.5 flex-shrink-0" />
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white text-sm transition-colors"
                >
                  WhatsApp Comercial B2B
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-secondary-light mt-0.5 flex-shrink-0" />
                <span className="text-blue-200 text-sm">Ribeirão Preto – SP e região</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-300 text-xs">
            © {new Date().getFullYear()} Pani&amp;Forno – Todos os direitos reservados.
          </p>
          <p className="text-blue-400 text-xs">
            Distribuidora · Ribeirão Preto, SP
          </p>
        </div>
      </div>
    </footer>
  )
}
