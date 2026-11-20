/**
 * Todo o conteúdo editável do site fica aqui.
 * Itens marcados com [A CONFIRMAR] vieram do site antigo e precisam de validação do cliente.
 */

export const site = {
  name: "Foco no POCUS",
  url: "https://foconopocus.com.br", // confirmado no Linktree deles
  description:
    "Curso presencial de ultrassom à beira do leito (POCUS) e acesso vascular guiado por ultrassom no Rio de Janeiro. Aprenda com quem usa o POCUS todos os dias.",
  city: "Botafogo | Rio de Janeiro",
  email: "foconopocus@gmail.com", // [A CONFIRMAR] no site antigo estava "foconopocus@gml.com"
  /** WhatsApp Business que recebe os leads (o mesmo do link curto wa.me/message/5USB2YOQ7RDTK1). */
  phoneDisplay: "(22) 99269-1149",
  phoneE164: "5522992691149",
  instagram: "https://www.instagram.com/foconopocus",
  /** ID do vídeo no YouTube. Vazio = mostra a capa com "vídeo em breve". */
  youtubeId: "", // [A CONFIRMAR] o site antigo usa o vídeo de exemplo do Elementor
};

/**
 * Agenda de turmas (informada pela cliente em 20/11/2026).
 * Para atualizar: edite a lista. Turmas com data passada somem sozinhas do site.
 * status: "abertas" = inscrições abertas | "esgotado" = vagas esgotadas | "agendado" = data marcada, inscrições em breve
 */
export type ClassStatus = "abertas" | "esgotado" | "agendado";
export type CourseClass = { city: string; dateISO: string; status: ClassStatus };

export const classes: CourseClass[] = [
  { city: "Bom Jesus", dateISO: "2026-11-29", status: "esgotado" },
  { city: "Rio de Janeiro", dateISO: "2026-12-05", status: "abertas" },
  { city: "Bom Jesus", dateISO: "2027-01-24", status: "agendado" },
];

export const classStatusLabel: Record<ClassStatus, string> = {
  abertas: "Inscrições abertas",
  esgotado: "Vagas esgotadas",
  agendado: "Inscrições em breve",
};

const meses = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

/** "2026-12-05" → "05 de dezembro" (sem depender de fuso horário). */
export function formatClassDate(dateISO: string, withYear = false) {
  const [y, m, d] = dateISO.split("-");
  return `${d} de ${meses[Number(m) - 1]}${withYear ? ` de ${y}` : ""}`;
}

/** "2026-12-05" → "05/12" */
export function shortClassDate(dateISO: string) {
  const [, m, d] = dateISO.split("-");
  return `${d}/${m}`;
}

/** Gera link do WhatsApp com mensagem pronta (ajuda a saber de qual botão veio o contato). */
/** Mensagem padrão de todos os botões que não têm uma mensagem específica. */
export const defaultWhatsappMessage = "Olá! Vim pelo site e gostaria de saber mais sobre o curso Foco no POCUS.";

export function whatsapp(message = defaultWhatsappMessage) {
  return `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#para-quem", label: "Para quem é?" },
  { href: "/#programa", label: "Programa" },
  { href: "/#beneficios", label: "Benefícios" },
  { href: "/#especialistas", label: "Especialistas" },
  { href: "/#depoimentos", label: "Depoimentos" },
  { href: "/#faq", label: "Dúvidas" },
];

export const pains = [
  "Mais segurança na tomada de decisão",
  "Menos tentativas e complicações",
  "Confiança para lidar com pacientes graves",
];

export const audience = [
  { title: "Médico", subtitle: "Emergencista", image: "/img/publico-emergencista.webp", w: 505 },
  { title: "Médico", subtitle: "Intensivista", image: "/img/publico-intensivista.webp", w: 537 },
  { title: "Médico", subtitle: "Generalista", image: "/img/publico-generalista.webp", w: 606 },
  { title: "Residente ou estudante", subtitle: "de Medicina", image: "/img/publico-residente.webp", w: 564 },
];

export const gallery = [
  { src: "/img/galeria-1.jpg", alt: "Aluna praticando ultrassom em modelo durante o curso" },
  { src: "/img/galeria-2.jpg", alt: "Turma do curso de POCUS multissistêmico reunida" },
  { src: "/img/galeria-3.jpg", alt: "Treino de punção guiada por ultrassom" },
  { src: "/img/galeria-4.jpg", alt: "Instrutor orientando aluno na prática de ultrassom" },
  { src: "/img/galeria-5.jpg", alt: "Aparelho de ultrassom em estação prática" },
];

export const program = [
  {
    day: "01",
    schedule: "8h às 16h",
    image: "/img/programa-dia-01.jpg",
    imageAlt: "Instrutor explicando imagem de ultrassom e alunos na aula prática",
    topics: [
      {
        title: "Introdução e conceitos básicos do ultrassom",
        text: "Entenda os princípios fundamentais da ultrassonografia, configurações do aparelho e técnicas de aquisição de imagem.",
      },
      {
        title: "Avaliação pulmonar e vias aéreas",
        text: "Aprenda a identificar achados comuns como pneumotórax, derrame pleural e padrão intersticial, além de manejar vias aéreas com mais segurança.",
      },
      {
        title: "Avaliação cardíaca",
        text: "Realize avaliações rápidas da função cardíaca, contratilidade, derrames pericárdicos e perfis de choque.",
      },
      {
        title: "Avaliação da veia cava e protocolo VExUS",
        text: "Saiba como estimar volemia e congestão venosa usando a veia cava inferior e o protocolo VExUS de forma prática.",
      },
      {
        title: "Avaliação de TVP e TEP",
        text: "Aprenda a identificar sinais de trombose venosa profunda e tromboembolismo pulmonar com rapidez e precisão.",
      },
    ],
  },
  {
    day: "02",
    schedule: "8h às 12h",
    image: "/img/programa-dia-02.jpg",
    imageAlt: "Alunos treinando punção guiada por ultrassom em simulador",
    topics: [
      {
        title: "Imersão em acesso vascular avançado guiado por ultrassom",
        text: "Aprenda a realizar acessos vasculares com maior segurança e precisão, utilizando o ultrassom para guiar punções em veias periféricas e centrais. Identifique estruturas vasculares com clareza, escolha o melhor ponto de punção e reduza complicações, mesmo em pacientes de difícil acesso.",
      },
    ],
  },
];

export const comparison = {
  common: [
    "Foco na teoria",
    "Aulas maçantes e desatualizadas",
    "Profissionais que não dominam o POCUS",
    "Aceitam maior quantidade de alunos e perdem na qualidade",
  ],
  ours: [
    "Conteúdo objetivo e FOCO na prática",
    "E-book exclusivo",
    "Mentoria POCUS por 6 meses",
    "Aulas dinâmicas e intuitivas",
    "Número limitado de participantes para uma boa proporção aluno-instrutor",
  ],
};

export const reasons = [
  { icon: "presencial", text: "Curso presencial prático e teórico" },
  { icon: "mentoria", text: "Mentoria exclusiva pós-curso (6 meses)" },
  { icon: "material", text: "Material exclusivo em formato digital" },
  { icon: "equipe", text: "Equipe de especialistas atuantes" },
] as const;

/**
 * ⚠️ DEPOIMENTOS DE EXEMPLO: nomes, textos e fotos (geradas por IA) são fictícios, só para o layout.
 * Substituir por depoimentos reais de alunos (com autorização) ANTES de publicar o site.
 */
export const testimonials = [
  {
    name: "Larissa Menezes",
    role: "Residente de Clínica Médica",
    avatar: "/img/depoimento-larissa-menezes.webp",
    rating: 5,
    text: "Cheguei sem saber nem ajustar o ganho do aparelho e saí avaliando pulmão e coração com segurança. A proporção de alunos por instrutor faz toda a diferença: dá pra treinar de verdade.",
  },
  {
    name: "Rafael Albuquerque",
    role: "Médico Emergencista",
    avatar: "/img/depoimento-rafael-albuquerque.webp",
    rating: 5,
    text: "O segundo dia de acesso vascular valeu o curso inteiro. Na semana seguinte puncionei uma jugular guiada em um paciente difícil no plantão, de primeira.",
  },
  {
    name: "Camila Rocha",
    role: "Estudante de Medicina, 6º ano",
    avatar: "/img/depoimento-camila-rocha.webp",
    rating: 5,
    text: "Achei que seria muito avançado pra mim, mas a didática é muito clara. O e-book ajuda demais a revisar depois, e o grupo da mentoria responde rápido.",
  },
  {
    name: "Thiago Nogueira",
    role: "Médico Intensivista",
    avatar: "/img/depoimento-thiago-nogueira.webp",
    rating: 5,
    text: "Já usava o ultrassom na UTI, mas sem sistematização. O protocolo VExUS e a avaliação da veia cava mudaram minha forma de conduzir a volemia dos pacientes.",
  },
  {
    name: "Juliana Prado",
    role: "Médica Generalista",
    avatar: "/img/depoimento-juliana-prado.webp",
    rating: 5,
    text: "Trabalho em pronto atendimento sem radiologista à noite. Hoje consigo descartar derrame pericárdico e pneumotórax à beira do leito e decidir muito mais rápido.",
  },
  {
    name: "Felipe Andrade",
    role: "Residente de Anestesiologia",
    avatar: "/img/depoimento-felipe-andrade.webp",
    rating: 5,
    text: "Curso objetivo, sem enrolação e com muita prática. Os instrutores usam POCUS todo dia e isso aparece nas dicas que dão durante as estações.",
  },
];

export const highlights = [
  {
    variant: "dark",
    title: ["Desenvolva ", "habilidades essenciais", " em POCUS"],
    text: "Domine a ultrassonografia point-of-care (POCUS) e realize avaliações rápidas e assertivas à beira do leito. Aprimore sua capacidade diagnóstica, reduza a dependência de exames complementares e tome decisões clínicas mais seguras e eficazes para seus pacientes.",
    image: "/img/destaque-habilidades.webp",
    imageAlt: "Instrutor do Foco no POCUS sorrindo, com camisa da marca",
  },
  {
    variant: "red",
    title: ["Conteúdo ", "atualizado", " e sistematizado"],
    text: "Acesse um material completo, baseado em diretrizes atuais e estruturado de forma prática para facilitar seu aprendizado. Aprenda a aplicar protocolos eficazes no dia a dia, aprimorando sua tomada de decisão e garantindo mais segurança e precisão no atendimento aos seus pacientes.",
    image: "/img/destaque-conteudo.webp",
    imageAlt: "Instrutora do Foco no POCUS sorrindo, com camisa da marca",
  },
  {
    variant: "navy",
    title: ["Elimine a ", "insegurança", " nos plantões"],
    text: "Desenvolva confiança para lidar com emergências e tomadas de decisão sob pressão. Com um aprendizado prático e direcionado, você estará preparado para enfrentar situações críticas no plantão com mais segurança, precisão e autonomia.",
    image: "/img/destaque-plantao.webp",
    imageAlt: "Instrutor do Foco no POCUS de óculos sorrindo",
  },
] as const;

export const experts = [
  {
    name: "Vinicius Cicarini",
    photo: "/img/equipe-vinicius-cicarini.jpg",
    main: ["Nefrologista pela UERJ", "Responsável pelo Serviço de Nefrologia do HSVP em Bom Jesus do Itabapoana"],
    more: ["Clínica Médica HU-UFJF", "Faculdade de Medicina de Petrópolis"],
  },
  {
    name: "Guilherme Taffuri",
    photo: "/img/equipe-guilherme-taffuri.jpg",
    main: ["Nefrologista pela UERJ", "Staff Nefrologia UERJ"],
    more: [
      "Coordenador do Curso de POCUS da Rede D'Or",
      "Professor e Coordenador da Residência de Terapia Intensiva da UNIFAA",
    ],
  },
  {
    name: "Gabriel Seixas",
    photo: "/img/equipe-gabriel-seixas.jpg",
    main: ["Nefrologista pela UERJ", "Nefrologista Caxias D'Or"],
    more: ["Staff de Nefrologia UERJ", "Instrutor do Curso de POCUS da Rede D'Or", "Clínica Médica e Médico pela UERJ"],
  },
  {
    name: "Ana Paula Basilio",
    photo: "/img/equipe-ana-paula-basilio.jpg",
    main: ["Nefrologista pela UERJ", "Nefrologista do HSVP"],
    more: ["Clínica Médica pelo Hospital Federal Cardoso Fontes", "Médica pela Faculdade de Medicina de Petrópolis"],
  },
];

export const offerItems = [
  "Conteúdo objetivo e FOCO na prática",
  "E-book exclusivo",
  "Mentoria POCUS por 6 meses",
  "Aulas dinâmicas e intuitivas",
];

export type FaqItem = { q: string; intro?: string; list?: string[]; outro?: string };

export const faq: FaqItem[] = [
  {
    q: "Qual é a duração do curso?",
    intro: "Nosso curso tem duração total de 2 dias:",
    list: [
      "Dia 1, das 8h às 16h: aulas teóricas e práticas de ultrassonografia à beira do leito.",
      "Dia 2, das 8h às 12h: imersão prática exclusiva em acesso vascular avançado guiado por ultrassom.",
    ],
  },
  {
    q: "Posso me inscrever apenas em um dos dias?",
    intro: "Sim! Oferecemos três modalidades de inscrição:",
    list: [
      "Apenas o 1º dia (módulo geral teórico e prático de POCUS Multissistêmico)",
      "Apenas o 2º dia (imersão em acesso vascular avançado)",
      "Pacote dos dois dias com desconto especial",
    ],
  },
  {
    q: "O curso é voltado para quais profissionais?",
    intro:
      "O curso é exclusivo para médicos ou estudantes de medicina, principalmente aqueles que atuam em emergência, terapia intensiva, clínica médica, anestesia, nefrologia e outras especialidades que utilizam ultrassonografia à beira do leito.",
  },
  {
    q: "Como são divididos os módulos do curso?",
    list: [
      "1º dia: aulas teóricas e estações práticas de POCUS Multissistêmico, com foco nos principais protocolos e aplicações clínicas.",
      "2º dia: imersão em acesso venoso central guiado por ultrassom, com aula teórica breve, sessões práticas e dicas para acessos venosos complexos.",
    ],
  },
  {
    q: "Como é feita a prática de punção no segundo dia?",
    intro: "No módulo de acesso vascular avançado, o aluno vai:",
    list: [
      "Aprender a avaliar os principais sítios de punções guiadas por ultrassom em modelos vivos, incluindo veia jugular, braquiocefálica, subclávia, axilar e femoral.",
      "Treinar a técnica com protótipos realistas desenvolvidos para simulação médica.",
    ],
  },
  {
    q: "O curso oferece certificado de conclusão?",
    intro: "Sim. Todos os alunos que participarem recebem certificado de conclusão ao final do curso.",
  },
  {
    q: "Há limite de vagas?",
    intro:
      "Sim. Limitamos o número de alunos por instrutor para garantir um atendimento individualizado e manter a alta qualidade do ensino prático.",
  },
  {
    q: "O que está incluso na inscrição?",
    list: [
      "Participação nas aulas teóricas e práticas conforme a modalidade escolhida",
      "Material para anotações durante o curso",
      "iBook exclusivo com todo o conteúdo teórico do curso, elaborado pela nossa equipe",
      "Certificado de conclusão",
      "Acesso à Mentoria de 6 meses com o grupo da sua turma",
    ],
  },
  {
    q: "Como funciona a Mentoria pós-curso?",
    intro:
      "Após o curso, o aluno terá acesso a um grupo exclusivo com os colegas e instrutores da turma, por 6 meses, para:",
    list: [
      "Tirar dúvidas",
      "Discutir casos clínicos reais",
      "Compartilhar imagens de ultrassom à beira do leito",
      "Manter o aprendizado ativo e contínuo",
    ],
  },
];

/**
 * Página /links (link na bio do Instagram), migrada do Linktree "cursosfoconopocus".
 * `href` abre um link; `form` abre um formulário que monta a mensagem e envia pelo WhatsApp.
 */
export const linksPage = {
  title: "Curso Foco no POCUS",
  bio: "Curso teórico e prático de ultrassonografia à beira do leito.",
  /** Mensagem padrão do WhatsApp para quem vem pela /links (link na bio do Instagram). */
  whatsappMessage: "Olá! Vim pelo Instagram e gostaria de saber mais sobre os cursos do Foco no POCUS.",
  /** "agenda" = cartões das turmas, gerados a partir de `classes` lá em cima. */
  items: [
    { kind: "agenda" },
    {
      kind: "form",
      icon: "monitor",
      label: "Interesse curso online",
      detail: "Lançamento em breve!",
      message: "Olá! Quero entrar na lista de interesse do CURSO ONLINE do Foco no POCUS.",
    },
    {
      kind: "link",
      icon: "globe",
      label: "Acesse o nosso site",
      detail: "Saiba mais sobre os nossos cursos",
      href: "/",
    },
    {
      kind: "link",
      icon: "whatsapp",
      label: "Fale com um membro da nossa equipe!",
      href: "whatsapp",
    },
  ],
} as const;
