import { Target, Users, TrendingUp, Award, CheckCircle2, Download, ArrowRight, Briefcase, BookOpen, MessageCircle, Monitor, Phone} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import AnaBeatriz from "@/assets/Ana-beatriz.jfif";
import Willian from "@/assets/Willian.jfif";
import Guilherme from "@/assets/Guilherme.jfif";
import Plano from "@/assets/planoA-planoB.png";
import HomeOffice from "@/assets/homeoffice.png";
import networking from "@/assets/networking.png";
import AboutUs from "@/assets/quem-somos.png";
import { CountUpCard } from '@/app/components/CountUpCard';
import { CompanyMarquee } from '@/app/components/CompanyMarquee';
import heroImage from '@/assets/Imagem.png';
import { useState } from 'react';

interface ServicesHomePageProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

export function ServicesHomePage({ onNavigate }: ServicesHomePageProps) {

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const nome = (form.elements.namedItem("nome") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const [message, setMessage] = useState<string | null>(null);

    try {
      const response = await fetch(import.meta.env.VITE_N8N_WEBHOOK_URL_EBOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar formulário");
      }

    setMessage("✅ Verifique seu e-mail! O eBook foi enviado.");
      form.reset();
    } catch (error) {
      console.error(error);
      alert("❌ Ocorreu um erro. Tente novamente.");
    }
  }
  
  return (
    <div className="animate-fade-in min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-gray-900 mb-6">
                Avançar na carreira exige estratégia
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Em fases de transição, estagnação ou reposicionamento, insistir sem direção costuma gerar desgaste e frustração. Avançar exige estratégia, clareza sobre o momento de carreira e leitura real do mercado. É nesse ponto que a With atua, organizando escolhas e estruturando movimentos profissionais mais conscientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#"
                  onClick={(e) => { e.preventDefault(); onNavigate("contact");}}
                  className="bg-blue-900 text-white px-8 py-4 rounded hover:bg-blue-800 transition text-center">Entre em contato</a>
                <a href="#services" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded hover:border-gray-400 transition text-center">
                  Conhecer Serviços
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">Mais de 2800 profissionais recolocados</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback 
                src={heroImage}
                alt="Consultora de carreira profissional"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="py-20 bg-white" >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Situações comuns em diferentes momentos de carreira</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Identifique a que mais se aproxima da sua realidade atual.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-blue-900" />
              </div>
              <h3 className="text-gray-900 mb-4">Quando o próximo passo não está claro</h3>
              <p className="text-gray-600 mb-6">
                Para profissionais que sentem que precisam avançar, mas ainda não têm clareza sobre direção, prioridades ou o tipo de oportunidade que faz sentido neste momento.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-blue-900" />
              </div>
              <h3 className="text-gray-900 mb-4">Quando você é chamado, mas não avança</h3>
              <p className="text-gray-600 mb-6">
                Para quem já participa de processos seletivos, mas encontra dificuldade em se posicionar, sustentar o discurso ou converter entrevistas em propostas.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-blue-900" />
              </div>
              <h3 className="text-gray-900 mb-4">Quando o esforço não gera retorno</h3>
              <p className="text-gray-600 mb-6">
                Para profissionais que estão aplicando para muitas vagas, mas de forma pouco estratégica, com desgaste e resultados inconsistentes.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Direto */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-4">
            Solicitar análise do meu momento profissional
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Um primeiro contato para entender contexto, objetivos e nível de acompanhamento necessário.
          </p>
          <a href="#contato" className="inline-block bg-white text-blue-900 px-10 py-4 rounded hover:bg-gray-100 transition">
            Próximo passo
          </a>
        </div>
      </section>

      {/* Prova de Valor */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Atuação baseada em experiência real de mercado</h2>
            <p className="text-xl text-gray-600">Ao longo dos anos, atuamos com profissionais em diferentes contextos, setores e momentos de carreira. Os dados abaixo refletem histórico de atuação</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CountUpCard end={2800} suffix="+" label="Profissionais em processos de recolocação" />
            <CountUpCard end={85} suffix="%" label="Avançaram em processos seletivos após ajuste de estratégia e posicionamento" />
            <CountUpCard end={30} suffix="%" label="Aumento médio de remuneração entre clientes que mudaram de posição" />
            <CountUpCard prefix="+" end={6} label="Anos de Experiência em recrutamento, carreira e processos seletivos" />
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="py-20 bg-white" id="sobre">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src= {AboutUs}
                alt="Consultora de carreira"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-gray-900 mb-6">Sobre a With</h2>
              <p className="text-gray-600 mb-6">
                A With é uma consultoria de carreira que atua com profissionais em diferentes momentos de carreira, especialmente quando avançar exige mais estratégia, contatos e leitura de mercado. Nosso trabalho se inicia com um diagnóstico do seu momento profissional e da definição da abordagem mais adequada para cada candidatura, evitando decisões baseadas em tentativa e erro.
              </p>

              <p className="text-gray-600 mb-6">
                Atuamos com processos estruturados, sem promessas rápidas ou soluções genéricas. Cada acompanhamento é definido a partir do momento de carreira, dos objetivos e da necessidade do cliente.
              </p>

              <p className="text-gray-600 mb-6">
                Trabalhamos com profissionais que buscam conduzir a carreira de forma mais consciente e consistente — e não com quem procura atalhos ou garantias de resultado.
              </p>

              <p className="text-gray-600">
                A With é liderada por Stephany Borowiec, consultora de carreira com mais de 10 anos de atuação em recrutamento, desenvolvimento profissional e processos seletivos.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded">
                  <Award className="w-5 h-5 text-blue-900" />
                  <span className="text-sm text-gray-700">Certificação Internacional em Career Coaching</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded">
                  <Briefcase className="w-5 h-5 text-blue-900" />
                  <span className="text-sm text-gray-700">MBA em Gestão de Pessoas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Detalhados */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Nossos Serviços em Detalhe</h2>
            <p className="text-xl text-gray-600">Soluções completas para cada etapa da sua jornada profissional</p>
          </div>
          <div className="space-y-8">
            {/* Serviço 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="bg-blue-50 p-8 flex items-center justify-center">
                  <Target className="w-24 h-24 text-blue-900" />
                </div>
                <div className="md:col-span-2 p-8">
                  <h3 className="text-gray-900 mb-4">Imersão de Carreira</h3>
                  <p className="text-gray-600 mb-6">
                    Processo individual voltado para profissionais que precisam de clareza antes de tomar decisões importantes. A imersão analisa trajetória, resultados, competências e contexto de mercado para definir direção, prioridades e próximos passos de forma estratégica.

                    Indicada quando o principal desafio é entender para onde ir e como estruturar o movimento.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Diagnóstico aprofundado do perfil, trajetória e momento de carreira</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Identificação de pontos fortes, lacunas e oportunidades reais no mercado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Definição de direcionamento estratégico e próximos passos aplicáveis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Serviço 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="bg-blue-50 p-8 flex items-center justify-center">
                  <Users className="w-24 h-24 text-blue-900" />
                </div>
                <div className="md:col-span-2 p-8">
                  <h3 className="text-gray-900 mb-4">Currículo e LinkedIn Estratégicos</h3>
                  <p className="text-gray-600 mb-6">
                    Estruturação do currículo e do LinkedIn com foco em posicionamento, senioridade e impacto. O trabalho organiza a narrativa profissional, ajusta linguagem ao mercado e aumenta a clareza para recrutadores e processos seletivos.

                    Indicada quando o profissional tem experiência, mas não está sendo chamado ou não está sendo bem interpretado pelo mercado.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Posicionamento profissional com foco em resultados e palavras-chave</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Alinhamento entre narrativa profissional, objetivo de carreira e vagas-alvo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Clareza e consistência para leitura humana e sistemas de triagem</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Serviço 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="bg-blue-50 p-8 flex items-center justify-center">
                  <TrendingUp className="w-24 h-24 text-blue-900" />
                </div>
                <div className="md:col-span-2 p-8">
                  <h3 className="text-gray-900 mb-4">Simulação de Entrevistas</h3>
                  <p className="text-gray-600 mb-6">
                    Preparação focada em discurso, postura e clareza na comunicação de resultados. As simulações ajudam a identificar falhas invisíveis e alinhar o posicionamento ao nível da vaga e às expectativas do recrutador.

                    Indicada quando o profissional é chamado para entrevistas, mas não avança.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Ajuste de discurso e posicionamento para entrevistas técnicas e comportamentais</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Simulações com feedback estratégico focado em clareza, impacto e consistência</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Preparação para tomada de decisão e negociação em etapas finais</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Serviço 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="bg-blue-50 p-8 flex items-center justify-center">
                  <Briefcase className="w-24 h-24 text-blue-900" />
                </div>
                <div className="md:col-span-2 p-8">
                  <h3 className="text-gray-900 mb-4">Job Hunter</h3>
                  <p className="text-gray-600 mb-6">
                    Acompanhamento completo com execução assistida da busca por oportunidades. A equipe atua na estratégia, nas candidaturas e na leitura do retorno do mercado, ajustando o posicionamento ao longo do processo.

                    Indicado para quem não tem tempo, margem de erro ou disponibilidade para conduzir a recolocação sozinho.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Execução assistida da estratégia de busca por oportunidades</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Acompanhamento contínuo com leitura de retorno do mercado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Ajustes de posicionamento ao longo do processo para aumentar conversão</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      {/* <section className="py-20 bg-blue-900" id="ebook">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="p-10 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <Download className="w-6 h-6 text-blue-900" />
                  <span className="text-sm text-blue-900">E-book Gratuito</span>
                </div>
                <h2 className="text-gray-900 mb-4">
                  Guia Completo: 30 Dicas para Acelerar sua Recolocação
                </h2>
                <p className="text-gray-600 mb-8">
              
                  Este guia gratuito reúne orientações práticas para ajudar você a organizar sua estratégia profissional e 
                  se posicionar melhor no mercado.

                  O material foi desenvolvido a partir de experiências reais em processos de recolocação e desenvolvimento de carreira, 
                  com foco em clareza, direcionamento e decisões mais estratégicas.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Como definir objetivos claros de carreira</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Estratégias de networking que geram oportunidades</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Como se destacar em processos seletivos</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <input 
                        type="text"
                        name='nome' 
                        placeholder="Nome"
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        name='email'
                        placeholder="E-mail"
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-blue-900 text-white py-4 rounded hover:bg-blue-800 transition flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Baixar E-book Gratuito
                    </button>
                  </form>
                  <p className="text-xs text-gray-500 text-center mt-3">
                    Seus dados estão seguros. Não enviamos spam.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-10 md:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-6">
                    <BookOpen className="w-32 h-32 text-white mx-auto mb-4" />
                    <div className="text-white text-6xl mb-2">45+</div>
                    <p className="text-blue-100">páginas de conteúdo</p>
                  </div>
                  <div className="flex items-center justify-center gap-8 text-white">
                    <div>
                      <div className="text-3xl mb-1">4.8/5</div>
                      <p className="text-sm text-blue-100">Avaliação</p>
                    </div>
                    <div className="w-px h-12 bg-white/30"></div>
                    <div>
                      <div className="text-3xl mb-1">5K+</div>
                      <p className="text-sm text-blue-100">Downloads</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Company Marquee */}
      <CompanyMarquee />

      {/* Depoimentos */}
      <section className="py-20" style={{ backgroundColor: '#f2e8e0' }} id= "depoimentos">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 style={{ color: '#1a2e4a' }} className="mb-4">O que nossos clientes dizem</h2>
            <p className="text-xl" style={{ color: '#1a2e4a', opacity: 0.8 }}>Histórias reais de transformação profissional</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <div className="bg-white p-8 rounded-lg flex flex-col h-full">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} style={{ color: '#f5424a' }} className="text-xl">★</div>
                ))}
              </div>
                <p className="mb-6 italic" style={{ color: '#1a2e4a', opacity: 0.9 }}>
                  "Olá Sté, bom dia!
                  <br /><br />
                  Tinha expectativa de depois que comecei a consultoria com vocês, em até uns 3 meses eu conseguiria uma boa oportunidade.{' '}
                  <br /><br />
                  Mas no dia que vocês me mandaram meu currículo pronto até o dia que fechei o contrato,{' '} 
                  <span style={{ color: '#f5424a', fontWeight: 600 }}>
                   foram só 24 dias
                  </span>{' '}
                  .hahahaha muito rápido!
                  <br /><br />
                  Comecei hoje na empresa nova!"
                </p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={AnaBeatriz}
                  alt="Ana-Beatriz"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#1a2e4a' }}
                    className="hover:opacity-70 transition"
                  >
                    <p className="font-medium">Ana Beatriz</p>
                  </a>
                  <p className="text-sm" style={{ color: '#1a2e4a', opacity: 0.7 }}>Analista Financeiro</p>
                </div>
              </div>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-white p-8 rounded-lg flex flex-col h-full">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} style={{ color: '#f5424a' }} className="text-xl">★</div>
                ))}
              </div>
                <p className="mb-6 italic" style={{ color: '#1a2e4a', opacity: 0.9 }}>
                    "Olá Sté, tudo bem?
                  <br /><br />
                    Gostaria de agradecer a sua equipe que me ajudou no processo de entrevistas que eu participei.
                  <span style={{ color: '#f5424a', fontWeight: 600 }}>
                    Eu fui aprovado na vaga
                  </span>{' '}
                    e começo nesta segunda feira.
                  <br /><br />
                    Vou atuar como{' '}
                  <span style={{ color: '#f5424a', fontWeight: 600 }}>
                    Gerente Sênior de Marketing de Produto para a América Latina na Phillips.
                  </span>{' '}
                    Muito Obrigado!!"
                </p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={Willian}
                  alt="Willian-Eduardo"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#1a2e4a' }}
                    className="hover:opacity-70 transition"
                  >
                    <p className="font-medium">Willian Eduardo</p>
                  </a>
                  <p className="text-sm" style={{ color: '#1a2e4a', opacity: 0.7 }}>Gerente Sênior de Marketing</p>
                </div>
              </div>
            </div>

            {/* Depoimento 3 */}
            <div className="bg-white p-8 rounded-lg flex flex-col h-full">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} style={{ color: '#f5424a' }} className="text-xl">★</div>
                ))}
              </div>
                <p className="mb-6 italic" style={{ color: '#1a2e4a', opacity: 0.9 }}>
                  "Boa tarde Stephany, tudo bem?
                  <br /><br />
                  Nós fizemos uma mentoria em Junho Passado para agradecer, em setembro eu fui{' '}
                  <span style={{ color: '#f5424a', fontWeight: 600 }}>
                    aprovado no Sicredi
                  </span>{' '}
                  e já estou três meses aqui.
                  <br /><br />
                  Recebi um{' '}
                  <span style={{ color: '#f5424a', fontWeight: 600 }}>
                    aumento de 35%
                  </span>{' '}
                  mais benefícios. Sua ajuda foi muito importante!"
                </p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={Guilherme}
                  alt="Guilherme-Silveira"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#1a2e4a' }}
                    className="hover:opacity-70 transition"
                  >
                    <p className="font-medium">Guilherme Silveira</p>
                  </a>
                  <p className="text-sm" style={{ color: '#1a2e4a', opacity: 0.7 }}>Analista de Business Inteligence II</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
     {/*  <section className="py-20 bg-gray-50" id="blog">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Blog e Conteúdos</h2>
            <p className="text-xl text-gray-600">Dicas e estratégias para alavancar sua carreira</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
            {/* Artigo 1 */}
           {/*  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition flex flex-col h-full">
              <img 
                src={Plano}
                alt="Artigo 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>14 de maio, 2025</span>
                  <span>•</span>
                  <span>4 min de leitura</span>
                </div>
                <h3 className="text-gray-900 mb-3">
                  E se o seu plano B for, na verdade, o seu verdadeiro plano A?
                </h3>
                <p className="text-gray-600 mb-4">
                  Descubra os sinais de que está na hora de mudar de carreira, como aproveitar sua experiência acumulada e se preparar para uma transição profissional com mais clareza e propósito.
                </p>
                <a href="https://www.linkedin.com/pulse/e-se-o-seu-plano-b-na-verdade-verdadeiro-stephany-borowiec-rmmhf/?trackingId=cgAHacyaR3S%2Fzc5EifjWqA%3D%3D" className="mt-auto text-blue-900 inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Ler artigo completo <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div> */}

            {/* Artigo 2 */}
         {/*    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition flex flex-col h-full">
              <img 
                src= {HomeOffice}
                alt="Artigo 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>14 de novembro, 2025</span>
                  <span>•</span>
                  <span>2 min de leitura</span>
                </div>
                <h3 className="text-gray-900 mb-3">
                  🧠 Home Office: Ainda faz sentido chamar de “benefício”?
                </h3>
                <p className="text-gray-600 mb-4">
                  O trabalho remoto deixou de ser privilégio e virou critério de escolha. Entenda o que realmente mudou e por que quem não se adapta está ficando para trás.
                </p>
                <a href="https://www.linkedin.com/pulse/home-office-ainda-faz-sentido-chamar-de-benefício-stephany-borowiec-qsxzf/?trackingId=x0EoxzLuQBC%2B6QbNknSUFA%3D%3D" className="mt-auto text-blue-900 inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Ler artigo completo <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div> */}

            {/* Artigo 3 */}
           {/*  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition flex flex-col h-full">
              <img 
                src= {networking}
                alt="Artigo 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>27 de agosto, 2025</span>
                  <span>•</span>
                  <span>3 min de leitura</span>
                </div>
                <h3 className="text-gray-900 mb-3">
                  O poder invisível do networking (e por que o Netwaving pode transformar sua carreira)
                </h3>
                <p className="text-gray-600 mb-4">
                  As melhores oportunidades raramente estão nos anúncios de vaga. Descubra o que realmente abre portas nos bastidores do mercado.
                </p>
                <a href="https://www.linkedin.com/pulse/o-poder-invisível-do-networking-e-por-que-netwaving-pode-borowiec-ugmrf/?trackingId=R3n9Rh5hR6OWUN5dI%2Fyb7A%3D%3D" className="mt-auto text-blue-900 inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Ler artigo completo <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                // O ?. evita o erro caso a prop venha vazia por algum motivo
                onNavigate?.("articles"); 
              }}
              className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-3 rounded hover:border-gray-400 transition"
            >
              Ver todos os artigos
            </a>
          </div>
        </div>
      </section> */}

      {/* Contato Final */}
  <section className="py-20 bg-white" id="contato">
    <div className="max-w-5xl mx-auto px-6">
      
      {/* Cabeçalho */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Entre em contato
        </h2>

        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Fale com um especialista e tire suas dúvidas sem compromisso.
        </p>
      </div>

      {/* Conteúdo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* CTA principal */}
        <div className="flex flex-col items-center justify-center text-center bg-blue-900 rounded-xl p-10 text-white">
          <h3 className="text-2xl font-semibold mb-4">
            Atendimento rápido e personalizado
          </h3>

          <p className="text-blue-100 mb-8">
            Clique abaixo e vá direto para nossa página de contato.
          </p>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.("contact");
            }}
            className="w-full max-w-sm bg-white text-blue-900 font-semibold py-4 rounded-lg hover:bg-blue-50 transition flex items-center justify-center gap-2"
          >
            Ir para a página de contato
          </a>
        </div>

        {/* Informações de contato */}
        <div>

          <div className="bg-gray-50 p-8 rounded-xl mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Informações de contato
            </h3>

            <div className="space-y-5">

              {/* Atendimento */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Atendimento online</p>
                  <p className="text-gray-900 font-medium">
                    100% digital para todo o Brasil
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://api.whatsapp.com/send?phone=5511951598050&text=Olá!%20Gostaria%20de%20mais%20informações."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <p className="text-gray-900 font-medium group-hover:underline">
                    (11) 95159-8050
                  </p>
                </div>
              </a>

              {/* Chamada */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Fale conosco agora</p>
                  <p className="text-gray-900 font-medium">
                    Atendimento direto com um especialista
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Horário */}
          <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-900 mb-6">
            <p className="text-gray-700">
              <strong>Horário de atendimento</strong><br />
              Segunda a sexta, das 9h às 18h
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>

    </div>
  );
}