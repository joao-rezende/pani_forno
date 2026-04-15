import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos Mendonça',
    role: 'Proprietário',
    company: 'Padaria Pão de Ouro',
    text: 'Desde que comecei a comprar da Pani&Forno, meu estoque de pão de queijo nunca mais ficou vazio. Produto de qualidade e entrega certinha. Recomendo muito para quem precisa de confiança no fornecedor.',
    stars: 5,
    avatar: 'CM',
    color: 'bg-blue-500',
  },
  {
    name: 'Renata Souza',
    role: 'Gerente Comercial',
    company: 'Rede Conveniência & Cia',
    text: 'Trabalhamos com a Pani&Forno há mais de 2 anos e a padronização é impecável. Todo lote chega igual. Para uma rede que precisa de consistência em todas as lojas, isso é fundamental.',
    stars: 5,
    avatar: 'RS',
    color: 'bg-purple-500',
  },
  {
    name: 'Fábio Almeida',
    role: 'Dono',
    company: 'Lanchonete Sabor & Arte',
    text: 'O salgado congelado deles é perfeito. Assamos na hora e o cliente nunca notou que não é fresco — porque a qualidade é essa. O preço para B2B também é muito competitivo.',
    stars: 5,
    avatar: 'FA',
    color: 'bg-green-500',
  },
  {
    name: 'Juliana Ferreira',
    role: 'Compradora',
    company: 'Supermercado Boa Vista',
    text: 'O atendimento comercial é excelente. Sempre que preciso ajustar o pedido ou acelerar uma entrega, o suporte resolve rapidamente. Parceiro de verdade para o meu negócio.',
    stars: 5,
    avatar: 'JF',
    color: 'bg-rose-500',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-3">
            Depoimentos
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">
            Empresas que confiam na Pani&amp;Forno para manter a operação rodando com qualidade.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Quote icon */}
              <Quote size={28} className="text-primary/20 mb-4 flex-shrink-0" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={14} className="fill-secondary text-secondary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-gray-50 pt-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-black flex-shrink-0 ${t.color}`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role} · {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
