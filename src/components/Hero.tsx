import { motion } from 'framer-motion'
import { MessageCircle, FileText, MapPin, Snowflake } from 'lucide-react'

const WA_LINK =
  'https://wa.me/5516991967195?text=Ol%C3%A1%21+Sou+da+%5BEMPRESA%5D+em+%5BCIDADE%2FUF%5D.+Quero+comprar+produtos+congelados+da+Pani%26Forno.+Pode+me+enviar+cat%C3%A1logo%2C+pre%C3%A7os+e+condi%C3%A7%C3%B5es+para+B2B%3F+Meu+nome+%C3%A9+%5BNOME%5D.'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-primary-dark via-primary to-primary-light flex items-center pt-16 relative overflow-hidden"
    >
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/3" />
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-white/5 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 mb-5"
            >
              <span className="inline-flex items-center gap-1.5 bg-secondary/20 text-secondary-light border border-secondary/30 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                <Snowflake size={12} />
                Distribuidora · Congelados
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-white leading-[1.1] mb-6">
              Congelados para sua operação{' '}
              <span className="text-secondary-light">vender mais</span>, com
              padronização e praticidade.
            </h1>

            <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-xl">
              A Pani&amp;Forno atende somente empresas (B2B) com linha de pães, pão de queijo e
              salgados congelados — produtos ideais para rotinas intensas, reposição constante
              e preparo eficiente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-bold px-7 py-4 rounded-full transition-colors shadow-xl shadow-black/20"
              >
                <MessageCircle size={20} />
                Falar com o Comercial
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 border-2 border-white/60 text-white hover:bg-white/10 font-bold px-7 py-4 rounded-full transition-colors"
              >
                <FileText size={20} />
                Solicitar Orçamento
              </motion.a>
            </div>

            <div className="flex items-center gap-2 text-blue-200 text-sm">
              <MapPin size={14} className="text-secondary-light flex-shrink-0" />
              Atendimento comercial em Ribeirão Preto – SP e região.
            </div>
          </motion.div>

          {/* Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Glow effects */}
              <div className="absolute -top-12 -right-12 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-blue-300/20 rounded-full blur-3xl" />

              {/* Product image */}
              <div className="relative">
                <img
                  src="https://github.com/user-attachments/assets/6ae225fc-0bbc-4dfd-8251-3a467aef7eea"
                  alt="Bandeja com pães, pão de queijo e salgados Pani&Forno"
                  className="w-full drop-shadow-2xl"
                />

                {/* Floating stats bar */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[90%] bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl px-6 py-3 flex justify-around shadow-xl">
                  {[
                    { value: '15+', label: 'Produtos' },
                    { value: 'B2B', label: 'Exclusivo' },
                    { value: '2019', label: 'Fundada' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-xl font-black text-secondary-light">{stat.value}</div>
                      <div className="text-xs text-blue-200 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
