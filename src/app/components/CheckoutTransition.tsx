import { ShieldCheck, Lock, CreditCard, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CheckoutTransitionProps {
  greennCheckoutUrl?: string;
  productName?: string;
}

export function CheckoutTransition({ 
  greennCheckoutUrl = 'https://greenn.com.br/checkout', 
  productName = 'Consultoria de Carreira With'
}: CheckoutTransitionProps) {
  
  const handleCheckout = () => {
    window.location.href = greennCheckoutUrl;
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full">
        {/* Header com logo */}
        <div className="text-center mb-12">
          <h1 className="text-3xl mb-2" style={{ color: '#1a2e4a' }}>With</h1>
          <p className="text-sm" style={{ color: '#1a2e4a', opacity: 0.6 }}>Consultoria de Carreira</p>
        </div>

        {/* Card principal */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border" style={{ borderColor: 'rgba(26, 46, 74, 0.1)' }}>
          
          {/* Ícone de confirmação */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(31, 166, 168, 0.1)' }}>
              <CheckCircle2 className="w-10 h-10" style={{ color: '#1fa6a8' }} />
            </div>
          </div>

          {/* Título e descrição */}
          <div className="text-center mb-10">
            <h2 className="mb-4" style={{ color: '#1a2e4a' }}>
              Você está quase lá!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Seu pedido de <strong>{productName}</strong> está pronto para finalização.
            </p>
            <p className="text-gray-600">
              Você será direcionado para nossa plataforma de pagamento segura da Greenn, 
              onde poderá concluir sua compra com total segurança e praticidade.
            </p>
          </div>

          {/* Elementos de confiança */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'rgba(229, 217, 209, 0.3)' }}>
              <div className="flex justify-center mb-3">
                <ShieldCheck className="w-8 h-8" style={{ color: '#1fa6a8' }} />
              </div>
              <h4 className="mb-2" style={{ color: '#1a2e4a' }}>100% Seguro</h4>
              <p className="text-sm text-gray-600">
                Ambiente protegido e certificado
              </p>
            </div>

            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'rgba(229, 217, 209, 0.3)' }}>
              <div className="flex justify-center mb-3">
                <Lock className="w-8 h-8" style={{ color: '#1fa6a8' }} />
              </div>
              <h4 className="mb-2" style={{ color: '#1a2e4a' }}>Dados Protegidos</h4>
              <p className="text-sm text-gray-600">
                Criptografia de ponta a ponta
              </p>
            </div>

            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'rgba(229, 217, 209, 0.3)' }}>
              <div className="flex justify-center mb-3">
                <CreditCard className="w-8 h-8" style={{ color: '#1fa6a8' }} />
              </div>
              <h4 className="mb-2" style={{ color: '#1a2e4a' }}>Múltiplas Formas</h4>
              <p className="text-sm text-gray-600">
                Cartão, boleto e Pix
              </p>
            </div>
          </div>

          {/* CTA Principal */}
          <button
            onClick={handleCheckout}
            className="w-full py-5 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3 group"
            style={{ backgroundColor: '#1a2e4a', color: 'white' }}
          >
            <span className="text-lg">Ir para o Pagamento Seguro</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Garantia */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full" style={{ backgroundColor: 'rgba(56, 122, 214, 0.1)' }}>
              <ShieldCheck className="w-5 h-5" style={{ color: '#387ad6' }} />
              <span className="text-sm" style={{ color: '#387ad6' }}>
                Garantia de 7 dias - 100% do seu dinheiro de volta
              </span>
            </div>
          </div>

          {/* Informação adicional */}
          <div className="mt-8 pt-6 border-t text-center" style={{ borderColor: 'rgba(26, 46, 74, 0.1)' }}>
            <p className="text-sm text-gray-500">
              Ao continuar, você concorda com nossos{' '}
              <a href="#termos" className="underline hover:no-underline" style={{ color: '#387ad6' }}>
                Termos de Serviço
              </a>
              {' '}e{' '}
              <a href="#privacidade" className="underline hover:no-underline" style={{ color: '#387ad6' }}>
                Política de Privacidade
              </a>
            </p>
          </div>

        </div>

        {/* Footer de suporte */}
        <div className="text-center mt-8">
          <p className="text-gray-500 mb-2">
            Precisa de ajuda?
          </p>
          <a 
            href="mailto:contato@with.com.br" 
            className="inline-flex items-center gap-2 hover:underline"
            style={{ color: '#1fa6a8' }}
          >
            Entre em contato conosco
          </a>
        </div>

      </div>
    </div>
  );
}
