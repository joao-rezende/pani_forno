import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, CheckCircle2, MessageSquare, Truck, ShoppingCart } from 'lucide-react'

const WA_LINK =
  'https://wa.me/5516991967195?text=Ol%C3%A1%21+Sou+da+%5BEMPRESA%5D+em+%5BCIDADE%2FUF%5D.+Quero+comprar+produtos+congelados+da+Pani%26Forno.+Pode+me+enviar+cat%C3%A1logo%2C+pre%C3%A7os+e+condi%C3%A7%C3%B5es+para+B2B%3F+Meu+nome+%C3%A9+%5BNOME%5D.'

const idealClients = [
  'Padarias e confeitarias',
  'Mercados e lojas de conveniência',
  'Cafeterias e lanchonetes',
  'Restaurantes e food service',
]

const steps = [
  {
    icon: MessageSquare,
    num: '01',
    title: 'Chame no WhatsApp',
    desc: 'Informe sua empresa e cidade. Atendimento rápido e personalizado.',
  },
  {
    icon: ShoppingCart,
    num: '02',
    title: 'Receba o catálogo',
    desc: 'Catálogo completo, preços e condições comerciais para B2B.',
  },
  {
    icon: Truck,
    num: '03',
    title: 'Comece a vender',
    desc: 'Combine frequência de entrega/retirada e aumente seu estoque.',
  },
]

export default function ForCompanies() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="companies" className="py-24 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/3" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Ideal clients */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-secondary-light font-bold text-sm uppercase tracking-widest mb-3">
              Para Empresas
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-6">
              Atendimento exclusivo B2B para sua operação
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              A Pani&amp;Forno atende somente B2B, ajudando operações a manterem ritmo de produção,
              padrão de qualidade e estoque inteligente. Ideal para:
            </p>
            <ul className="space-y-4">
              {idealClients.map((client) => (
                <li key={client} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} className="text-white" />
                  </div>
                  <span className="text-white font-semibold">{client}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: How to buy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            <p className="text-secondary-light font-bold text-sm uppercase tracking-widest mb-6">
              Como comprar
            </p>
            <div className="space-y-5 mb-10">
              {steps.map((step) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.num}
                    className="flex gap-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                        <Icon size={20} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-secondary-light text-xs font-bold mb-0.5">{step.num}</div>
                      <h3 className="text-white font-black text-base mb-1">{step.title}</h3>
                      <p className="text-blue-200 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 bg-secondary hover:bg-secondary-dark text-white font-black px-8 py-5 rounded-full transition-colors shadow-2xl text-lg w-full"
            >
              <MessageCircle size={22} />
              Falar com um vendedor agora
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
