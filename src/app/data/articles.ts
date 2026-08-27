export interface ArticleSection {
  id: string;
  heading: string;
  paragraphs?: string[]; // use **texto** dentro da string para negrito
  list?: string[]; // cada item já em texto final (pode usar **negrito**)
  quote?: { text: string; cite?: string };
}

export interface Article {
  id: string; // usado na URL: /articles/:id
  title: string;
  excerpt: string;
  category: string;
  categoryColor?: "aqua" | "purple" | "watermelon" | "navy";
  image: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  sections: ArticleSection[];
  relatedIds?: string[];
}

import Plano from "@/assets/planoA-planoB.png";
import Stephany from "@/assets/Stephany.jpg";

const stephanyAuthor = {
  name: "Stephany Borowiec",
  avatar: Stephany,
  bio: "Profissional com mais de 12 anos de experiência em Recursos Humanos e desenvolvimento profissional, com atuação em multinacionais e forte expertise em estratégia de carreira, posicionamento, recrutamento e empregabilidade.",
};

// Placeholder usado para artigos que ainda não têm o conteúdo completo escrito.
const contentComingSoon: ArticleSection[] = [
  {
    id: "conteudo",
    heading: "Em breve",
    paragraphs: [
      "Este artigo ainda está em produção. Em breve, o conteúdo completo estará disponível aqui.",
    ],
  },
];

export const articles: Article[] = [
  {
    id: "plano-a-plano-b",
    title: "E se o seu plano B for, na verdade, o seu verdadeiro plano A?",
    excerpt:
      "Descubra os sinais de que está na hora de mudar de carreira, como aproveitar sua experiência acumulada e se preparar para uma transição profissional com mais clareza e propósito.",
    category: "Transição",
    categoryColor: "aqua",
    image: Plano,
    date: "14 de Maio, 2025",
    readTime: "4 min",
    author: stephanyAuthor,
    relatedIds: ["10-dicas-linkedin", "networking-estrategico"],
    sections: [
      {
        id: "introduction",
        heading: "Introdução",
        paragraphs: [
          "Durante muito tempo, eu acreditei que sucesso era sinônimo de crachá de empresa grande, estabilidade no contracheque e um cargo que soasse importante em reuniões de família. E por fora, eu tinha tudo isso. Mas por dentro, me sentia cada vez mais desconectada do que eu fazia. Era como viver no piloto automático: acorda, entrega, performa, repete.",
          "Quando a pandemia começou, essa sensação se intensificou. O mundo estava virando de cabeça pra baixo — e eu também. Foi nesse momento de incerteza que uma pergunta começou a me rondar: \"E se eu quiser outra coisa pra mim?\"",
          "Só que pedir demissão no meio de uma crise parecia um ato de loucura. Eu tinha medo de jogar fora tudo o que tinha construído. Medo de errar, de começar do zero, de me arrepender. Mas a verdade é que ninguém começa do zero. Tudo o que eu vivi até ali os desafios, as entregas, a pressão, a convivência com líderes difíceis e os aprendizados com pessoas incríveis — virou bagagem. E foi justamente essa bagagem que se transformou na base do que faço hoje.",
        ],
      },
      {
        id: "company-was-born",
        heading: "Ali, nasceu minha empresa.",
        paragraphs: [
          "Comecei do meu jeito, no meu tempo: ajudando uma pessoa aqui, outra ali. Revisava um currículo, dava dicas de entrevista, ouvia angústias, oferecia direcionamento. Quando percebi, eram dezenas. Depois centenas. Hoje, são mais de **2.500 profissionais impactados**.",
          "Empreender não era fácil e continua não sendo. Mas é a primeira vez que me sinto verdadeiramente alinhada com o que faço. E mais do que isso: é a primeira vez que eu tenho liberdade para construir algo com propósito, do meu jeito, respeitando meu tempo e minha verdade.",
          "**E se você está lendo isso pensando \"nossa, parece comigo\"… saiba que você não está sozinho.** Segundo uma reportagem da BBC News Brasil, cada vez mais profissionais com mais de 35 estão mudando de carreira e com sucesso. A Andrea largou a administração de quatro lojas pra virar nutricionista aos 40. O Diogo virou professor de ioga depois de um burnout em uma confecção. E a Irene transformou uma paixão por suculentas em um dos maiores negócios do Brasil no segmento aos 53. Nenhum deles começou \"do zero\". Todos usaram sua história como trampolim.",
          "**Aqui vão algumas dicas para fazer uma transição de carreira bem-sucedida:**",
        ],
        list: [
          "**Reflita sobre suas habilidades transferíveis**: Se você tem mais de 30 ou 40, está repleto de soft skills valiosas. Pense nas experiências que você já teve, nos desafios que enfrentou, e como essas competências podem ser aplicadas em uma nova área. Você tem muito mais a oferecer do que imagina!",
          "**Construa uma rede de apoio**: Profissionais que passaram por transições de carreira muitas vezes enfatizam o poder de uma rede sólida. Busque mentores, conecte-se com pessoas de áreas que te interessam e compartilhe suas inseguranças e ideias. O apoio externo é fundamental.",
          "**Experimente antes de dar o salto definitivo**: Se possível, faça testes pequenos. Se você quer mudar para uma área diferente, comece com um projeto paralelo. Isso não só te ajudará a entender melhor o novo caminho, mas também diminui o medo do desconhecido.",
          "**Aprenda constantemente**: Seja por meio de cursos online, workshops ou mentorias, não pare de aprender. Quanto mais conhecimento você tiver na área para a qual está se movendo, mais confiante se sentirá durante o processo.",
          "**Aceite que o desconforto é parte do processo**: O incômodo que você sente em transições não é um sinal de que você está errando, mas de que está no caminho certo. Aprender a abraçar essa sensação é fundamental para o sucesso.",
        ],
        quote: {
          text: "**Como disse o especialista em longevidade Stefan Ligocki:** \"Se você tem mais de 40, você nunca começa do zero. Você tem uma série de soft skills que são um diferencial — comunicação, inteligência emocional, resiliência.\"",
          cite: "Stefan Ligocki",
        },
      },
      {
        id: "conclusion",
        heading: "",
        paragraphs: [
          "A vida não tem uma linha reta. E mudar de caminho não significa fracasso — significa coragem. E se você está nessa fase de dúvida, aqui vai um conselho que daria a mim mesma lá atrás: não ignore o incômodo. Às vezes, esse desconforto que você sente no domingo à noite ou naquela reunião em que tudo parece sem sentido é exatamente o empurrão que você precisa. Ele não está aí pra te punir. Ele está aí pra te sinalizar que algo pode — e talvez precise — mudar.",
        ],
      },
    ],
  },
  {
    id: "curriculo-destaca-2026",
    title: "Como Criar um Currículo que se Destaca em 2026",
    excerpt:
      "Descubra as estratégias mais eficazes para criar um currículo que chama atenção de recrutadores e passa pelos sistemas ATS.",
    category: "Currículo",
    categoryColor: "watermelon",
    image:
      "https://images.unsplash.com/photo-1767190041030-f2f3a6654c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwYXJ0aWNsZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njg5NTc0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "15 de Janeiro, 2026",
    readTime: "8 min",
    author: stephanyAuthor,
    relatedIds: ["10-dicas-linkedin", "preparacao-entrevistas"],
    sections: contentComingSoon,
  },
  {
    id: "10-dicas-linkedin",
    title: "10 Dicas para Otimizar seu Perfil no LinkedIn",
    excerpt:
      "Aprenda a transformar seu perfil do LinkedIn em uma ferramenta poderosa para atrair oportunidades.",
    category: "LinkedIn",
    categoryColor: "navy",
    image:
      "https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzY4OTE0ODgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "12 de Janeiro, 2026",
    readTime: "6 min",
    author: stephanyAuthor,
    relatedIds: ["plano-a-plano-b", "networking-estrategico"],
    sections: contentComingSoon,
  },
  {
    id: "preparacao-entrevistas",
    title: "Preparação para Entrevistas: O Guia Completo",
    excerpt:
      "Tudo o que você precisa saber para se preparar e ter sucesso em qualquer tipo de entrevista de emprego.",
    category: "Entrevistas",
    categoryColor: "purple",
    image:
      "https://images.unsplash.com/photo-1758520144417-e1c432042dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjBpbnRlcnZpZXclMjBwcmVwYXJhdGlvbnxlbnwxfHx8fDE3Njg5NTc0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "8 de Janeiro, 2026",
    readTime: "10 min",
    author: stephanyAuthor,
    relatedIds: ["curriculo-destaca-2026", "negociacao-salario"],
    sections: contentComingSoon,
  },
  {
    id: "transicao-carreira-bem-sucedida",
    title: "Como Fazer uma Transição de Carreira Bem-Sucedida",
    excerpt:
      "Estratégias comprovadas para mudar de área ou setor sem perder momentum na sua carreira.",
    category: "Transição",
    categoryColor: "aqua",
    image:
      "https://images.unsplash.com/photo-1603195827187-459ab02554a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBsYXB0b3B8ZW58MXx8fHwxNzY4OTU3MzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "5 de Janeiro, 2026",
    readTime: "7 min",
    author: stephanyAuthor,
    relatedIds: ["plano-a-plano-b"],
    sections: contentComingSoon,
  },
  {
    id: "personal-branding",
    title: "Personal Branding: Construindo sua Marca Profissional",
    excerpt:
      "Aprenda a se posicionar como especialista e atrair as oportunidades certas através do personal branding.",
    category: "Branding",
    categoryColor: "watermelon",
    image:
      "https://images.unsplash.com/photo-1683770997177-0603bd44d070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwb2ZmaWNlfGVufDF8fHx8MTc2ODk0NjAxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "2 de Janeiro, 2026",
    readTime: "9 min",
    author: stephanyAuthor,
    relatedIds: ["10-dicas-linkedin"],
    sections: contentComingSoon,
  },
  {
    id: "networking-estrategico",
    title: "Networking Estratégico: Como Fazer da Forma Certa",
    excerpt:
      "Descubra como construir relacionamentos profissionais autênticos que geram oportunidades reais.",
    category: "Networking",
    categoryColor: "navy",
    image:
      "https://images.unsplash.com/photo-1758518731027-78a22c8852ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBzdWNjZXNzJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY4OTU3NDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "28 de Dezembro, 2025",
    readTime: "5 min",
    author: stephanyAuthor,
    relatedIds: ["plano-a-plano-b", "10-dicas-linkedin"],
    sections: contentComingSoon,
  },
  {
    id: "negociacao-salario",
    title: "Salário: Como Negociar e Conseguir o que Você Merece",
    excerpt:
      "Técnicas e estratégias para negociar salário com confiança e conseguir a remuneração adequada.",
    category: "Negociação",
    categoryColor: "purple",
    image:
      "https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzY4OTE0ODgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "22 de Dezembro, 2025",
    readTime: "8 min",
    author: stephanyAuthor,
    relatedIds: ["preparacao-entrevistas"],
    sections: contentComingSoon,
  },
];

export function getArticleById(id: string): Article | undefined {
  return articles.find((article) => article.id === id);
}

export function getRelatedArticles(article: Article): Article[] {
  if (!article.relatedIds) return [];
  return article.relatedIds
    .map((relatedId) => getArticleById(relatedId))
    .filter((a): a is Article => Boolean(a));
}
