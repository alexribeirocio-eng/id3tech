/* eslint-disable @next/next/no-img-element */

const metrics = [
  { value: "25+", label: "anos de carreira" },
  { value: "12", label: "anos em liderança" },
  { value: "3", label: "países em operação" },
  { value: "30", label: "profissionais liderados" },
];

const experiences = [
  {
    company: "OSKLEN · GRUPO DASS",
    role: "Gerente Executivo de TI / Head de TI",
    period: "ago 2022 — mar 2026",
    location: "Rio de Janeiro / São Paulo",
    summary:
      "Reestruturação da tecnologia após aquisição pelo Grupo DASS, com reporte ao CFO/CEO e gestão de 30 profissionais em uma operação no Brasil, Uruguai e Estados Unidos.",
    highlights: [
      "Governança executiva, planejamento orçamentário e gestão de contratos e fornecedores estratégicos.",
      "Migração Azure para GCP e disciplina FinOps, reduzindo em 35% o custo anual de infraestrutura.",
      "Databricks Lakehouse, Unity Catalog, Power BI e Centro de Excelência em Dados.",
      "IA generativa e automações com ganho equivalente a 3 FTEs e ciclos de análise 60% menores.",
      "SOC/SIEM, WAF, pentests e políticas LGPD com zero ocorrências críticas por 18 meses.",
      "VTEX headless/API First com aumento de 6% no faturamento digital e Onebeat com 20% menos rupturas.",
    ],
  },
  {
    company: "BURGER KING · LOJAS 3B · WFP HOLDING",
    role: "Diretor de TI / COO (CIO/COO)",
    period: "mar 2017 — jul 2022",
    location: "São Paulo / Rio de Janeiro",
    summary:
      "Reporte ao CEO, liderança de times de até 30 profissionais e consolidação da tecnologia do varejo físico e online, incluindo gestão operacional de franquia.",
    highlights: [
      "Gestão de crises com redução de 57% nos incidentes e 32% nos problemas operacionais.",
      "Operação TechFin e private label, ampliando em 25% a participação dos novos meios de pagamento.",
      "E-commerce VTEX integrado ao ERP Linx e WMS com automações S&OP e operação omnichannel.",
      "Retrofit e revisão estratégica da franquia Burger King, alcançando breakeven em 18 meses.",
    ],
  },
  {
    company: "MAIS MEGALOJAS · HOLDING VM BUSINESS",
    role: "Diretor de TI",
    period: "abr 2014 — fev 2017",
    location: "São Paulo / Rio de Janeiro",
    summary:
      "Direção de tecnologia em uma operação com 14 lojas de departamentos, cinco centros comerciais e centro de distribuição, com reporte aos sócios.",
    highlights: [
      "Estratégia, arquitetura, orçamento, governança, contratos e portfólio de projetos.",
      "Responsabilidades de Operações e apoio aos negócios de varejo e real estate.",
    ],
  },
  {
    company: "GRIPPON COMÉRCIO DE ROUPAS",
    role: "Gerente de TI / Coordenador / Analista Sênior",
    period: "ago 1998 — mar 2014",
    location: "SP, RJ, BA, MG, PR e RS",
    summary:
      "Trajetória de crescimento em uma rede multirregional de varejo de moda, sustentando a expansão da operação e a evolução dos processos de negócio.",
    highlights: [
      "Construção e reestruturação da área de TI e liderança de equipe de analistas.",
      "Desenvolvimento de sistemas, implantação e integração de ERP e gestão de parceiros.",
    ],
  },
];

const projects = [
  {
    eyebrow: "M&A · CLOUD · SEGURANÇA",
    title: "Transformação pós-aquisição",
    description:
      "Separação tecnológica da Osklen após aquisição, com novo modelo de governança, liderança e operação própria.",
    result: "90 dias · 550 caixas postais · 32 servidores migrados",
    image: "/project-transformation.webp",
  },
  {
    eyebrow: "CLOUD · FINOPS",
    title: "Eficiência de infraestrutura",
    description:
      "Migração Azure para GCP, disciplina FinOps e renegociação do ecossistema Google Workspace com Gemini.",
    result: "35% menos custo de cloud · 30% menos licenciamento",
    image: "/hero-leadership.webp",
  },
  {
    eyebrow: "CYBERSECURITY · LGPD",
    title: "Resiliência e proteção corporativa",
    description:
      "SOC/SIEM, WAF, vulnerabilidades, pentests, conscientização, comitê de privacidade e políticas LGPD.",
    result: "Zero ocorrências críticas por 18 meses",
    image: "/project-cybersecurity.webp",
  },
  {
    eyebrow: "DADOS · IA",
    title: "Lakehouse e automação inteligente",
    description:
      "Databricks, Unity Catalog, Power BI, Centro de Excelência em Dados, agentes de IA e capacitação das áreas.",
    result: "3 FTEs de ganho · ciclos de análise 60% menores",
    image: "/project-transformation.webp",
  },
  {
    eyebrow: "OMNICHANNEL · VAREJO",
    title: "Comércio unificado e estoque",
    description:
      "VTEX headless, API First, PDV móvel, Ship from Store, Pickup Store, Prateleira Infinita e Onebeat.",
    result: "+6% no digital · 20% menos rupturas",
    image: "/project-transformation.webp",
  },
  {
    eyebrow: "LIDERANÇA · OPERAÇÕES",
    title: "Times e execução estratégica",
    description:
      "Estruturação de equipes com desenvolvedores, tech leads, POs e BPOs e modernização da esteira DevOps.",
    result: "Mais de 70% de eficiência na entrega",
    image: "/project-leadership.webp",
  },
];

const competencies = [
  {
    icon: "↗",
    title: "Liderança & Estratégia",
    tags: [
      "Liderança Executiva",
      "Planejamento Estratégico",
      "Transformação Digital",
      "Gestão de Mudanças",
      "M&A",
      "Board",
    ],
  },
  {
    icon: "◇",
    title: "Segurança & Conformidade",
    tags: ["Cibersegurança", "LGPD", "PCI DSS", "ISO 27000", "NIST", "SOC/SIEM", "WAF"],
  },
  {
    icon: "☁",
    title: "Cloud & Infraestrutura",
    tags: ["GCP", "Azure", "FinOps", "Google Workspace", "Continuidade", "Resiliência"],
  },
  {
    icon: "◎",
    title: "Dados & Analytics",
    tags: ["Databricks", "BigQuery", "Unity Catalog", "Power BI", "Lakehouse", "Governança"],
  },
  {
    icon: "⌘",
    title: "Varejo & Operações",
    tags: ["VTEX", "Linx", "Protheus", "WMS", "S&OP", "PLM", "Onebeat", "Omnichannel"],
  },
  {
    icon: "✦",
    title: "IA & Inovação",
    tags: ["Gemini", "IA Generativa", "Agentes", "Automação", "Apps Script", "API First", "CI/CD"],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aleksandro Castro Ribeiro",
  alternateName: "Alex Ribeiro",
  url: "https://id3.tech",
  email: "mailto:alexribeiro.cio@gmail.com",
  jobTitle: "CIO e Diretor Executivo de Tecnologia e Transformação",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  knowsAbout: [
    "Estratégia de Tecnologia",
    "Transformação Digital",
    "Varejo e Omnichannel",
    "Dados e Inteligência Artificial",
    "Cloud e FinOps",
    "Cibersegurança e LGPD",
  ],
  affiliation: {
    "@type": "Organization",
    name: "ID3 Tech",
    url: "https://id3.tech",
  },
  sameAs: [
    "https://www.linkedin.com/in/alexcribeiro",
    "https://github.com/alexribeirocio-eng",
  ],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="site-header">
        <div className="header-shell">
          <a className="brand" href="#inicio" aria-label="Alex Ribeiro — início">
            <span className="brand-monogram" aria-hidden="true">AR</span>
            <span className="brand-name">Alex Ribeiro</span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#sobre">Sobre</a>
            <a href="#experiencia">Experiência</a>
            <a href="#projetos">Projetos</a>
            <a href="#competencias">Competências</a>
            <a href="#contato">Contato</a>
          </nav>

          <a className="header-cta" href="https://www.linkedin.com/in/alexcribeiro" target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>

          <details className="mobile-menu">
            <summary aria-label="Abrir menu">Menu</summary>
            <nav aria-label="Navegação móvel">
              <a href="#sobre">Sobre</a>
              <a href="#experiencia">Experiência</a>
              <a href="#projetos">Projetos</a>
              <a href="#competencias">Competências</a>
              <a href="#contato">Contato</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-label="Apresentação profissional">
          <div className="hero-overlay" />
          <div className="content-shell hero-content">
            <p className="hero-kicker">CIO · DIRETOR EXECUTIVO DE TECNOLOGIA</p>
            <h1>Liderança em<br />Tecnologia</h1>
            <p className="hero-subtitle">Transformação Digital <i /> Estratégia <i /> Inovação</p>
            <p className="hero-description">
              Conectando tecnologia, pessoas e operação para gerar crescimento,
              eficiência, resiliência e vantagem competitiva.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#sobre">Conheça minha trajetória</a>
              <a className="button button-ghost" href="mailto:alexribeiro.cio@gmail.com?subject=Contato%20pelo%20id3.tech">
                Vamos conversar
              </a>
            </div>
          </div>
          <a className="scroll-cue" href="#sobre" aria-label="Ir para a seção Sobre">
            <span>Explorar</span><i aria-hidden="true">↓</i>
          </a>
        </section>

        <section className="profile section" id="sobre">
          <div className="content-shell profile-grid">
            <div className="profile-copy">
              <p className="section-eyebrow">SOBRE MIM</p>
              <h2>Aleksandro<br /><span>Castro Ribeiro</span></h2>
              <p className="profile-role">CIO · Diretor Executivo de Tecnologia e Transformação</p>
              <p className="profile-lead">
                Executivo de tecnologia com mais de 25 anos de carreira e cerca
                de 12 anos em posições de liderança nos segmentos de varejo,
                moda, luxo, lifestyle, food service e real estate.
              </p>
              <p>
                Experiência como Head de TI, Diretor de TI e COO, com reporte a
                CEO/CFO, participação em comitês executivos e liderança de
                transformações pós-M&A. Conecto tecnologia à estratégia para
                ampliar receita, eficiência, giro de estoque, resiliência e segurança.
              </p>
              <div className="profile-links">
                <a href="mailto:alexribeiro.cio@gmail.com">alexribeiro.cio@gmail.com</a>
                <span>São Paulo, SP · disponibilidade para mudança</span>
              </div>
            </div>

            <div className="portrait-wrap">
              <div className="portrait-accent" aria-hidden="true" />
              <img
                src="/aleksandro-ribeiro.png"
                alt="Aleksandro Castro Ribeiro"
                width="1086"
                height="1448"
              />
              <div className="portrait-badge">
                <strong>25+</strong><span>anos transformando negócios</span>
              </div>
            </div>
          </div>

          <div className="content-shell metric-grid" aria-label="Resumo da trajetória">
            {metrics.map((metric) => (
              <article key={metric.label}>
                <strong>{metric.value}</strong><span>{metric.label}</span>
              </article>
            ))}
          </div>

          <div className="content-shell about-cards">
            <article>
              <span className="card-icon" aria-hidden="true">↗</span>
              <h3>Trajetória Profissional</h3>
              <p>
                Iniciou a carreira em 1998 na Grippon, passou por Mais Megalojas
                e Lojas 3B/Burger King e liderou a reestruturação tecnológica da Osklen após M&A.
              </p>
            </article>
            <article>
              <span className="card-icon" aria-hidden="true">◎</span>
              <h3>Abordagem</h3>
              <p>
                Combina visão de negócio, liderança de pessoas, governança e
                profundidade técnica para transformar estratégia em execução mensurável.
              </p>
            </article>
            <article>
              <span className="card-icon" aria-hidden="true">A</span>
              <h3>Idiomas</h3>
              <p>Inglês avançado e espanhol intermediário para atuação em ambientes multiculturais.</p>
            </article>
          </div>
        </section>

        <section className="experience section section-muted" id="experiencia">
          <div className="content-shell">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow">EXPERIÊNCIA</p>
                <h2>Experiência Profissional</h2>
              </div>
              <p>Trajetória executiva em tecnologia, operações e transformação de negócios.</p>
            </div>

            <div className="timeline">
              {experiences.map((experience, index) => (
                <article className="timeline-item" key={experience.company}>
                  <div className="timeline-marker" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
                  <div className="experience-card">
                    <div className="experience-top">
                      <div>
                        <p className="company">{experience.company}</p>
                        <h3>{experience.role}</h3>
                      </div>
                      <div className="experience-meta">
                        <span>{experience.period}</span>
                        <span>{experience.location}</span>
                      </div>
                    </div>
                    <p className="experience-summary">{experience.summary}</p>
                    <ul>
                      {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects section" id="projetos">
          <div className="content-shell">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow">REALIZAÇÕES</p>
                <h2>Projetos Executados</h2>
              </div>
              <p>Iniciativas estratégicas que conectaram tecnologia a impacto mensurável.</p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt=""
                      loading="lazy"
                      width="1920"
                      height="1080"
                    />
                  </div>
                  <div className="project-body">
                    <p className="project-eyebrow">{project.eyebrow}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-result"><span aria-hidden="true">✓</span>{project.result}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills section section-muted" id="competencias">
          <div className="content-shell">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow">EXPERTISE</p>
                <h2>Competências</h2>
              </div>
              <p>Capacidades executivas, técnicas e operacionais construídas ao longo da carreira.</p>
            </div>

            <div className="skills-grid">
              {competencies.map((competency) => (
                <article className="skill-card" key={competency.title}>
                  <div className="skill-title">
                    <span aria-hidden="true">{competency.icon}</span>
                    <h3>{competency.title}</h3>
                  </div>
                  <div className="skill-tags">
                    {competency.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>

            <div className="education-grid">
              <article>
                <p className="education-title">Educação & Formação Executiva</p>
                <div className="education-item"><strong>Gestão de Pessoas e Liderança Organizacional</strong><span>FIA Business School · 2021</span></div>
                <div className="education-item"><strong>MBA em Gestão Estratégica de TI</strong><span>Fundação Getulio Vargas · 2014</span></div>
                <div className="education-item"><strong>Tecnologia em Informática</strong><span>FATEC Santo André · 2000</span></div>
              </article>
              <article>
                <p className="education-title">Atualização & Idiomas</p>
                <div className="education-item"><strong>Cibersegurança para Executivos na Era da IA</strong><span>TDS Company · 2026</span></div>
                <div className="education-item"><strong>AI Max — Gestão Executiva de IA</strong><span>StartSe · 2025</span></div>
                <div className="language-row"><span>Inglês <strong>avançado</strong></span><span>Espanhol <strong>intermediário</strong></span></div>
              </article>
            </div>
          </div>
        </section>

        <section className="contact section" id="contato">
          <div className="content-shell contact-shell">
            <div className="contact-copy">
              <p className="section-eyebrow">CONTATO</p>
              <h2>Vamos<br /><span>conectar?</span></h2>
              <p>
                Aberto a conversas sobre liderança executiva, transformação,
                varejo, dados, inteligência artificial e cibersegurança.
              </p>
            </div>
            <div className="contact-card">
              <span className="contact-icon" aria-hidden="true">@</span>
              <div>
                <p>Email</p>
                <a href="mailto:alexribeiro.cio@gmail.com?subject=Contato%20pelo%20id3.tech">alexribeiro.cio@gmail.com</a>
              </div>
            </div>
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/alexcribeiro" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://github.com/alexribeirocio-eng" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://id3.tech">ID3 Tech ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="content-shell footer-shell">
          <div className="brand footer-brand"><span className="brand-monogram" aria-hidden="true">AR</span><span className="brand-name">Alex Ribeiro</span></div>
          <p>© {new Date().getFullYear()} Aleksandro Castro Ribeiro. ID3.TECH</p>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
