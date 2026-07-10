import React from 'react';
import desktopScreen from './assets/argo-desktop-real.png';
import logoSquare from './assets/argo-logo-square.png';
import mobileScreen from './assets/argo-mobile-screen.png';

const benefits = [
  ['Tudo centralizado', 'Organize suas principais informações financeiras em um só lugar.'],
  ['Mais clareza', 'Entenda melhor o que entra, o que sai e como está sua rotina financeira.'],
  ['Acesso prático', 'Utilize o sistema no celular ou no computador.'],
  ['Decisões melhores', 'Use informações organizadas para planejar seus próximos passos.'],
];

const steps = [
  ['Acesse', 'Entre pelo celular ou computador.'],
  ['Organize', 'Registre suas informações financeiras.'],
  ['Acompanhe', 'Tenha uma visão mais clara da sua rotina.'],
];

const included = [
  'Acesso ao ARGO',
  'Experiência mobile',
  'Experiência desktop',
  'Pagamento seguro',
];

const faq = [
  [
    'O ARGO funciona no celular?',
    'Sim. A experiência mobile foi pensada para acompanhar sua rotina financeira com praticidade.',
  ],
  [
    'O ARGO também funciona no computador?',
    'Sim. A versão desktop oferece uma visão mais ampla para organizar e revisar suas informações.',
  ],
  [
    'Preciso entender de finanças para usar?',
    'Não. O ARGO foi criado para tornar a organização financeira mais simples e visual.',
  ],
  [
    'Como recebo o acesso depois da compra?',
    'O acesso é liberado após a confirmação da compra pela plataforma de pagamento.',
  ],
];

function App() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Navegação principal">
        <a className="brand-mark" href="#top" aria-label="ARGO">
          <img src={logoSquare} alt="" />
          <span>
            ARGO
            <small>Financial Workspace</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="#produto">Produto</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#oferta">Oferta</a>
          <a href="#faq">FAQ</a>
        </div>
        <a className="nav-cta" href="#oferta">Acessar</a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Financial Workspace</p>
          <h1>Organize sua vida financeira em um único sistema.</h1>
          <p className="hero-lead">
            Controle receitas, despesas e sua rotina financeira pelo celular ou computador.
          </p>
          <p className="hero-support">
            Mais organização. Mais clareza. Menos informações espalhadas.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#produto">Quero conhecer o ARGO</a>
          </div>
        </div>

        <div className="hero-phone" aria-label="ARGO no celular">
          <img src={mobileScreen} alt="Tela real do ARGO Mobile mostrando a visão do mês" />
        </div>
      </section>

      <section className="problem section-panel">
        <div className="section-heading compact">
          <p className="eyebrow">Problema e solução</p>
          <h2>Sua vida financeira está espalhada?</h2>
          <p>
            Anotações, contas, despesas e informações em lugares diferentes dificultam enxergar o todo.
          </p>
        </div>
        <div className="solution-strip">
          O ARGO centraliza sua organização financeira em um único ambiente.
        </div>
      </section>

      <section className="product-section" id="produto">
        <div className="section-heading centered compact">
          <p className="eyebrow">Mobile e desktop</p>
          <h2>Um sistema para acompanhar sua rotina.</h2>
          <p>
            Use o ARGO no celular durante o dia e tenha uma visão mais ampla no computador.
          </p>
        </div>
        <div className="device-showcase">
          <div className="phone-frame">
            <img
              src={mobileScreen}
              alt="Tela real do ARGO Mobile com informações financeiras"
              loading="lazy"
            />
          </div>
          <div className="desktop-frame">
            <div className="desktop-chrome">
              <span></span><span></span><span></span>
              <small>ARGO Desktop</small>
            </div>
            <img
              src={desktopScreen}
              alt="Tela real do ARGO Desktop preservada em uma janela de aplicativo"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="section-heading centered compact">
          <p className="eyebrow">Benefícios</p>
          <h2>Tudo o que você precisa para se organizar melhor.</h2>
        </div>
        <div className="benefit-grid">
          {benefits.map(([title, text]) => (
            <article className="glass-card" key={title}>
              <div className="module-icon">{title.slice(0, 2).toUpperCase()}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="steps-section" id="como-funciona">
        <div className="section-heading compact">
          <p className="eyebrow">Como funciona</p>
          <h2>Comece em poucos passos.</h2>
        </div>
        <div>
          <div className="steps">
            {steps.map(([title, text], index) => (
              <article className="step" key={title}>
                <span>{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="section-action align-right">
            <a className="button primary" href="#oferta">Quero começar minha organização</a>
          </div>
        </div>
      </section>

      <section className="offer-section" id="oferta">
        <div className="offer-card">
          <div>
            <p className="eyebrow">Primeira versão</p>
            <h2>A primeira versão do ARGO já está disponível.</h2>
            <p>
              Tenha acesso ao sistema e comece a organizar sua vida financeira de forma mais simples e visual.
            </p>
          </div>
          <div className="included-list">
            <ul>
              {included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="button primary wide-button" href="#faq">Quero acessar o ARGO</a>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="section-heading compact">
          <p className="eyebrow">FAQ</p>
          <h2>Perguntas rápidas.</h2>
        </div>
        <div className="faq-list">
          {faq.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <h2>Comece a organizar sua vida financeira.</h2>
        <p>Centralize suas informações e tenha mais clareza para acompanhar seu dinheiro.</p>
        <a className="button primary" href="#oferta">Quero acessar o ARGO</a>
      </section>
    </main>
  );
}

export default App;
