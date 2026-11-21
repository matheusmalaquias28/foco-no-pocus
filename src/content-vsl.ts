/**
 * Conteúdo da LP de vendas com VSL (/vsl) do curso online Método POCUS Essencial.
 * Copy reescrita a partir da página atual no Hotmart + transcrição da VSL + direcionamento do Leonard.
 * Itens [A CONFIRMAR] dependem do cliente.
 */

export const vsl = {
  checkoutUrl: "https://pay.hotmart.com/Q103513880C?checkoutMode=10",
  /** ID do vídeo no YouTube. Trocar quando a VSL editada/regravada estiver pronta. */
  youtubeId: "ZoaIFG_leK0", // VSL nova (20/11/2026)
  price: {
    full: "R$ 1.890",
    installments: "10x de R$ 189",
    note: "sem juros no cartão",
  },
  methodName: "Método POCUS Essencial",
};

/** Kit que acompanha todos os botões de compra. */
export const buyKit = [
  { icon: "card", text: "10x de R$ 189 sem juros" },
  { icon: "shield", text: "7 dias de garantia" },
  { icon: "bolt", text: "Acesso imediato" },
  { icon: "chat", text: "Suporte no WhatsApp" },
] as const;

export const hero = {
  eyebrow: "Curso online para quem dá plantão",
  title: ["Domine o POCUS e decida em minutos ", "diante do paciente grave", "."],
  subtitle:
    "Do transdutor à conduta: aprenda a ver pulmão, coração, VCI e abdome à beira do leito e transformar a imagem em decisão, mesmo que você nunca tenha pegado um aparelho.",
  videoCall: "No vídeo você vai descobrir:",
  bullets: [
    "Por que olhar a VCI antes de abrir o soro pode mudar a conduta do paciente em choque",
    "O raciocínio “bomba, tanque e canos” que organiza o exame do paciente instável em poucos minutos",
    "O erro que faz médicos com anos de teoria travarem com o transdutor na mão no meio do plantão",
  ],
};

/**
 * Balde de provas (prints reais da página atual, nomes ocultos).
 * `label` = perfil de quem escreveu, como pede o direcionamento.
 */
export const proofs = [
  { image: "/img/vsl/depoimento-2.webp", w: 420, h: 333, label: "Residente de clínica médica" },
  { image: "/img/vsl/depoimento-1.webp", w: 421, h: 343, label: "Pós-graduando em nefrologia" },
  { image: "/img/vsl/depoimento-3.webp", w: 419, h: 319, label: "Médico" },
];

/** Cards de depoimento em texto (layout pronto, conteúdo genérico até chegarem os reais). */
export const proofPlaceholders = [
  {
    label: "Emergencista",
    text: "[Depoimento de aluno emergencista: situação no plantão em que o POCUS mudou a conduta.]",
  },
  {
    label: "Intensivista",
    text: "[Depoimento de aluno intensivista: avaliação de volemia, VCI ou VExUS na UTI.]",
  },
  {
    label: "Residente",
    text: "[Depoimento de residente: primeira punção guiada ou primeiro eFAST sozinho.]",
  },
];

/** As 6 microetapas do método (iguais às da VSL). */
export const methodSteps = [
  {
    title: "Fundamentos sem física desnecessária",
    text: "Você perde o medo do aparelho: ajustes, modos, artefatos e posição do transdutor, explicados do jeito que o plantão usa.",
  },
  {
    title: "Domínio da imagem: treino do olhar",
    text: "Pulmão e via aérea viram seu estetoscópio visual. Linhas A, linhas B, deslizamento pleural e derrame, reconhecidos de primeira.",
  },
  {
    title: "Execução guiada à beira do leito",
    text: "Coração e VCI com técnica e posicionamento certos. Você aprende fazendo, em pacientes reais, não decorando slide.",
  },
  {
    title: "Raciocínio clínico integrado",
    text: "Abdome, eFAST e lesão renal aguda conectados à conduta. A imagem vira hipótese, e a hipótese vira decisão.",
  },
  {
    title: "Protocolos que salvam vidas",
    text: "RUSH, BLUE, POCUS na PCR e procedimentos guiados: acesso venoso central e punções com precisão, sem suar frio.",
  },
  {
    title: "Desafio final de 21 dias",
    text: "Um exame por dia, com checklist, portfólio e validação. É aqui que o conteúdo vira hábito no seu plantão.",
  },
];

export const pains = {
  title: ["Você já sentiu esse ", "frio na barriga", " diante do paciente grave?"],
  items: [
    {
      title: "A dúvida silenciosa no plantão",
      text: "Pressão caindo, saturação piorando e você sem certeza se é bomba, tanque ou cano. Precisa decidir agora, sem tempo e sem margem para erro.",
    },
    {
      title: "O medo de errar",
      text: "Volume ou droga vasoativa? Drenar ou observar? Uma decisão errada custa caro, e esse peso não deveria ser carregado sozinho às 3 da manhã.",
    },
    {
      title: "Depender de quem não está ali",
      text: "Esperar a tomografia, o eco formal ou o especialista de sobreaviso enquanto o paciente piora na sua frente.",
    },
    {
      title: "Ser a referência no momento crítico",
      text: "Não é só saber usar o aparelho. É ser o médico que a equipe chama quando o caso aperta, porque você vê o que os outros ainda estão supondo.",
    },
  ],
  closing:
    "O POCUS é a resposta mais rápida para essa incerteza: em minutos, à beira do leito, você troca a suposição pela evidência.",
};

export const wrongVsRight = [
  {
    wrong: "Olha o paciente instável e pensa: preciso pedir exames.",
    right: "Posiciona o transdutor, vê pulmão, VCI e coração e decide em minutos.",
  },
  {
    wrong: "Punção na tentativa e erro, contando com a sorte.",
    right: "Visualiza a veia, planeja o trajeto e entra com precisão.",
  },
  {
    wrong: "Diagnóstico por eliminação, enquanto o tempo passa.",
    right: "Diagnóstico por evidência imediata, à beira do leito.",
  },
  {
    wrong: "Começa pela física avançada e treina com a imagem perfeita do slide.",
    right: "Aprende na ordem que o plantão exige, com imagens reais de pacientes reais.",
  },
];

export const forWho = {
  yes: [
    "Plantonista de pronto-socorro e emergência que quer decidir rápido no paciente grave",
    "Residente que não quer chegar cru no R1 ou passar o plantão inseguro",
    "Intensivista que quer avaliar volemia, VCI e VExUS com confiança na UTI",
    "Clínico e generalista que trabalha sem ecocardiografista ou radiologista à noite",
    "Interno no último ano que quer chegar na residência já sabendo usar o POCUS",
  ],
  no: [
    "Quem quer só um certificado, sem disposição para pegar o transdutor e praticar",
    "Quem procura uma formação completa em ecocardiografia ou ultrassonografia diagnóstica",
    "Quem prefere decorar teoria a aplicar no plantão da semana seguinte",
  ],
};

export const deliverables = [
  {
    title: "Curso completo Método POCUS Essencial",
    text: "As 6 microetapas, com aulas teóricas objetivas e demonstrações em pacientes reais",
  },
  { title: "Protocolos de emergência", text: "RUSH, BLUE, eFAST e POCUS na PCR, prontos para o plantão" },
  { title: "Procedimentos guiados por ultrassom", text: "Acesso venoso central e punções com técnica passo a passo" },
  { title: "Casos clínicos comentados", text: "Cada imagem vira raciocínio, e cada raciocínio vira conduta" },
  { title: "Desafio final de 21 dias", text: "Checklist diário, portfólio de exames e validação pela equipe" },
  { title: "E-book em PDF de 100 páginas", text: "Todo o conteúdo teórico para consultar quando precisar" },
  { title: "PDF-resumo de cada aula", text: "Palavras-chave e pontos essenciais para revisar antes do plantão" },
  {
    title: "Bônus: aulas avançadas de VExUS e nervo óptico",
    text: "Congestão venosa e hipertensão intracraniana à beira do leito",
    bonus: true,
  },
  { title: "Certificado após validação", text: "Reconhecimento formal ao concluir o desafio de 21 dias" },
  { title: "Suporte no WhatsApp", text: "Canal com a equipe para tirar dúvidas e discutir casos" },
];

export const howItWorks = [
  "100% online, na plataforma Hotmart",
  "Liberação progressiva em 7 dias",
  "Celular, tablet ou computador",
  "Acesso contínuo às aulas",
];

export const team = {
  title: ["Com a nossa equipe você aprende o que ", "realmente funciona no plantão"],
  paragraphs: [
    "Somos quatro nefrologistas formados pela UERJ, professores universitários e com POCUS na mão todos os dias, em ambiente hospitalar.",
    "Nossa história com o ultrassom nasceu num hospital universitário de referência no Rio de Janeiro, onde vimos o POCUS mudar decisões e salvar vidas. E vimos também como ele quase nunca era ensinado do jeito certo.",
    "Criamos o Método POCUS Essencial para encurtar a curva de aprendizado, evitar erros e formar médicos mais seguros. Porque ninguém deveria enfrentar o plantão sozinho, inseguro e sem as ferramentas adequadas.",
  ],
  members: [
    {
      name: "Gabriel Seixas",
      role: "Nefrologista UERJ · Instrutor de POCUS Rede D'Or",
      photo: "/img/equipe-gabriel-seixas.jpg",
    },
    {
      name: "Guilherme Taffuri",
      role: "Coordenador do Curso de POCUS da Rede D'Or",
      photo: "/img/equipe-guilherme-taffuri.jpg",
    },
    {
      name: "Vinicius Cicarini",
      role: "Nefrologista UERJ · Serviço de Nefrologia HSVP",
      photo: "/img/equipe-vinicius-cicarini.jpg",
    },
    {
      name: "Ana Paula Basilio",
      role: "Nefrologista UERJ · Nefrologista do HSVP",
      photo: "/img/equipe-ana-paula-basilio.jpg",
    },
  ],
};

export const science = [
  "Sociedades internacionais de emergência e terapia intensiva tratam o ultrassom à beira do leito como competência essencial.",
  "Estudos mostram que o POCUS acelera o diagnóstico e reduz complicações em procedimentos guiados.",
  "O aparelho já está nos serviços. Falta quem saiba usar com segurança, e quem domina primeiro se diferencia mais cedo.",
];

export type VslFaq = { q: string; a: string };

export const vslFaq: VslFaq[] = [
  {
    q: "Nunca usei ultrassom. Vou conseguir acompanhar?",
    a: "Vai. O método começa pelos fundamentos: como segurar o transdutor, ajustar o aparelho e reconhecer artefatos. Muitos dos nossos alunos chegaram sem nunca ter feito um exame e hoje avaliam choque e fazem punção guiada no plantão.",
  },
  {
    q: "Não tenho aparelho próprio. O curso serve para mim?",
    a: "Serve. Você aprende a técnica e o raciocínio, e pratica com o aparelho do seu serviço. O desafio de 21 dias foi pensado justamente para ser feito no plantão, com o ultrassom que já está lá.",
  },
  {
    q: "Já sei o básico. Vou aprender algo novo?",
    a: "Sim. Além de organizar o que você já sabe num fluxo de decisão, o curso aprofunda protocolos (RUSH, BLUE, PCR), procedimentos guiados e traz os bônus avançados de VExUS e nervo óptico.",
  },
  {
    q: "Dou muitos plantões. Vou ter tempo?",
    a: "As aulas são curtas e diretas, liberadas em 7 dias, e você assiste no celular entre um paciente e outro. O acesso é contínuo, então você segue no seu ritmo e volta ao conteúdo sempre que precisar.",
  },
  {
    q: "É só teoria?",
    a: "Não. As demonstrações são feitas em pacientes reais, em ambiente hospitalar, e o curso termina com um desafio prático de 21 dias. Se não dá para aplicar no plantão, não está no curso.",
  },
  {
    q: "Como funciona o certificado?",
    a: "Você recebe o certificado de conclusão depois de completar o desafio final de 21 dias e ter o seu portfólio de exames validado pela equipe.",
  },
  {
    q: "Como tiro minhas dúvidas durante o curso?",
    a: "Pelo suporte no WhatsApp, direto com a equipe. Você também pode mandar imagens e discutir casos do seu plantão.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia incondicional. Entra, assiste às aulas e, se não fizer sentido, pede o reembolso pela própria Hotmart e recebe 100% do valor. Sem burocracia.",
  },
  {
    q: "Qual a diferença para o curso presencial?",
    a: "O presencial é uma imersão de 2 dias com prática supervisionada em turmas no Rio de Janeiro e em Bom Jesus. O online leva o método completo para o seu ritmo, com desafio de 21 dias e suporte, e é um ótimo preparo para aproveitar ainda mais o presencial.",
  },
];
