import { Target, Users, TrendingUp, Award, CheckCircle2, Download, Mail, Phone, MapPin, Send, ArrowRight, Briefcase, BookOpen, MessageSquare } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { CountUpCard } from './components/CountUpCard';
import { ContactForm } from './components/ContactForm';
import heroImage from '../../src/assets/5a05fef1354e1252a2d6e1a02e241a822ba6dc8f.png';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-gray-900">With</h1>
              <p className="text-xs text-gray-500">Consultoria de Carreira</p>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#servicos" className="text-gray-600 hover:text-gray-900">Serviços</a>
              <a href="#sobre" className="text-gray-600 hover:text-gray-900">Sobre</a>
              <a href="#blog" className="text-gray-600 hover:text-gray-900">Blog</a>
              <a href="#contato" className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition">Contato</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-gray-900 mb-6">
                Quando a carreira avança, as decisões precisam ser mais estratégicas.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A With é uma consultoria de carreira que atua com profissionais em diferentes momentos de trajetória — especialmente quando avançar deixa de ser uma questão de esforço e passa a exigir clareza, posicionamento e leitura de mercado.

Ajudamos você a organizar decisões, ajustar estratégia e conduzir o próximo passo com mais método e menos tentativa e erro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contato" className="bg-blue-900 text-white px-8 py-4 rounded hover:bg-blue-800 transition text-center">
                  Entre em contato
                </a>
                <a href="#servicos" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded hover:border-gray-400 transition text-center">
                  Conhecer Serviços
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">Mais de 2800 profissionais atendidos</span>
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
      <section className="py-20 bg-white" id="servicos">
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
              <a href="#contato" className="text-blue-900 inline-flex items-center gap-2 hover:gap-3 transition-all">
                Saiba mais <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-blue-900" />
              </div>
              <h3 className="text-gray-900 mb-4">Quando você é chamado, mas não avança</h3>
              <p className="text-gray-600 mb-6">
                Para quem já participa de processos seletivos, mas encontra dificuldade em se posicionar, sustentar o discurso ou converter entrevistas em propostas.
              </p>
              <a href="#contato" className="text-blue-900 inline-flex items-center gap-2 hover:gap-3 transition-all">
                Saiba mais <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-blue-900" />
              </div>
              <h3 className="text-gray-900 mb-4">Quando o esforço não gera retorno</h3>
              <p className="text-gray-600 mb-6">
                Para profissionais que estão aplicando para muitas vagas, mas de forma pouco estratégica, com desgaste e baixa previsibilidade de resultado.
              </p>
              <a href="#contato" className="text-blue-900 inline-flex items-center gap-2 hover:gap-3 transition-all">
                Saiba mais <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Direto */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-4">
            Toda decisão de carreira começa com clareza.
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Nosso trabalho começa entendendo seu contexto antes de propor qualquer solução.
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
            <CountUpCard end={2800} suffix="+" label="Profissionais atendidos em processos estruturados de carreira" />
            <CountUpCard end={85} suffix="%" label="Clientes que avançaram em processos seletivos após ajuste de estratégia e posicionamento" />
            <CountUpCard end={30} suffix="%" label="Aumento médio de remuneração entre clientes que mudaram de posição" />
            <CountUpCard prefix="+" end={6} label="Anos de Experiência de atuação contínua com recrutamento, carreira e processos seletivos" />
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="py-20 bg-white" id="sobre">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTY5Nzk2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Consultora de carreira"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-gray-900 mb-6">Sobre a With</h2>
              <p className="text-gray-600 mb-6">
  A With é uma consultoria de carreira que atua com profissionais em diferentes momentos de trajetória, especialmente quando avançar exige mais estratégia, clareza e leitura de mercado. Nosso trabalho parte do diagnóstico do contexto profissional e da definição da abordagem mais adequada para cada situação, evitando decisões baseadas em tentativa e erro.
</p>

<p className="text-gray-600 mb-6">
  Atuamos com processos estruturados, sem promessas rápidas ou soluções genéricas. Cada acompanhamento é definido a partir do momento de carreira, dos objetivos e do nível de envolvimento possível no processo.
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
      <section className="py-20 bg-gray-50">
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
      <section className="py-20 bg-blue-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="p-10 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <Download className="w-6 h-6 text-blue-900" />
                  <span className="text-sm text-blue-900">E-book Gratuito</span>
                </div>
                <h2 className="text-gray-900 mb-4">
                  Guia Completo: 10 Passos para Acelerar sua Carreira
                </h2>
                <p className="text-gray-600 mb-8">
                  Baixe gratuitamente nosso guia exclusivo com estratégias práticas para impulsionar seu desenvolvimento profissional. Aprenda técnicas validadas por centenas de profissionais bem-sucedidos.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Como definir objetivos claros de carreira</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Estratégias de networking eficaz</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Como se destacar em processos seletivos</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <form className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Seu nome completo"
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Seu melhor e-mail"
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
                    <div className="text-white text-6xl mb-2">100+</div>
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
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">O que nossos clientes dizem</h2>
            <p className="text-xl text-gray-600">Histórias reais de transformação profissional</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="text-yellow-500 text-xl">★</div>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Olá Sté, bom dia! Tinha expectativa de depois que comecei a consultoria com vocês, em até uns 3 meses eu conseguiria uma boa oportunidade. Mas no dia que vocês me mandaram meu currículo pronto até o dia que fechei o contrato, foram só 24 dias. hahahaha muito rápido! Comecei hoje na empresa nova!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600">RC</span>
                </div>
                <div>
                  <p className="text-gray-900">Ana Beatriz</p>
                  <p className="text-sm text-gray-500">Advogada Imobiliária</p>
                </div>
              </div>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="text-yellow-500 text-xl">★</div>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Olá Sté, tudo bem? Gostaria de agradecer a sua equipe que me ajudou no processo de entrevistas queei participei. Eu fui aprovado na vaga e começo nesta segunda feira. Vou atuar com Gerente Sênior de Marketing de Produto para a América Latina na Phillips. Muito obrigado!!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600">AS</span>
                </div>
                <div>
                  <p className="text-gray-900">Willian Eduardo</p>
                  <p className="text-sm text-gray-500">
Senior Product Marketing Manager</p>
                </div>
              </div>
            </div>

            {/* Depoimento 3 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="text-yellow-500 text-xl">★</div>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Boa tarde Stephany, tudo bem? Nós fizemos uma mentoria em Junho. Passando pra agradecer, em Setembro eu fui aprovado no Sicredi e já estou a três meses aqui. Recebi um aumento de 35% mais benefícios. Sua ajuda foi muito importante."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600">LM</span>
                </div>
                <div>
                  <p className="text-gray-900">Gustavo</p>
                  <p className="text-sm text-gray-500">Desenvolvedor Pleno na DevSolutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-20 bg-gray-50" id="blog">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Blog e Conteúdos</h2>
            <p className="text-xl text-gray-600">Dicas e estratégias para alavancar sua carreira</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Artigo 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img 
                src="https://images.unsplash.com/photo-1744956581253-abfd023141b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBzdWNjZXNzJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NTc1MjUyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Artigo 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>10 de dezembro, 2024</span>
                  <span>•</span>
                  <span>5 min de leitura</span>
                </div>
                <h3 className="text-gray-900 mb-3">
                  Como identificar o momento certo para mudar de carreira
                </h3>
                <p className="text-gray-600 mb-4">
                  Descubra os principais sinais que indicam que está na hora de fazer uma mudança profissional e como se preparar para essa transição...
                </p>
                <a href="#" className="text-blue-900 inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Ler artigo completo <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Artigo 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img 
                src="https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhbnQlMjBvZmZpY2V8ZW58MXx8fHwxNzY1NzY2OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Artigo 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>5 de dezembro, 2024</span>
                  <span>•</span>
                  <span>7 min de leitura</span>
                </div>
                <h3 className="text-gray-900 mb-3">
                  LinkedIn: 8 estratégias para atrair recrutadores
                </h3>
                <p className="text-gray-600 mb-4">
                  Otimize seu perfil do LinkedIn e aprenda técnicas comprovadas para aparecer nas buscas dos recrutadores e atrair as melhores oportunidades...
                </p>
                <a href="#" className="text-blue-900 inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Ler artigo completo <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Artigo 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img 
                src="https://images.unsplash.com/photo-1601509876296-aba16d4c10a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2NTY0ODMzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Artigo 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>1 de dezembro, 2024</span>
                  <span>•</span>
                  <span>6 min de leitura</span>
                </div>
                <h3 className="text-gray-900 mb-3">
                  Negociação salarial: técnicas para conseguir o que você merece
                </h3>
                <p className="text-gray-600 mb-4">
                  Aprenda a se preparar para negociações salariais, conheça as melhores estratégias e descubra como argumentar com confiança...
                </p>
                <a href="#" className="text-blue-900 inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Ler artigo completo <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="#" className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-3 rounded hover:border-gray-400 transition">
              Ver todos os artigos
            </a>
          </div>
        </div>
      </section>

      {/* Contato Final */}
      <section className="py-20 bg-white" id="contato">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Entre em contato</h2>
            <p className="text-xl text-gray-600">Pronto para transformar sua carreira? Fale conosco agora mesmo</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <ContactForm />
            </div>

            {/* Informações */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg mb-6">
                <h3 className="text-gray-900 mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-900" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">E-mail</p>
                      <p className="text-gray-900">contato@careerpath.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-900" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Telefone</p>
                      <p className="text-gray-900">(11) 98765-4321</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-900" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Endereço</p>
                      <p className="text-gray-900">Av. Paulista, 1000 - Sala 201<br />São Paulo, SP - CEP 01310-100</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                  <p>Mapa de localização</p>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-900">
                <p className="text-gray-700">
                  <strong>Horário de atendimento:</strong><br />
                  Segunda a sexta: 9h às 18h<br />
                  Sábado: 9h às 13h
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl mb-4">CareerPath</h3>
              <p className="text-gray-400 text-sm">
                Consultoria especializada em desenvolvimento e transição de carreira.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Mentoria Individual</a></li>
                <li><a href="#" className="hover:text-white transition">Transição de Carreira</a></li>
                <li><a href="#" className="hover:text-white transition">Preparação para Processos</a></li>
                <li><a href="#" className="hover:text-white transition">Personal Branding</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#sobre" className="hover:text-white transition">Sobre Nós</a></li>
                <li><a href="#blog" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Depoimentos</a></li>
                <li><a href="#contato" className="hover:text-white transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 CareerPath Consultoria. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}