import { motion } from 'framer-motion'
import { MessageCircle, FileText, MapPin, Snowflake } from 'lucide-react'

const WA_LINK =
  'https://wa.me/5516991967195?text=Ol%C3%A1%21+Sou+da+%5BEMPRESA%5D+em+%5BCIDADE%2FUF%5D.+Quero+comprar+produtos+congelados+da+Pani%26Forno.+Pode+me+enviar+cat%C3%A1logo%2C+pre%C3%A7os+e+condi%C3%A7%C3%B5es+para+B2B%3F+Meu+nome+%C3%A9+%5BNOME%5D.'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-white flex items-center pt-16 relative overflow-hidden"
    >
      {/* Product image — right-side background */}
      <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block pointer-events-none select-none">
        <img
          src="https://github.com/user-attachments/assets/6ae225fc-0bbc-4dfd-8251-3a467aef7eea"
          alt="Bandeja com pães, pão de queijo e salgados Pani&Forno"
          className="absolute inset-0 w-full h-full object-cover object-left"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        {/* Text Content — left half */}
        <div className="lg:w-1/2">
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
              <span className="inline-flex items-center gap-1.5 bg-secondary/10 text-secondary border border-secondary/30 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                <Snowflake size={12} />
                Distribuidora · Congelados
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-gray-900 leading-[1.1] mb-6">
              Congelados para sua operação{' '}
              <span className="text-secondary">vender mais</span>, com
              padronização e praticidade.
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
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
                className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-bold px-7 py-4 rounded-full transition-colors shadow-lg shadow-secondary/30"
              >
                <MessageCircle size={20} />
                Falar com o Comercial
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 text-gray-700 hover:text-secondary font-bold px-7 py-4 rounded-full transition-colors"
              >
                <FileText size={20} />
                Solicitar Orçamento
              </motion.a>
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin size={14} className="text-primary flex-shrink-0" />
              Atendimento comercial em Ribeirão Preto – SP e região.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
