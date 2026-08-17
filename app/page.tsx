const capabilities = [
  {
    index: "01",
    title: "Estratégia & Transformação",
    label: "TECH_TO_BUSINESS",
    description:
      "Estratégia de tecnologia, transformação digital, governança, M&A e integração de operações conectadas às prioridades do negócio.",
    tags: ["Board", "M&A", "Capex/Opex"],
  },
  {
    index: "02",
    title: "Varejo & Omnichannel",
    label: "CONNECTED_RETAIL",
    description:
      "Ecossistemas de varejo físico e digital, e-commerce, ERP, logística e experiência do cliente com visão ponta a ponta.",
    tags: ["VTEX", "ERP", "S&OP"],
  },
  {
    index: "03",
    title: "Dados & Inteligência Artificial",
    label: "DATA_TO_DECISION",
    description:
      "Lakehouse, analytics executivo, IA generativa e automação para acelerar decisões, produtividade e autonomia das áreas.",
    tags: ["Databricks", "Power BI", "Gemini"],
  },
  {
    index: "04",
    title: "Cloud & Cibersegurança",
    label: "RESILIENT_OPERATIONS",
    description:
      "Cloud, FinOps, continuidade, privacidade e segurança com foco em resiliência, eficiência e gestão de riscos.",
    tags: ["GCP/Azure", "SOC/SIEM", "LGPD"],
  },
];

const keyResults = [
  { value: "35%", label: "menor custo anual de cloud" },
  { value: "+6%", label: "no faturamento digital" },
  { value: "60%", label: "menos tempo nos ciclos de análise" },
  { value: "20%", label: "menos rupturas de estoque" },
  { value: "3 FTEs", label: "de ganho equivalente com IA" },
];

const experiences = [
  {
    company: "OSKLEN · GRUPO DASS",
    location: "Rio de Janeiro / São Paulo",
    period: "ago 2022 — mar 2026",
    role: "Gerente Executivo de TI / Head de TI",
    intro:
      "Reestruturação da tecnologia após aquisição pelo Grupo DASS, com reporte ao CFO/CEO e gestão de 30 profissionais. Escopo sobre Tecnologia, Sistemas, Infraestrutura, Dados, Cibersegurança e integrações em uma operação no Brasil, Uruguai e Estados Unidos.",
    highlights: [
      "Instituiu governança executiva, planejamento orçamentário e gestão de contratos, conectando investimentos à agenda do board.",
      "Migrou o ambiente Azure para GCP e implantou FinOps, reduzindo em 35% o custo anual de infraestrutura; renegociou o Google Workspace com redução adicional de 30%.",
      "Construiu a plataforma de dados com Databricks Lakehouse, Unity Catalog e Power BI e estabeleceu o Centro de Excelência em Dados.",
      "Aplicou IA generativa, agentes e automações, gerando ganho equivalente a 3 FTEs e redução de 60% nos ciclos de análise.",
      "Estruturou SOC/SIEM, WAF, vulnerabilidades, pentests e políticas LGPD, mantendo zero ocorrências críticas por 18 meses.",
      "Apoiou a migração do e-commerce para VTEX headless/API First, contribuindo para aumento de 6% no faturamento digital, e implantou Onebeat, reduzindo rupturas em 20%.",
    ],
  },
  {
    company: "BURGER KING · LOJAS 3B · WFP HOLDING",
    location: "São Paulo / Rio de Janeiro",
    period: "mar 2017 — jul 2022",
    role: "Diretor de TI / COO (CIO/COO)",
    intro:
      "Reporte ao CEO, liderança de equipes de até 30 profissionais e consolidação da tecnologia do varejo físico e online, incluindo a gestão operacional de uma franquia Burger King.",
    highlights: [
      "Estabilizou o ambiente de vendas e implantou gestão de crises, reduzindo em 57% os incidentes e em 32% os problemas operacionais.",
      "Implantou operação TechFin com cartão private label e produtos financeiros, ampliando em 25% a participação dos novos meios de pagamento.",
      "Estruturou e-commerce VTEX integrado ao ERP Linx e WMS, com automações S&OP e operação omnichannel.",
      "Conduziu o retrofit da franquia Burger King e a revisão estratégica da operação, alcançando breakeven em 18 meses.",
    ],
  },
  {
    company: "MAIS MEGALOJAS · HOLDING VM BUSINESS",
    location: "São Paulo / Rio de Janeiro",
    period: "abr 2014 — fev 2017",
    role: "Diretor de TI",
    intro:
      "Responsável pela tecnologia de uma operação com 14 lojas de departamentos, cinco centros comerciais e centro de distribuição, com reporte aos sócios.",
    highlights: [
      "Liderou estratégia, planejamento, arquitetura, orçamento, governança, contratos e portfólio de projetos de tecnologia.",
      "Acumulou responsabilidades de Operações e apoiou negócios de varejo e real estate, direcionando tecnologia para eficiência e expansão.",
    ],
  },
  {
    company: "GRIPPON COMÉRCIO DE ROUPAS",
    location: "SP, RJ, BA, MG, PR e RS",
    period: "ago 1998 — mar 2014",
    role: "Gerente de TI / Coordenador de Tecnologia / Analista Sênior",
    intro:
      "Trajetória de crescimento em uma rede multirregional de varejo de moda, sustentando a expansão da operação e a evolução dos processos de negócio.",
    highlights: [
      "Construiu e reestruturou a área de TI, liderando equipe de analistas e a sustentação tecnológica da rede.",
      "Conduziu desenvolvimento de sistemas, implantação e integração de ERP e parcerias com fornecedores e consultorias.",
    ],
  },
];

const education = [
  {
    course: "Gestão de Pessoas com Ênfase em Liderança Organizacional",
    institution: "FIA Business School",
    year: "2021",
  },
  {
    course: "MBA em Gestão Estratégica da Tecnologia da Informação",
    institution: "Fundação Getulio Vargas (FGV)",
    year: "2014",
  },
  {
    course: "Tecnologia em Informática",
    institution: "FATEC Santo André",
    year: "2000",
  },
];

const technologies = [
  "GCP",
  "Azure",
  "Google Workspace",
  "BigQuery",
  "Databricks",
  "Unity Catalog",
  "Power BI",
  "Gemini",
  "SAP B1",
  "Oracle",
  "TOTVS Protheus",
  "Linx",
  "Senior",
  "Millennium",
  "VTEX",
  "WMS",
  "PLM Umode",
  "Onebeat",
  "API First",
  "GitHub",
  "CI/CD",
  "SOC/SIEM",
  "WAF",
  "ISO 27000",
  "NIST",
  "CIS Controls",
  "PCI DSS",
  "ITIL",
  "COBIT",
  "Governança de IA",
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
    url: "https://www.id3.com.br",
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
        <div className="nav-shell">
          <a className="brand" href="#inicio" aria-label="Aleksandro Ribeiro — início">
            <span className="brand-mark" aria-hidden="true">
              ID3
            </span>
            <span className="brand-copy">
              <strong>TECH</strong>
              <small>CV PROFISSIONAL</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#perfil">Perfil</a>
            <a href="#resultados">Resultados</a>
            <a href="#experiencia">Experiência</a>
            <a href="#formacao">Formação</a>
          </nav>

          <a className="header-contact" href="#contato">
            Contato <span aria-hidden="true">↗</span>
          </a>

          <details className="mobile-nav">
            <summary aria-label="Abrir menu">Menu</summary>
            <nav aria-label="Navegação móvel">
              <a href="#perfil">Perfil</a>
              <a href="#competencias">Competências</a>
              <a href="#resultados">Resultados</a>
              <a href="#experiencia">Experiência</a>
              <a href="#formacao">Formação</a>
              <a href="#projeto">ID3 Tech</a>
              <a href="#contato">Contato</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero section-shell" id="inicio">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="status-dot" aria-hidden="true" />
                CIO · Diretor Executivo de Tecnologia e Transformação
              </p>
              <h1>
                Aleksandro
                <br />
                <span>Ribeiro.</span>
              </h1>
              <p className="hero-lead">
                Tecnologia conectada à <strong>estratégia</strong>, à eficiência e
                ao crescimento do negócio.
              </p>
              <p className="hero-summary">
                Executivo com mais de 25 anos de carreira e cerca de 12 anos em
                posições de liderança, com experiência em varejo, moda, luxo,
                lifestyle, food service e real estate.
              </p>
              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href="mailto:alexribeiro.cio@gmail.com?subject=Contato%20pelo%20CV%20virtual"
                >
                  Iniciar conversa <span aria-hidden="true">→</span>
                </a>
                <a
                  className="button button-secondary"
                  href="https://www.linkedin.com/in/alexcribeiro"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver LinkedIn
                </a>
              </div>
            </div>

            <aside className="signal-panel" aria-label="Resumo profissional">
              <div className="panel-topline">
                <span>EXEC_PROFILE</span>
                <span className="panel-live">OPEN_TO_CONNECT</span>
              </div>
              <div className="monogram" aria-hidden="true">
                <span>AR</span>
              </div>
              <div className="signal-row">
                <span>CARREIRA</span>
                <strong>25+ anos em tecnologia</strong>
              </div>
              <div className="signal-row">
                <span>LIDERANÇA</span>
                <strong>12 anos · times de até 30</strong>
              </div>
              <div className="signal-row">
                <span>OPERAÇÕES</span>
                <strong>Brasil · Uruguai · EUA</strong>
              </div>
              <div className="signal-bars" aria-hidden="true">
                {Array.from({ length: 22 }, (_, index) => (
                  <i key={index} style={{ height: `${24 + ((index * 17) % 62)}%` }} />
                ))}
              </div>
            </aside>
          </div>
          <div className="hero-strip" aria-label="Síntese da trajetória">
            <span>Varejo & Omnichannel</span>
            <i aria-hidden="true" />
            <span>Dados & IA</span>
            <i aria-hidden="true" />
            <span>Eficiência Operacional</span>
            <i aria-hidden="true" />
            <span>Cibersegurança</span>
          </div>
        </section>

        <section className="profile section-shell" id="perfil">
          <div className="section-label">{"// 01 — PERFIL EXECUTIVO"}</div>
          <div className="profile-grid">
            <h2>
              Visão de tecnologia
              <br />
              conectada ao <span>negócio.</span>
            </h2>
            <div className="profile-copy">
              <p>
                Experiência como Head de TI, Diretor de TI e COO, com reporte a
                CEO/CFO, participação em comitês executivos e liderança de
                transformações pós-M&A.
              </p>
              <p>
                Conecta tecnologia à estratégia para ampliar receita, eficiência,
                giro de estoque, resiliência operacional e segurança, combinando
                profundidade técnica, visão financeira e liderança de times.
              </p>
              <div className="profile-quote">
                <span aria-hidden="true">“</span>
                <p>
                  Mentalidade de tecnologia,
                  <br />
                  linguagem de negócio.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="capabilities section-shell" id="competencias">
          <div className="section-heading">
            <div>
              <div className="section-label">{"// 02 — COMPETÊNCIAS"}</div>
              <h2>Frentes de atuação</h2>
            </div>
            <p>
              Liderança executiva para integrar estratégia, operações,
              arquitetura, dados, segurança e experiência do cliente.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability-card" key={capability.index}>
                <div className="card-index">{capability.index}</div>
                <div className="card-symbol" aria-hidden="true">
                  {capability.index === "01" && "⌁"}
                  {capability.index === "02" && "◇"}
                  {capability.index === "03" && "✦"}
                  {capability.index === "04" && "☁"}
                </div>
                <p className="card-label">{`// ${capability.label}`}</p>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <div className="tag-list">
                  {capability.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="metrics section-shell" id="resultados">
          <div className="section-heading">
            <div>
              <div className="section-label">{"// 03 — RESULTADOS-CHAVE"}</div>
              <h2>Impacto mensurável</h2>
            </div>
            <p>
              Resultados selecionados em eficiência, receita, dados, IA e
              operação de varejo.
            </p>
          </div>
          <div className="metric-grid">
            {keyResults.map((result) => (
              <article className="metric-card" key={result.value + result.label}>
                <strong>{result.value}</strong>
                <p>{result.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section-shell" id="experiencia">
          <div className="experience-heading">
            <div className="section-label">{"// 04 — EXPERIÊNCIA PROFISSIONAL"}</div>
            <h2>
              Uma trajetória de
              <br />
              transformação e <span>escala.</span>
            </h2>
          </div>
          <div className="experience-list">
            {experiences.map((experience, index) => (
              <article className="experience-item" key={experience.company}>
                <div className="experience-index">0{index + 1}</div>
                <div className="experience-content">
                  <div className="role-meta">
                    <div>
                      <p className="role-company">{experience.company}</p>
                      <h3>{experience.role}</h3>
                    </div>
                    <div className="role-place">
                      <span>{experience.period}</span>
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  <p className="role-intro">{experience.intro}</p>
                  <ul>
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="education section-shell" id="formacao">
          <div className="section-heading">
            <div>
              <div className="section-label">{"// 05 — FORMAÇÃO & DESENVOLVIMENTO"}</div>
              <h2>Conhecimento em evolução</h2>
            </div>
            <p>
              Formação em tecnologia e gestão, somada à atualização executiva
              contínua em inteligência artificial e cibersegurança.
            </p>
          </div>
          <div className="education-grid">
            <div className="education-list">
              {education.map((item) => (
                <article key={item.course}>
                  <span>{item.year}</span>
                  <div>
                    <h3>{item.course}</h3>
                    <p>{item.institution}</p>
                  </div>
                </article>
              ))}
              <article className="executive-update">
                <span>2025—26</span>
                <div>
                  <h3>Atualização executiva</h3>
                  <p>
                    Cibersegurança para Executivos na Era da IA · TDS Company
                    <br />
                    AI Max — Gestão Executiva de IA · StartSe
                  </p>
                </div>
              </article>
            </div>
            <aside className="stack-panel">
              <p className="stack-title">TECNOLOGIAS · PLATAFORMAS · FRAMEWORKS</p>
              <div className="tech-cloud">
                {technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <div className="languages">
                <p>IDIOMAS</p>
                <div>
                  <span>Inglês <strong>avançado</strong></span>
                  <span>Espanhol <strong>intermediário</strong></span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="project section-shell" id="projeto">
          <div className="project-card">
            <div className="project-visual" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="project-core">
                <strong>ID3</strong>
                <span>TECH</span>
              </div>
            </div>
            <div className="project-content">
              <div className="section-label">{"// PROJETO EM DESTAQUE"}</div>
              <h2>ID3 Tech</h2>
              <p className="project-lead">
                Consultoria em tecnologia com foco em governança,
                infraestrutura, cibersegurança, dados e inteligência artificial.
              </p>
              <p>
                Uma plataforma de atuação orientada a conectar a agenda de
                tecnologia aos resultados do negócio com visão executiva e
                profundidade técnica.
              </p>
              <a
                className="text-link"
                href="https://www.id3.com.br"
                target="_blank"
                rel="noreferrer"
              >
                Visitar www.id3.com.br <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="contact section-shell" id="contato">
          <div className="contact-grid">
            <div>
              <div className="section-label">{"// 06 — CONTATO"}</div>
              <h2>
                Vamos construir o
                <br />
                próximo <span>capítulo?</span>
              </h2>
            </div>
            <div className="contact-copy">
              <p>
                Disponível para conversas sobre liderança de tecnologia,
                transformação, varejo, governança, segurança, dados e IA.
              </p>
              <a
                className="contact-email"
                href="mailto:alexribeiro.cio@gmail.com?subject=Contato%20pelo%20CV%20virtual"
              >
                alexribeiro.cio@gmail.com <span aria-hidden="true">↗</span>
              </a>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/alexcribeiro"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/alexribeirocio-eng"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.id3.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  ID3 Tech
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="section-shell footer-shell">
          <p>© {new Date().getFullYear()} Aleksandro Castro Ribeiro</p>
          <p>ID3.TECH</p>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
