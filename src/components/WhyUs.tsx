import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Zap, TrendingUp, Star } from 'lucide-react'

const benefits = [
  {
    icon: CheckCircle2,
    color: 'bg-primary/10 text-primary',
    title: 'Padronização',
    desc: 'Mesmo tamanho, mesmo ponto, mesma entrega — sempre. Seus clientes recebem o mesmo produto toda vez.',
  },
  {
    icon: Zap,
    color: 'bg-secondary/10 text-secondary',
    title: 'Agilidade no preparo',
    desc: 'Produtos prontos para assar ou finalizar. Reduza tempo de produção e aumente a capacidade de atendimento.',
  },
  {
    icon: TrendingUp,
    color: 'bg-green-100 text-green-600',
    title: 'Melhor giro, menos desperdício',
    desc: 'Congele, controle o estoque e produza sob demanda. Só descongele o que vai vender.',
  },
  {
    icon: Star,
    color: 'bg-amber-100 text-amber-600',
    title: 'Linha campeã de saída',
    desc: 'Pão de queijo, pães e salgados para café, lanches e conveniência — os itens mais procurados no balcão.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-us" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-3">
            Diferenciais
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
            Feito para quem precisa de resultado no balcão
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">
            Veja por que padarias, mercados e food service escolhem a Pani&amp;Forno.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((b) => {
            const Icon = b.icon
            return (
              <motion.div
                key={b.title}
                variants={cardVariants}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${b.color}`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{b.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
