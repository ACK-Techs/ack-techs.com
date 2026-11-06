import { ArrowUpRight } from 'lucide-react';
import { ackPath } from '@/lib/paths';
import { founder } from '@/lib/team';

export function FounderSection() {
  return (
    <section id="kurucu" className="section container" aria-labelledby="founder-name">
      <div className="card founder-feature" data-spotlight data-reveal>
        <div className="founder-card">
          <div className="founder-portrait">
            <img
              src={ackPath(`/profile-photos/${founder.photo}`)}
              alt={founder.name}
              width={1122}
              height={1069}
              loading="lazy"
            />
            <div className="founder-contact">
              <span>İletişim için</span>
              <a href={`mailto:${founder.email}`}>{founder.email}</a>
            </div>
          </div>
          <div className="founder-copy">
            <span className="eyebrow eyebrow--brand"><i /> Kurucu</span>
            <h2 id="founder-name" className="gradient-text">Ali Çağlar<br />Koçer</h2>
            <p className="founder-role">{founder.role}</p>
            <div className="founder-bio">
              {founder.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <ul className="founder-companies" aria-label="Profesyonel deneyim">
              {founder.companies.map((company) => (
                <li className="pill" key={company}>{company}</li>
              ))}
            </ul>
            <div className="founder-links">
              <a className="btn btn--primary" href={founder.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Ali Çağlar Koçer LinkedIn profili (yeni sekme)">
                LinkedIn <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="btn" href={founder.github} target="_blank" rel="noopener noreferrer" aria-label="Ali Çağlar Koçer GitHub profili (yeni sekme)">
                GitHub <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <ul className="founder-projects" aria-label="Seçilmiş ürünler">
          {founder.projects.map((project) => (
            <li key={project.name}>
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} GitHub deposu${project.private ? ' (özel depo)' : ''} (yeni sekme)`}>
                <h3>{project.name}<ArrowUpRight aria-hidden="true" /></h3>
                <p>{project.description}</p>
                <span className="founder-project-link">{project.private ? 'GitHub · Özel depo' : 'GitHub'}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
