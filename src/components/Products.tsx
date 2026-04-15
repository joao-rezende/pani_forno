import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { MessageCircle, Package, Barcode } from 'lucide-react'

const WA_LINK =
  'https://wa.me/5516991967195?text=Ol%C3%A1%21+Sou+da+%5BEMPRESA%5D+em+%5BCIDADE%2FUF%5D.+Quero+comprar+produtos+congelados+da+Pani%26Forno.+Pode+me+enviar+cat%C3%A1logo%2C+pre%C3%A7os+e+condi%C3%A7%C3%B5es+para+B2B%3F+Meu+nome+%C3%A9+%5BNOME%5D.'

interface Product {
  name: string
  pkg: string
  ean?: string
}

interface Category {
  id: string
  label: string
  emoji: string
  color: string
  products: Product[]
}

const categories: Category[] = [
  {
    id: 'paes',
    label: 'Pães e Pré-assados',
    emoji: '🥖',
    color: 'bg-amber-500',
    products: [
      { name: 'Pão Francês 6h – Tradicional (congelado)', pkg: 'Pct 9kg', ean: '7898994844013' },
      { name: 'Pão Francês 12h – Baixa fermentação (congelado)', pkg: 'Pct 9kg' },
      { name: 'Pão Francês – Baguete (congelada)', pkg: 'Pct 9kg' },
      { name: 'Pão de Hambúrguer (congelado)', pkg: 'Pct 5kg', ean: '7898994912385' },
      { name: 'Pão Caseirinho (congelado)', pkg: 'Pct 5kg', ean: '7898994912354' },
    ],
  },
  {
    id: 'pdq',
    label: 'Pão de Queijo',
    emoji: '🧀',
    color: 'bg-yellow-500',
    products: [
      { name: 'Pão de Queijo – Titito Lanchinho', pkg: '1kg', ean: '7898968887046' },
      { name: 'Pão de Queijo Tradicional', pkg: '1kg', ean: '7898994844068' },
      { name: 'Pão de Queijo Coquetel', pkg: '1kg', ean: '7898994844099' },
      { name: 'Pão de Queijo Lanche', pkg: '1kg', ean: '7898994844075' },
      { name: 'Pão de Queijo Lanche 100g', pkg: '1kg', ean: '7898968887640' },
      { name: 'Pão de Queijo Palito 100g', pkg: '1kg', ean: '7898968887008' },
      { name: 'Pão de Queijo Tradicional Empanado', pkg: '1kg', ean: '7898968887107' },
    ],
  },
  {
    id: 'salgados',
    label: 'Salgados Congelados',
    emoji: '🥟',
    color: 'bg-orange-500',
    products: [
      { name: 'Coxinha congelada 140g', pkg: 'Pct 1,3kg' },
      { name: 'Enroladinho Presunto e Queijo 140g', pkg: 'Pct 1kg' },
      { name: 'Bolinha de queijo congelada 70g', pkg: 'Pct 1kg' },
    ],
  },
]

export default function Products() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTab, setActiveTab] = useState('paes')

  const activeCategory = categories.find((c) => c.id === activeTab)!

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-3">
            Portfólio
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Top 15 produtos (mais pedidos)
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Linha B2B completa para padarias, mercados, cafeterias e food service.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-primary text-white shadow-md shadow-primary/30'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {activeCategory.products.map((product, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-3"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Package size={18} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-sm leading-snug">{product.name}</h3>
                    <p className="text-xs text-secondary font-semibold mt-0.5">{product.pkg}</p>
                  </div>
                </div>
                {product.ean && (
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs border-t border-gray-50 pt-2">
                    <Barcode size={12} />
                    <span>EAN: {product.ean}</span>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <div className="inline-block bg-white border border-primary/20 rounded-3xl px-8 py-7 shadow-sm">
            <p className="text-gray-700 font-semibold text-lg mb-5">
              Quer catálogo completo e tabela B2B? Fale com o comercial no WhatsApp.
            </p>
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-bold px-8 py-4 rounded-full transition-colors shadow-md"
            >
              <MessageCircle size={20} />
              Solicitar Catálogo e Preços
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
