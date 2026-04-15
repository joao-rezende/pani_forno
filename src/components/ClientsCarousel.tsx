import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const clients = [
  { name: 'Padaria Central', emoji: '🥐', color: '#F59E0B' },
  { name: 'Supermercado Boa Vista', emoji: '🛒', color: '#10B981' },
  { name: 'Cafeteria Aroma', emoji: '☕', color: '#8B5CF6' },
  { name: 'Mercadinho São João', emoji: '🏪', color: '#EF4444' },
  { name: 'Lanchonete Express', emoji: '🥪', color: '#F97316' },
  { name: 'Restaurante Sabor', emoji: '🍽️', color: '#06B6D4' },
  { name: 'Conveniência 24h', emoji: '🌙', color: '#6366F1' },
  { name: 'Buffet Gourmet', emoji: '🎩', color: '#EC4899' },
]

const doubledClients = [...clients, ...clients]

export default function ClientsCarousel() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="clients" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-3">
            Confiança
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
            Nossos Clientes
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">
            Empresas que já confiam na Pani&amp;Forno para abastecer suas operações com
            qualidade e consistência.
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 carousel-track py-2">
          {doubledClients.map((client, i) => (
            <div
              key={i}
              className="client-card flex-shrink-0 flex flex-col items-center gap-3 bg-white rounded-2xl px-7 py-5 shadow-sm border border-gray-100 min-w-[170px] cursor-default"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm"
                style={{ backgroundColor: `${client.color}18` }}
              >
                {client.emoji}
              </div>
              <span className="text-xs font-bold text-gray-700 text-center leading-tight max-w-[120px]">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
