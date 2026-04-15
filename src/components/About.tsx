import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, Calendar, MapPin, Building2 } from 'lucide-react'

const WA_LINK =
  'https://wa.me/5516991967195?text=Ol%C3%A1%21+Sou+da+%5BEMPRESA%5D+em+%5BCIDADE%2FUF%5D.+Quero+comprar+produtos+congelados+da+Pani%26Forno.+Pode+me+enviar+cat%C3%A1logo%2C+pre%C3%A7os+e+condi%C3%A7%C3%B5es+para+B2B%3F+Meu+nome+%C3%A9+%5BNOME%5D.'

const stats = [
  { icon: Calendar, value: '2019', label: 'Fundada em' },
  { icon: MapPin, value: 'RP–SP', label: 'Ribeirão Preto' },
  { icon: Building2, value: 'B2B', label: 'Somente empresas' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-3">
              Quem somos
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-6">
              Venda com consistência: linha congelada para o seu negócio
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              A Pani&amp;Forno é uma empresa B2B de massas, pães, pão de queijo e salgados
              congelados, criada para atender operações que precisam de praticidade,
              padronização e eficiência no dia a dia. Fundada em 2019, atuamos a partir de
              Ribeirão Preto – SP, oferecendo uma linha com alto giro para apoiar mercados,
              padarias, cafeterias e food service a manterem ritmo de produção e qualidade
              constante.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              {stats.map((s) => {
                const Icon = s.icon
                return (
                  <div key={s.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-black text-gray-900 text-lg leading-none">{s.value}</div>
                      <div className="text-xs text-gray-500 font-medium">{s.label}</div>
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
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-7 py-4 rounded-full transition-colors shadow-lg"
            >
              <MessageCircle size={20} />
              Falar com o Comercial no WhatsApp
            </motion.a>
          </motion.div>

          {/* Company photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="relative"
          >
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-primary/5 rounded-3xl" />
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden aspect-[4/3] flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300">
              <div className="text-6xl mb-4">🏭</div>
              <div className="text-center">
                <div className="text-gray-700 font-bold text-sm mb-2">📸 Espaço para foto da empresa</div>
                <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
                  <strong>Foto sugerida:</strong> Time da Pani&amp;Forno em frente à fábrica/galpão,
                  ou instalação com câmaras frias e produtos. Transmite confiança e
                  realidade da operação.
                </p>
              </div>
              <div className="mt-4 bg-primary text-white text-xs font-bold px-4 py-2 rounded-full">
                Substituir por foto real
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-secondary text-white rounded-2xl px-5 py-3 shadow-lg">
              <div className="font-black text-xl">+5 anos</div>
              <div className="text-xs font-medium opacity-90">atendendo B2B</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
