
import { CategoryTag } from '@/app/components/CategoryTag';
import { CallToAction  } from "@/app/components/CallToAction";
import { AuthorBio } from '@/app/components/AuthorBio';
import { TableOfContents } from '@/app/components/TableOfContents';
import { RelatedArticleCard } from '@/app/components/RelatedArticleCard';
import Plano from "@/assets/planoA-planoB.png";
import HomeOffice from "@/assets/homeoffice.png";
import networking from "@/assets/networking.png";
import Stephany  from "@/assets/Stephany.jpg";

interface ArticlesPageOne {
  onNavigate: (page: string, sectionId?: string) => void;
}

export function ArticlesPageOne ({ onNavigate }: ArticlesPageOne) {
    const tocItems = [
    { id: 'introduction', title: 'Introdução' },
    { id: 'company-was-born', title: 'Nascimento da empresa' },
    { id: 'items', title: 'Dicas' },
    { id: 'conclusion', title: 'Conclusão' }
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Article Hero Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <CategoryTag color="aqua">Transição</CategoryTag>
            
            <h1 className="font-['Varela_Round'] text-4xl md:text-5xl text-[#1a2e4a] mt-6 mb-4">
              E se o seu plano B for, na verdade, o seu verdadeiro plano A?
            </h1>
            
            <p className="font-['Quicksand'] text-xl text-gray-600 mb-6">
              Descubra os sinais de que está na hora de mudar de carreira, como aproveitar sua experiência acumulada e se preparar para uma transição profissional com mais clareza e propósito.
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              <img 
                src= {Stephany}
                alt="Stephany Borowiec"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-['Quicksand'] font-semibold text-[#1a2e4a]">
                  Stephany Borowiec
                </div>
                <div className="font-['Quicksand'] text-sm text-gray-600">
                  14 de Maio, 2025 · 4 min de leitura
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-[1200px] mx-auto">
              <img 
                src={Plano}
                alt="Artigo 1"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Body with Sidebar */}
      <section className="w-full py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            {/* Main Content */}
            <article className="max-w-3xl">
                {/* Introduction */}
                <div id="introduction" className="mb-12">
                  <h2 className="font-['Varela_Round'] text-3xl text-[#1a2e4a] mb-4">
                    Introdução
                  </h2>
                  <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-4">
                    Durante muito tempo, eu acreditei que sucesso era sinônimo de crachá de empresa grande, estabilidade no contracheque e um cargo que soasse importante em reuniões de família. E por fora, eu tinha tudo isso. Mas por dentro, me sentia cada vez mais desconectada do que eu fazia. Era como viver no piloto automático: acorda, entrega, performa, repete. 
                  </p>
                  <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6">
                    Quando a pandemia começou, essa sensação se intensificou. O mundo estava virando de cabeça pra baixo — e eu também. Foi nesse momento de incerteza que uma pergunta começou a me rondar: “E se eu quiser outra coisa pra mim?”
                  </p>
                  <p className="font-['Quicksand'] text-gray-700 leading-relaxed">
                    Só que pedir demissão no meio de uma crise parecia um ato de loucura. Eu tinha medo de jogar fora tudo o que tinha construído. Medo de errar, de começar do zero, de me arrepender. Mas a verdade é que ninguém começa do zero. Tudo o que eu vivi até ali os desafios, as entregas, a pressão, a convivência com líderes difíceis e os aprendizados com pessoas incríveis — virou bagagem. E foi justamente essa bagagem que se transformou na base do que faço hoje.
                  </p>
                </div>

                {/* That's where my company was born. */}
                <div id="company-was-born" className="mb-12">
                  <h2 className="font-['Varela_Round'] text-3xl text-[#1a2e4a] mb-4">
                    Ali, nasceu minha empresa.
                  </h2>
                  <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6">
                    Comecei do meu jeito, no meu tempo: ajudando uma pessoa aqui, outra ali. Revisava um currículo, dava dicas de entrevista, ouvia angústias, oferecia direcionamento. Quando percebi, eram dezenas. Depois centenas. Hoje, são mais de <strong> 2.500 profissionais impactados</strong>.
                  </p>

                  <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6">
                    Empreender não era fácil e continua não sendo. Mas é a primeira vez que me sinto verdadeiramente alinhada com o que faço. E mais do que isso: é a primeira vez que eu tenho liberdade para construir algo com propósito, do meu jeito, respeitando meu tempo e minha verdade.
                  </p>

                  <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6">
                    <strong>E se você está lendo isso pensando “nossa, parece comigo”… saiba que você não está sozinho.</strong> Segundo uma reportagem da BBC News Brasil, cada vez mais profissionais com mais de 35 estão mudando de carreira e com sucesso. A Andrea largou a administração de quatro lojas pra virar nutricionista aos 40. O Diogo virou professor de ioga depois de um burnout em uma confecção. E a Irene transformou uma paixão por suculentas em um dos maiores negócios do Brasil no segmento aos 53. Nenhum deles começou “do zero”. Todos usaram sua história como trampolim.
                  </p>

                  <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6">
                    <strong>Aqui vão algumas dicas para fazer uma transição de carreira bem-sucedida:</strong>
                  </p>
                  
                  <ul className="font-['Quicksand'] text-gray-700 space-y-2 mb-6 pl-6" id="items">
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">1.</span>
                      <span><strong>Reflita sobre suas habilidades transferíveis</strong>: Se você tem mais de 30 ou 40, está repleto de soft skills valiosas. Pense nas experiências que você já teve, nos desafios que enfrentou, e como essas competências podem ser aplicadas em uma nova área. Você tem muito mais a oferecer do que imagina!</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">2.</span>
                      <span><strong>Construa uma rede de apoio</strong>: Profissionais que passaram por transições de carreira muitas vezes enfatizam o poder de uma rede sólida. Busque mentores, conecte-se com pessoas de áreas que te interessam e compartilhe suas inseguranças e ideias. O apoio externo é fundamental.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">3.</span>
                      <span><strong>Experimente antes de dar o salto definitivo</strong>: Se possível, faça testes pequenos. Se você quer mudar para uma área diferente, comece com um projeto paralelo. Isso não só te ajudará a entender melhor o novo caminho, mas também diminui o medo do desconhecido.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">4.</span>
                      <span><strong>Aprenda constantemente</strong>: Seja por meio de cursos online, workshops ou mentorias, não pare de aprender. Quanto mais conhecimento você tiver na área para a qual está se movendo, mais confiante se sentirá durante o processo.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">5.</span>
                      <span><strong>Aceite que o desconforto é parte do processo</strong>: O incômodo que você sente em transições não é um sinal de que você está errando, mas de que está no caminho certo. Aprender a abraçar essa sensação é fundamental para o sucesso.</span>
                    </li>
                  </ul>

                  <blockquote className="border-l-4 border-[#1fa6a8] pl-6 py-4 my-8 bg-[#f2e8e0] rounded-r-lg">
                    <p className="font-['Quicksand'] text-lg text-[#1a2e4a] italic">
                      <strong>Como disse o especialista em longevidade Stefan Ligocki:</strong> "Se você tem mais de 40, você nunca começa do zero. Você tem uma série de soft skills que são um diferencial — comunicação, inteligência emocional, resiliência."
                    </p>
                    <cite className="font-['Quicksand'] text-sm text-gray-600 not-italic mt-2 block">
                      — Stefan Ligocki
                    </cite>
                  </blockquote>

                  <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6" id="conclusion">
                    A vida não tem uma linha reta. E mudar de caminho não significa fracasso — significa coragem. E se você está nessa fase de dúvida, aqui vai um conselho que daria a mim mesma lá atrás: não ignore o incômodo. Às vezes, esse desconforto que você sente no domingo à noite ou naquela reunião em que tudo parece sem sentido é exatamente o empurrão que você precisa. Ele não está aí pra te punir. Ele está aí pra te sinalizar que algo pode — e talvez precise — mudar.
                  </p>
                </div>
            </article>

            {/* Sidebar */}
            <aside className="w-full lg:w-[320px] space-y-8">
              {/* Table of Contents */}
              <TableOfContents items={tocItems} />
              
              {/* Related Articles */}
              <div>
                <h3 className="font-['Varela_Round'] text-xl text-[#1a2e4a] mb-4">
                  Artigos Relacionados
                </h3>
                <div className="space-y-4">
                  <RelatedArticleCard
                    title="🧠 Home Office: Ainda faz sentido chamar de “benefício”?"
                    excerpt="O trabalho remoto virou critério de escolha. Quem não se adapta está ficando para trás."
                    category="Linkedin"
                    imageUrl= {HomeOffice}
                    readTime="2 min read"
                    onClick={() => onNavigate("home-office")}
                  />
                  <RelatedArticleCard
                    title="O poder invisível do networking (e por que o Netwaving pode transformar sua carreira)"
                    excerpt="As melhores oportunidades não estão nas vagas anunciadas. Descubra o que realmente abre portas nos bastidores."
                    category="Networking"
                    imageUrl= {networking}
                    readTime="3 min read"
                    onClick={() => onNavigate("networking")}
                  />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
        <CallToAction onNavigate={onNavigate}/>

      {/* Author Bio & Social Share */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-[720px] mx-auto space-y-8">
            <AuthorBio
              name="Stephany Borowiec"
              bio="Profissional com mais de 12 anos de experiência em Recursos Humanos e desenvolvimento profissional, com atuação em multinacionais e forte expertise em estratégia de carreira, posicionamento, recrutamento e empregabilidade."
              avatarUrl= {Stephany}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
