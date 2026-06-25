export type Language = 'ja' | 'en' | 'pt-BR'

export const translations = {
  ja: {
    langLabel: '日本語',
    hero: {
      welcome: '私のポートフォリオへようこそ',
      subtitle: '最新のウェブテクノロジーでデジタル体験を創造する',
      roles: ['フルスタックエンジニア', 'AIエンジニア', 'プロジェクトマネージャー', 'Webクリエイター'],
      cta: 'プロジェクトを見る',
      ctaContact: 'お問い合わせ',
      scroll: 'スクロールして見る',
    },
    profile: {
      hello: 'こんにちは！',
      name: '村越敏一',
      role: 'プロジェクトマネージャー / フルスタック＆AIエンジニア',
    },
    about: {
      title: '自己紹介',
      paras: [
        'はじめまして。',
        '開発は単なる作業ではなく、一つの芸術です。私にとって、それは心を込めて創り上げる創作活動のようなもの。私のコードは、ただ動くだけのものではなく、貴社のビジョンを具現化し、未来へとつながる確かな道を築くものです。',
        '最先端のAI技術と堅実なシステム開発の両立を強みとするフルスタックエンジニアです。自然言語処理・画像解析・機械学習モデルの構築から、業務効率化ツールやWebアプリケーションの開発、API設計、データ基盤構築まで、幅広い分野に対応しています。',
        'これまでに、WordPressと銀行決済を組み合わせたシステム、美容マッチングサービス、ポケモンをテーマとしたWordPressゲーム紹介サイトなど、多様な開発案件を成功裏にリリースしております。',
        'さらに、生成AI（ChatGPT APIや各種LLM）やクラウドサービス（ConoHa、さくらVPS、AWS EC2）を用いたソリューション提案・開発にも精通しています。',
        '私たちは「技術ありき」ではなく、お客様のビジネスゴールを見据えたシステム提案・改善を強みとしており、個人開発からチーム開発まで柔軟に対応可能です。短期的な成果はもちろん、長期的なパートナーシップの構築を大切にしています。',
      ],
      skillsTitle: '【主なスキル・技術スタック】',
      skills: [
        { label: 'AI開発',         value: '画像処理、生成AI' },
        { label: 'Web開発',        value: 'WordPress、Shopify、Three.js、GSAP' },
        { label: 'デザイン',       value: 'Figma、Photoshop、イラスト制作、Webアニメーション' },
        { label: 'フロントエンド', value: 'React、Next.js、Vue.js、Nuxt、Nest.js、React Native、Flutter' },
        { label: 'バックエンド',   value: 'JavaScript、Python、Node.js、Express、Laravel、Java' },
        { label: 'その他',         value: 'Git、Docker、OpenAI API、Notion API など' },
      ],
    },
    education: {
      title: '学歴',
      school: 'セベラス・マレット大学 – コンピュータサイエンス学部',
      period: '2017 – 2021',
    },
    skills: {
      title: 'プログラミング言語',
    },
    contact: {
      title: 'お問い合わせ',
    },
  },

  en: {
    langLabel: 'English',
    hero: {
      welcome: 'Welcome to My Portfolio',
      subtitle: 'Crafting digital experiences with modern web technologies',
      roles: ['Full Stack Engineer', 'AI Engineer', 'Project Manager', 'Web Creator'],
      cta: 'View Projects',
      ctaContact: 'Contact Me',
      scroll: 'Scroll to explore',
    },
    profile: {
      hello: 'Hello!',
      name: 'Toshinichi Murakoshi',
      role: 'Project Manager / Full Stack & AI Engineer',
    },
    about: {
      title: 'About Me',
      paras: [
        'Nice to meet you.',
        'Development is not merely work — it is an art form. For me, it is a creative act built with heart and passion. My code doesn\'t just run; it brings your vision to life and lays a solid foundation pointing toward the future.',
        'I am a full-stack engineer whose strength lies in combining cutting-edge AI technology with robust system development. My expertise spans natural language processing, image analysis, and machine learning model creation, as well as business automation tools, web application development, API design, and data infrastructure.',
        'Past projects include a WordPress system with integrated bank payments, a beauty matching platform, and a Pokémon-themed WordPress game showcase — all delivered successfully.',
        'I am also proficient in generative AI solutions (ChatGPT API and various LLMs) and cloud deployments (ConoHa, Sakura VPS, AWS EC2).',
        'My philosophy is not "technology first" but system design driven by your business goals. I work flexibly across solo and team projects, valuing both short-term results and long-term partnerships.',
      ],
      skillsTitle: '【Main Skills & Tech Stack】',
      skills: [
        { label: 'AI Dev',    value: 'Image Processing, Generative AI' },
        { label: 'Web Dev',   value: 'WordPress, Shopify, Three.js, GSAP' },
        { label: 'Design',    value: 'Figma, Photoshop, Illustration, Web Animation' },
        { label: 'Frontend',  value: 'React, Next.js, Vue.js, Nuxt, Nest.js, React Native, Flutter' },
        { label: 'Backend',   value: 'JavaScript, Python, Node.js, Express, Laravel, Java' },
        { label: 'Other',     value: 'Git, Docker, OpenAI API, Notion API, etc.' },
      ],
    },
    education: {
      title: 'Education',
      school: 'Severus Mallet University – Department of Computer Science',
      period: '2017 – 2021',
    },
    skills: {
      title: 'Programming Languages',
    },
    contact: {
      title: 'Contact',
    },
  },

  'pt-BR': {
    langLabel: 'Português',
    hero: {
      welcome: 'Bem-vindo ao Meu Portfólio',
      subtitle: 'Criando experiências digitais com tecnologias web modernas',
      roles: ['Engenheiro Full Stack', 'Engenheiro de IA', 'Gerente de Projetos', 'Criador Web'],
      cta: 'Ver Projetos',
      ctaContact: 'Contato',
      scroll: 'Role para explorar',
    },
    profile: {
      hello: 'Olá!',
      name: 'Toshinichi Murakoshi',
      role: 'Gerente de Projetos / Engenheiro Full Stack & IA',
    },
    about: {
      title: 'Sobre Mim',
      paras: [
        'Prazer em conhecê-lo.',
        'Desenvolvimento não é apenas trabalho — é uma forma de arte. Para mim, é um ato criativo construído com dedicação e paixão. Meu código não apenas funciona; ele dá vida à sua visão e estabelece uma base sólida para o futuro.',
        'Sou um engenheiro full-stack cuja força está em combinar tecnologia de IA de ponta com desenvolvimento robusto de sistemas. Minha expertise abrange processamento de linguagem natural, análise de imagens, criação de modelos de machine learning, ferramentas de automação empresarial, desenvolvimento de aplicações web, design de APIs e infraestrutura de dados.',
        'Projetos anteriores incluem um sistema WordPress com pagamentos bancários integrados, uma plataforma de matchmaking de beleza e um showcase de jogos com tema Pokémon — todos entregues com sucesso.',
        'Também tenho expertise em soluções de IA generativa (ChatGPT API e vários LLMs) e implantações em nuvem (ConoHa, Sakura VPS, AWS EC2).',
        'Minha filosofia não é "tecnologia primeiro", mas sim design de sistemas orientado pelos objetivos de negócio do cliente. Trabalho de forma flexível em projetos individuais e em equipe, valorizando tanto resultados de curto prazo quanto parcerias de longo prazo.',
      ],
      skillsTitle: '【Habilidades & Stack Tecnológico】',
      skills: [
        { label: 'Dev de IA',   value: 'Processamento de Imagens, IA Generativa' },
        { label: 'Dev Web',     value: 'WordPress, Shopify, Three.js, GSAP' },
        { label: 'Design',      value: 'Figma, Photoshop, Ilustração, Animação Web' },
        { label: 'Frontend',    value: 'React, Next.js, Vue.js, Nuxt, Nest.js, React Native, Flutter' },
        { label: 'Backend',     value: 'JavaScript, Python, Node.js, Express, Laravel, Java' },
        { label: 'Outros',      value: 'Git, Docker, OpenAI API, Notion API, etc.' },
      ],
    },
    education: {
      title: 'Formação Acadêmica',
      school: 'Universidade Severus Mallet – Ciência da Computação',
      period: '2017 – 2021',
    },
    skills: {
      title: 'Linguagens de Programação',
    },
    contact: {
      title: 'Contato',
    },
  },
} satisfies Record<Language, unknown>
