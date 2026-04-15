import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, Send, CheckCircle2 } from 'lucide-react'

const WA_LINK =
  'https://wa.me/5516991967195?text=Ol%C3%A1%21+Sou+da+%5BEMPRESA%5D+em+%5BCIDADE%2FUF%5D.+Quero+comprar+produtos+congelados+da+Pani%26Forno.+Pode+me+enviar+cat%C3%A1logo%2C+pre%C3%A7os+e+condi%C3%A7%C3%B5es+para+B2B%3F+Meu+nome+%C3%A9+%5BNOME%5D.'

const segmentos = [
  'Padaria / Confeitaria',
  'Mercado / Conveniência',
  'Cafeteria',
  'Lanchonete',
  'Restaurante / Food Service',
  'Outro',
]

interface FormData {
  nome: string
  empresa: string
  cnpj: string
  cidadeuf: string
  whatsapp: string
  email: string
  segmento: string
  mensagem: string
}

const emptyForm: FormData = {
  nome: '',
  empresa: '',
  cnpj: '',
  cidadeuf: '',
  whatsapp: '',
  email: '',
  segmento: '',
  mensagem: '',
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState<FormData>(emptyForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setForm(emptyForm)
  }

  const inputClass =
    'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all'

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-3">
            Contato
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Fale com a Pani&amp;Forno</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">
            Atendimento comercial B2B. Solicite catálogo, preços e condições.
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-8 items-start">
          {/* WhatsApp block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/4 translate-x-1/4" />
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-black mb-3">
                Atendimento comercial no WhatsApp
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                Solicite catálogo, preços e condições para revenda/food service. Resposta
                rápida e atendimento personalizado.
              </p>

              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 bg-secondary hover:bg-secondary-dark text-white font-black px-8 py-5 rounded-full transition-colors shadow-xl text-lg w-full"
              >
                <MessageCircle size={22} />
                Chamar no WhatsApp (B2B)
              </motion.a>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="font-black text-xl">Seg–Sex</div>
                  <div className="text-blue-200 text-xs">8h – 18h</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="font-black text-xl">Sábado</div>
                  <div className="text-blue-200 text-xs">8h – 12h</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="bg-gray-50 rounded-3xl p-8 border border-gray-100"
          >
            <h3 className="text-2xl font-black text-gray-900 mb-2">
              Prefere contato por formulário?
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Preencha abaixo e o comercial retorna o mais rápido possível.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} className="text-green-600" />
                </div>
                <h4 className="font-black text-gray-900 text-xl mb-3">Mensagem recebida!</h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Recebemos sua mensagem. Em breve um vendedor entrará em contato.
                  Se quiser agilizar, fale conosco no WhatsApp.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-secondary text-white font-bold px-6 py-3 rounded-full text-sm"
                >
                  <MessageCircle size={16} />
                  Chamar no WhatsApp
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="block mx-auto mt-3 text-xs text-gray-400 underline"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-600 mb-1 block">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={form.nome}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-600 mb-1 block">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      required
                      placeholder="Nome da empresa"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-600 mb-1 block">
                      CNPJ (opcional)
                    </label>
                    <input
                      type="text"
                      name="cnpj"
                      value={form.cnpj}
                      onChange={handleChange}
                      placeholder="00.000.000/0000-00"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-600 mb-1 block">
                      Cidade/UF *
                    </label>
                    <input
                      type="text"
                      name="cidadeuf"
                      value={form.cidadeuf}
                      onChange={handleChange}
                      required
                      placeholder="Ex: Ribeirão Preto/SP"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-600 mb-1 block">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={form.whatsapp}
                      onChange={handleChange}
                      required
                      placeholder="(16) 99999-9999"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-600 mb-1 block">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="email@empresa.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-600 mb-1 block">
                    Segmento *
                  </label>
                  <select
                    name="segmento"
                    value={form.segmento}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="">Selecione seu segmento</option>
                    {segmentos.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-600 mb-1 block">
                    Mensagem * <span className="text-gray-400 font-normal">(produtos de interesse e volume médio)</span>
                  </label>
                  <textarea
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Quais produtos têm interesse? Volume médio por semana/mês?"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-full transition-colors shadow-md text-base"
                >
                  <Send size={18} />
                  Enviar Mensagem
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
