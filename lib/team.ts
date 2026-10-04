export type TeamMember = {
  name: string;
  initials: string;
  role: string;
  company: string;
  bio: string;
  tags: string[];
  color: string;
  linkedin: string;
  github?: string;
  photo: string;
};

// Founder copy is based on Ali's CV and public LinkedIn profile (October 2026).
export const founder = {
  name: 'Ali Çağlar Koçer',
  role: 'Founder · Product & AI Systems Architect',
  photo: 'ali-caglar-kocer-ofis.jpg',
  linkedin: 'https://www.linkedin.com/in/ali-caglar-kocer/',
  github: 'https://github.com/caglarkc',
  email: 'alicaglarkocer@gmail.com',
  bio: [
    'Dağıtık backend sistemlerinden kalıcı hafızalı AI ajanlarına; karmaşık problemleri güvenilir, ölçeklenebilir ürünlere dönüştürüyor. ABD, Birleşik Krallık ve Türkiye’deki ekiplerle üretim sistemleri geliştirdi.',
    'ACK Techs’te ürün vizyonunu, sistem mimarisini ve teknik yönü bir araya getiriyor. FIRST / STEP / INTO / PATH ile genç yeteneklerin gerçek projelerde üretip deneyim kazanabileceği bir ekosistem kuruyor.',
  ],
  companies: ['Weller Precision Industries', 'ICEBERG', 'VIRTUS ARGE', 'Gamer Arena'],
  projects: [
    {
      name: 'Robotutor / OLMS',
      description: 'Öğrencinin neyi bildiğini, nerede zorlandığını ve nasıl ilerlediğini takip eden kişisel AI öğretmeni. Öğrenme eksiklerine göre anlatım, alıştırma ve tekrarları uyarlayarak herkese aynı içeriği sunmak yerine kişiye özel bir öğrenme yolu oluşturur.',
      github: 'https://github.com/Weller-Precision-Industries/OLMS-V2',
      private: true,
    },
    {
      name: 'Archon',
      description: 'Bilgisayarı bir AI ajan orkestratörüne dönüştüren sistem. Farklı büyük dil modellerini (LLM) ve ajanları aynı hedef için koordineli çalıştırır; karmaşık işleri aralarında paylaştırır, süreci yönetir ve yarım kalan çalışmaları kaldığı yerden sürdürür.',
      github: 'https://github.com/caglarkc/caglarkc-agent',
      private: false,
    },
    {
      name: 'Immense',
      description: 'Koçları ve öğrencileri bir araya getiren fitness ve sosyal medya ekosistemi. Beslenme ve antrenman planlarını, gelişim takibini ve koç–öğrenci iletişimini tek yerde toplar; dağınık araçlar yerine hedeflere ulaşmayı düzenli ve takip edilebilir hâle getirir.',
      github: 'https://github.com/caglarkc/immense',
      private: false,
    },
  ],
};

export const team: TeamMember[] = [
  {
    "name": "Doğukan Taha Tıraş",
    "initials": "DT",
    "role": "Co-Founder · Frontend & AI Lead",
    "company": "Turkish Airlines",
    "bio": "Modern React/Next.js arayüzleri, Haier Europe Datathon 4.lüğü ve Learning-to-Rank arama optimizasyonu.",
    "tags": [
      "Next.js",
      "React",
      "Data Science",
      "Semantic Search"
    ],
    "color": "#ffd84f",
    "linkedin": "https://www.linkedin.com/in/dogukantahatiras/",
    "photo": "dogukan-taha-tiras.png",
    "github": "https://github.com/dodovlski"
  },
  {
    "name": "Batuhan Evleksiz",
    "initials": "BE",
    "role": "Full-Stack Developer & AI",
    "company": "ACK Techs",
    "bio": "Modern web teknolojileriyle ölçeklenebilir ve kullanıcı odaklı ürünler geliştiriyor. Frontend ve backend süreçlerini birlikte ele alırken yapay zekâ destekli çözümleri gerçek problemlere uyguluyor.",
    "tags": [
      "React",
      "TypeScript",
      "Full-Stack",
      "AI"
    ],
    "color": "#78c7ff",
    "linkedin": "https://www.linkedin.com/in/batuhanevleksiz/",
    "photo": "batuhan-evleksiz.jpeg"
  },
  {
    "name": "Ayselin Aydoğdu",
    "initials": "AA",
    "role": "AI Engineer",
    "company": "ACK Techs",
    "bio": "Dil modellerini ürünün içine gömüyor; ajan akışlarını, değerlendirme döngülerini ve gerçek kullanım senaryolarını tasarlıyor.",
    "tags": [
      "LLM",
      "AI Agents",
      "Python",
      "Eval"
    ],
    "color": "#c9ff45",
    "linkedin": "https://www.linkedin.com/in/ayselin-aydo%C4%9Fdu-b4a783293/",
    "photo": "ayselin-aydogdu.png"
  },
  {
    "name": "Ayşe Sena Bağdat",
    "initials": "AS",
    "role": "AI & Data | Cybersecurity",
    "company": "ACK Techs",
    "bio": "Yapay zekâ, veri ve siber güvenlik alanlarında çalışıyor. Araştırma ve analitik yaklaşımı teknolojiyle birleştirerek gerçek problemlere yönelik yenilikçi ve güvenli çözümler geliştiriyor.",
    "tags": [
      "AI",
      "Data",
      "Cybersecurity",
      "Research"
    ],
    "color": "#ffd84f",
    "linkedin": "https://www.linkedin.com/in/ay%C5%9Fe-sena-ba%C4%9Fdat/",
    "photo": "ayse-sena.png"
  },
  {
    "name": "Mehmet Yıldız",
    "initials": "MY",
    "role": "AI Engineer",
    "company": "ACK Techs",
    "bio": "Python, veri mühendisliği ve backend temelli bir AI engineer. Modelleri gerçek sistemlere bağlayan katmanı kuruyor; veri boru hatlarından ürün içi yapay zekâ akışlarına kadar uçtan uca düşünüyor.",
    "tags": [
      "Python",
      "SQL",
      "Data Eng",
      "ML"
    ],
    "color": "#ffd1b8",
    "linkedin": "https://www.linkedin.com/in/mehmetyildizbst/",
    "photo": "mehmet-yildiz.png"
  },
  {
    "name": "Aynur Oruçoğlu",
    "initials": "AO",
    "role": "AI & FullStack DEVELOPER",
    "company": "ACK Techs",
    "bio": "AI algoritmaları (Python, TensorFlow, OpenCV) ve modern web teknolojileriyle uçtan uca ürün geliştiren yazılım mühendisi adayıyım. Sadece veri işlemekle veya model eğitmekle kalmıyor, tasarladığım arayüzleri güçlü arka plan sistemleriyle entegre ederek veriyi kullanıcıya doğrudan dokunan, işlevsel ve estetik projelere dönüştürüyorum.",
    "tags": [
      "Python",
      "TensorFlow",
      "OpenCV",
      "Full-Stack"
    ],
    "color": "#c9ff45",
    "linkedin": "https://www.linkedin.com/in/aynur-oru%C3%A7o%C4%9Flu/",
    "github": "https://github.com/aynurorucoglu",
    "photo": "aynur.jpeg"
  }
];
