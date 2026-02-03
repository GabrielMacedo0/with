import { CheckoutTransition } from '@/app/components/CheckoutTransition';

export default function Checkout() {
  // Você pode passar a URL do carrinho da Greenn aqui
  // Exemplo: const greennUrl = 'https://greenn.com.br/checkout/seu-produto-id';
  
  return (
    <CheckoutTransition 
      greennCheckoutUrl="https://greenn.com.br/checkout"
      productName="Consultoria de Carreira With"
    />
  );
}
