import { useState } from "react";
import type { FormEvent } from "react";


import { Send } from 'lucide-react';


export function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
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
    <div>
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
  );
}
