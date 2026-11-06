import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CodeXml,
  Lightbulb,
  MoveRight,
  Palette,
  Sparkle,
} from 'lucide-react';
import { projects, type Accent } from '@/lib/projects';
import { ackPath } from '@/lib/paths';
import { team } from '@/lib/team';
import { FounderSection } from '@/components/founder-section';
import { LogoMark } from '@/components/logo';
import { Motion } from '@/components/motion';

const tickerItems = [
  'ÜRÜN TASARIMI',
  'WEB GELİŞTİRME',
  'YAPAY ZEKÂ',
  'MOBİL DENEYİM',
  'GÖZLEMLENEBİLİRLİK',
  'SİBER GÜVENLİK',
];

const productColors: Record<Accent, string> = {
  lime: '#c9ff45',
  blue: '#78c7ff',
  peach: '#ff7f76',
  yellow: '#ffd84f',
  lilac: '#b9a6ff',
};

const productHighlights: Record<string, { value: string; label: string }> = {
  'ev-karnesi': { value: 'Karar', label: 'Evinizi tanıyarak seçin' },
  demandrift: { value: 'Keşif', label: 'Fikrinizin potansiyelini görün' },
  steward: { value: 'Destek', label: 'İşinize odaklanın' },
  'sentinel-coming': { value: 'Gözlem', label: 'Sistemlerinizi anlayın' },
  'first-step-into-path': { value: 'Deneyim', label: 'İlk adımınızı atın' },
};

export default function Home() {
  const ticker = [...tickerItems, ...tickerItems];

  return (
    <main id="top">
      <Motion />

      <header className="site-header" aria-label="Site üst menüsü">
        <div className="container site-header-inner">
          <a href="#top" className="brand-mark" aria-label="ACK Techs ana sayfa">
            <LogoMark />
            ACK <span>Techs</span>
          </a>
          <nav className="main-nav" aria-label="Ana menü">
            <a className="nav-link" href="#kurucu">Kurucu</a>
            <a className="nav-link" href="#ekip">Ekip</a>
            <a className="nav-link" href="#urunler">Ürünler</a>
            <a className="nav-link" href="#yaklasim">Yaklaşım</a>
            <a className="nav-link" href="#isbirligi">İş birliği</a>
          </nav>
          <a className="btn btn--primary btn--sm" href="#katil">
            Bize katıl <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <span className="hero-badge" data-reveal>
            <b>İstanbul · 2026</b> Bağımsız ürün ve teknoloji ekibi
          </span>
          <h1 className="hero-title" data-reveal style={{ '--d': '80ms' } as React.CSSProperties}>
            <span className="gradient-text">İhtiyacı anlıyor,</span>{' '}
            <span className="brand-text">çözümü üretiyoruz.</span>
          </h1>
          <p className="hero-lead" data-reveal style={{ '--d': '160ms' } as React.CSSProperties}>
            ACK Techs, insanların ve ekiplerin kararlarını kolaylaştıran,
            işlerine zaman kazandıran dijital ürünler geliştirir. Yazılım,
            yapay zekâ ve tasarımı aynı masada buluşturur; her ürünü onu
            kullanacak insanlarla birlikte şekillendiririz.
          </p>
          <div className="hero-actions" data-reveal style={{ '--d': '240ms' } as React.CSSProperties}>
            <a className="btn btn--primary" href="#urunler">
              Ürünleri keşfet <ArrowDownRight aria-hidden="true" />
            </a>
            <a className="btn" href="#kurucu">
              Ekiple tanış
            </a>
          </div>

          <div className="hero-stats" data-reveal style={{ '--d': '320ms' } as React.CSSProperties}>
            <div className="hero-stat">
              <strong>{team.length + 1}</strong>
              <span>kişilik ekip</span>
            </div>
            <div className="hero-stat">
              <strong>{String(projects.length).padStart(2, '0')}</strong>
              <span>ürün ve girişim</span>
            </div>
            <div className="hero-stat">
              <strong>01</strong>
              <span>ortak vizyon</span>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker" aria-label="Uzmanlık alanları">
        <div className="ticker-track">
          {ticker.map((item, index) => (
            <span key={`${item}-${index}`}>
              {item} <Sparkle aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>

      <FounderSection />

      <section id="ekip" className="section container">
        <div className="section-heading" data-reveal>
          <div>
            <span className="eyebrow eyebrow--brand"><i /> 01 — Ekip</span>
            <h2>
              <span className="gradient-text">Ekranın arkasındakiler.</span>
            </h2>
          </div>
          <p className="section-copy">
            Farklı disiplinlerden geliyoruz. Aynı masada buluşuyor,
            birbirimizin işini büyütüyoruz.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <article
              className="card team-card"
              key={member.name}
              data-spotlight
              data-reveal
              style={{ '--d': `${(index % 3) * 80}ms` } as React.CSSProperties}
            >
              <div className="team-card-head">
                <span className="avatar-block">
                  <img
                    src={ackPath(`/profile-photos/${member.photo}`)}
                    alt={member.name}
                    width={148}
                    height={148}
                    loading="lazy"
                  />
                </span>
                <span className="card-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div>
                <h3>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    {member.name}
                  </a>
                </h3>
                <p className="member-role">{member.role}</p>
                <p className="member-role">{member.company}</p>
                <p className="member-bio">{member.bio}</p>
              </div>
              <div className="team-tags">
                {member.tags.map((tag) => (
                  <span className="pill" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="member-links">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="urunler" className="section section--tight-top container">
        <div className="section-heading" data-reveal>
          <div>
            <span className="eyebrow eyebrow--brand"><i /> 02 — Ürünler</span>
            <h2>
              <span className="gradient-text">Şu an ne üretiyoruz?</span>
            </h2>
          </div>
          <p className="section-copy">
            Ev seçiminden iş hayatına, farklı ihtiyaçlara odaklanan ürünler
            geliştiriyoruz. Her birinde hedefimiz, karmaşık bir süreci daha
            anlaşılır ve kullanışlı hale getirmek.
          </p>
        </div>

        <div className="products-list">
          {projects.map((project, index) => {
            const metric = productHighlights[project.slug] ?? {
              value: String(index + 1).padStart(2, '0'),
              label: project.type,
            };

            return (
              <a
                className="card product-card"
                href={ackPath(`/projeler/${project.slug}/`)}
                key={project.slug}
                style={{ '--tint': productColors[project.accent] } as React.CSSProperties}
                aria-label={`${project.name} detay sayfası`}
                data-spotlight
                data-reveal
              >
                <div className="product-number">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="product-body">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="product-status"><i /> {project.status}</span>
                    <span className="eyebrow">{project.type}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.cardDescription}</p>
                  <div className="product-tags">
                    {project.tags.map((tag) => (
                      <span className="pill" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="product-metric">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                  <ArrowUpRight aria-hidden="true" />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section id="yaklasim" className="section section--tight-top container">
        <div className="goals-grid">
          <div className="card goal-statement" data-spotlight data-reveal>
            <span className="eyebrow eyebrow--brand"><i /> 03 — Amacımız</span>
            <blockquote>
              “Başarımızı, geliştirdiğimiz ürünlerin{' '}
              <span className="brand-text">insanların hayatında yarattığı faydayla</span>{' '}
              ölçüyoruz.”
            </blockquote>
            <div className="statement-footer">
              <span>ACK MANIFESTO · 2026</span>
              <MoveRight size={20} aria-hidden="true" />
            </div>
          </div>
          <div className="card principles" data-spotlight data-reveal style={{ '--d': '100ms' } as React.CSSProperties}>
            <span className="eyebrow">Çalışma prensipleri</span>
            <div className="principle-row" style={{ marginTop: '1.25rem' }}>
              <span className="principle-icon">
                <Lightbulb aria-hidden="true" />
              </span>
              <div>
                <strong>01. Önce problemi anla</strong>
                <p>Çözümden önce doğru soruya zaman ayırırız.</p>
              </div>
            </div>
            <div className="principle-row">
              <span className="principle-icon">
                <CodeXml aria-hidden="true" />
              </span>
              <div>
                <strong>02. Küçük üret, hızlı öğren</strong>
                <p>Fikirleri erken test eder, gerçeğe göre şekillendiririz.</p>
              </div>
            </div>
            <div className="principle-row">
              <span className="principle-icon">
                <Palette aria-hidden="true" />
              </span>
              <div>
                <strong>03. İşlev kadar karakter</strong>
                <p>
                  Kullanışlı olanın aynı zamanda akılda kalıcı olabileceğine
                  inanırız.
                </p>
              </div>
            </div>
            <div className="principle-row">
              <span className="principle-icon">
                <BadgeCheck aria-hidden="true" />
              </span>
              <div>
                <strong>04. Sahiplen, paylaş</strong>
                <p>Başarıyı da hatayı da açıkça paylaşırız.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="isbirligi" className="section section--tight-top container partnership">
        <div className="partnership-copy" data-reveal>
          <span className="eyebrow eyebrow--brand"><i /> Markalar &amp; topluluklar</span>
          <h2>
            <span className="gradient-text">Reklam değil,</span>
            <br />
            <span className="brand-text">doğru bağlam.</span>
          </h2>
          <p>
            Teknolojiye meraklı, üretken bir toplulukla markanızı anlamlı bir
            fikir etrafında buluşturalım.
          </p>
          <a className="btn btn--primary" href="#iletisim">
            İş birliği konuşalım <ArrowRight aria-hidden="true" />
          </a>
        </div>
        <div className="partnership-options">
          {[
            ['01', 'İçerik ortaklığı', 'Ürününüzü gerçek bir kullanım senaryosuyla, ekibin üretim dilinde anlatalım.'],
            ['02', 'Etkinlik desteği', 'Atölye, yayın ve buluşmalarda topluluğa birlikte değer katalım.'],
            ['03', 'Ürün entegrasyonu', 'Kâğıt üzerinde kalmayan, ölçülebilir ve doğal entegrasyonlar tasarlayalım.'],
          ].map(([num, title, text], index) => (
            <article
              className="card partner-option"
              key={num}
              data-spotlight
              data-reveal
              style={{ '--d': `${index * 90}ms` } as React.CSSProperties}
            >
              <span>{num}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section id="katil" className="container">
        <div className="card join" data-spotlight data-reveal>
          <div className="join-main">
            <span className="eyebrow eyebrow--brand"><i /> 04 — Açık çağrı</span>
            <h2>
              <span className="gradient-text">Bizde bir sandalye</span>
              <br />
              <span className="brand-text">sana ayrılmış olabilir.</span>
            </h2>
            <p>
              Unvanından önce merakını, portföyünden önce nasıl düşündüğünü
              görmek istiyoruz.
            </p>
            <a className="btn btn--primary" href="mailto:ack.techs0@gmail.com">
              Kendini anlat <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="join-aside">
            <div>
              <span className="eyebrow">Şu alanlarda tanışmak isteriz</span>
              <ul className="open-roles">
                <li>Frontend Developer <ArrowUpRight aria-hidden="true" /></li>
                <li>Product Designer <ArrowUpRight aria-hidden="true" /></li>
                <li>AI / ML Engineer <ArrowUpRight aria-hidden="true" /></li>
                <li>Community Lead <ArrowUpRight aria-hidden="true" /></li>
              </ul>
            </div>
            <ul className="join-steps">
              <li>01 — Kısaca kendini anlat</li>
              <li>02 — Ürettiğin bir şeyi paylaş</li>
              <li>03 — Birlikte kahve içelim</li>
            </ul>
          </div>
        </div>
      </section>

      <footer id="iletisim" className="site-footer">
        <div className="container footer-grid">
          <div>
            <a href="#top" className="footer-logo" aria-label="Sayfanın başına dön">
              <LogoMark size={30} />
              ACK Techs
            </a>
            <p>Fikirden çalışan ürüne.</p>
          </div>
          <div className="footer-contact">
            <span className="eyebrow">Bir şey mi konuşacağız?</span>
            <a href="mailto:ack.techs0@gmail.com">
              ack.techs0@gmail.com <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="footer-meta">
            <span>© 2026 ACK TECHS</span>
            <a href="#top">YUKARI DÖN ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
