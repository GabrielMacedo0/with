import { useState, FormEvent } from 'react';
import { Monitor, Phone, MessageCircle, ArrowLeft, Send} from 'lucide-react';

interface ServicesContactFormPageProps {
  onNavigate?: (page: string) => void;
}

export function ContactForm ({ onNavigate }: ServicesContactFormPageProps)  {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    desafio: '',
    remuneracao: '',
    prazo: '',
    contato: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Substitua a URL abaixo pela URL do webhook do seu n8n
      const N8N_WEBHOOK_URL = 'https://matuprocopio.app.n8n.cloud/webhook/08afff31-0973-4e5e-80aa-b44e93420d1c';
      
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          desafio: formData.desafio,
          remuneracao: formData.remuneracao,
          prazo: formData.prazo,
          contato:formData.contato,
          mensagem: formData.mensagem,
          data_envio: new Date().toISOString(),
          origem: 'Formulário de Contato - Site'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Limpar formulário
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          desafio: '',
          remuneracao: '',
          prazo: '',
          contato: '',
          mensagem: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-20 bg-white" id="contactform">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero / Header da página */}
        <div className="mb-20">
          {/* Breadcrumb / Voltar */}
          <div className="flex items-center justify-between mb-10">
            <button
              onClick={() => onNavigate?.("home")}
              className="
                inline-flex items-center gap-2
                text-sm text-[#1a2e4a]/60
                hover:text-[#1a2e4a]
                transition-all
                hover:-translate-x-0.5">
              <ArrowLeft size={16} />
              Início
            </button>
          </div>

          {/* Conteúdo do Hero */}
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#1a2e4a] leading-tight">
              Vamos conversar sobre<br />
              o próximo passo da sua carreira
            </h1>

            <p className="mt-4 text-lg text-[#1a2e4a]/70">
              Preencha o formulário abaixo e um especialista entrará em contato para
              entender sua situação e orientar você com clareza e estratégia.
            </p>
          </div>

          {/* Divider elegante */}
          <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-[#1a2e4a]/15 to-transparent" />
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-2">Nome completo</label>
              <input 
                type="text" 
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="Digite seu nome"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">E-mail</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Telefone</label>
              <input 
                type="tel" 
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="(00) 00000-0000"
              />
            </div>
            <div>
              <SelectField 
                label="Qual seu maior desafio hoje?"
                name="desafio"
                options={[
                  "Crescimento vertical (cargo e responsabilidade)",
                  "Crescimento financeiro",
                  "Mudança de área",
                  "Falta de oportunidades",
                ]}
                value={formData.desafio}
                onChange={(value) =>
                  setFormData({ ...formData, desafio: value })
                }
              />
            </div>
            <div>
              <SelectField 
                label="Sua última remuneração fina na faixa de:"
                name="remuneracao"
                options={[
                  "Até R$5.000",
                  "De R$5.000 até R$10.000",
                  "Entre R$10.000 e R$20.000",
                  "Entre R$20.000 e R$30.000",
                  "Entre R$30.000 e R$50.000",
                  "Acima de R$50.000",
                ]}
                value={formData.remuneracao}
                onChange={(value) =>
                  setFormData({ ...formData, remuneracao: value })
                }
              />
            </div>
            <div>
              <SelectField 
                label="Em quanto tempo você gostaria de estar em uma nova posição?"
                name="prazo"
                options={[
                  "Até 3 meses",
                  "3 a 6 meses",
                  "6 a 12 meses",
                  "Sem prazo definido",
                ]}
                value={formData.prazo}
                onChange={(value) =>
                  setFormData({ ...formData, prazo: value })
                }
              />
            </div>
            <div>
              <SelectField 
                label="Como prefere ser contatado(a)?"
                name="contato"
                options={["Ligação", "WhatsApp"]}
                value={formData.contato}
                onChange={(value) =>
                  setFormData({ ...formData, contato: value })
                }
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Mensagem</label>
              <textarea 
                rows={5}
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="Conte-nos um pouco sobre sua situação profissional atual e como podemos te ajudar..."
              ></textarea>
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded">
                ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded">
                ❌ Erro ao enviar mensagem. Por favor, tente novamente.
              </div>
            )}

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-900 text-white py-4 rounded hover:bg-blue-800 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
        </div>
        <div>
          {/* Informações de contato */}
          <div className="bg-gray-50 p-8 rounded-lg mb-6">
            <h3 className="text-gray-900 mb-6">Informações de Contato</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Atendimento Online</p>
                  <p className="text-gray-900">100% digital para todo o Brasil</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-900" />
                </div>
                  <a
                    href="https://api.whatsapp.com/send?phone=5511951598050&text=Olá!%20Gostaria%20de%20mais%20informações."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div>
                      <p className="text-sm text-gray-500 mb-1">WhatsApp</p>
                      <p className="text-gray-900 hover:underline">(11) 95159-8050</p>
                    </div>
                  </a>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Fale conosco agora</p>
                  <p className="text-gray-900">Clique no WhatsApp e fale com um especialista</p>
                </div>
              </div>
            </div>
          </div>

          {/* Horário */}
          <div className="mt-6 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-900">
            <p className="text-gray-700">
              <strong>Horário de atendimento:</strong><br />
                      Segunda a sexta: 9h às 18h
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

type SelectFieldProps = {
  label: string
  name: string
  options: string[]
  value: string
  onChange: (value: string) => void
}

const SelectField = ({
  label,
  name,
  options,
  value,
  onChange,
}: SelectFieldProps) => (
  <div>
    <label className="block text-gray-700 mb-3">
      {label}
    </label>

    <div className="relative">
      <select
        name={name}
        value={value}
        required
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full px-4 py-3 pr-10
          border-2 border-[#e5d9d1]
          rounded
          bg-white
          text-[#1a2e4a]
          cursor-pointer
          transition-all duration-200
          hover:border-[#387ad6]
          focus:outline-none
          focus:ring-2 focus:ring-[#3d8cc9]/30
        "
      >
        <option value="" disabled>
          Selecione uma opção
        </option>

        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* seta do select (estilizada) */}
      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#387ad6]">
        ▼
      </div>
    </div>
  </div>
)
