import React from 'react';
import brandWide from './assets/argo-brand-wide.png';
import desktopScreen from './assets/argo-desktop-real.png';
import logoSquare from './assets/argo-logo-square.png';
import mobileScreen from './assets/argo-mobile-screen.png';

const problemItems = [
  'Anotações no celular que ficam difíceis de acompanhar',
  'Valores guardados na memória e esquecidos com o tempo',
  'Informações em planilhas diferentes',
  'Contas e despesas sem uma visão centralizada',
  'Dificuldade para entender para onde o dinheiro está indo',
];

const benefits = [
  [
    'Controle da sua rotina financeira',
    'Acompanhe o que entra e o que sai com informações organizadas e fáceis de consultar.',
  ],
  [
    'Tudo centralizado',
    'Reduza a dependência de anotações, planilhas separadas e informações espalhadas.',
  ],
  [
    'Mais clareza sobre seu dinheiro',
    'Visualize sua situação financeira de forma mais simples e compreensível.',
  ],
  [
    'Organização no celular e no computador',
    'Acesse o ARGO no dispositivo que fizer mais sentido para cada momento da sua rotina.',
  ],
  [
    'Decisões mais conscientes',
    'Use informações organizadas para entender seus hábitos e planejar os próximos passos.',
  ],
  [
    'Experiência simples e visual',
    'Tenha um sistema desenvolvido para facilitar o acompanhamento financeiro, sem criar mais confusão.',
  ],
];

const steps = [
  [
    'Acesse o ARGO',
    'Entre no sistema pelo celular ou pelo computador.',
  ],
  [
    'Organize suas informações',
    'Registre e centralize os dados importantes da sua rotina financeira.',
  ],
  [
    'Acompanhe sua evolução',
    'Consulte suas informações e tenha mais clareza sobre sua realidade financeira.',
  ],
];

const audience = [
  'Quem quer entender melhor para onde o dinheiro está indo',
  'Quem está cansado de informações espalhadas',
  'Quem deseja organizar receitas e despesas',
  'Quem prefere uma solução visual e prática',
  'Quem quer acessar informações pelo celular e pelo computador',
  'Quem busca mais controle antes de tomar decisões financeiras',
];

const included = [
  'Acesso à primeira versão do sistema ARGO',
  'Organização de receitas',
  'Organização de despesas',
  'Painel de acompanhamento financeiro',
  'Visualização de informações financeiras',
  'Experiência otimizada para celular',
  'Experiência para desktop',
  'Possibilidade de utilização como aplicativo',
];

const faq = [
  [
    'O ARGO funciona no celular?',
    'Sim. A interface foi desenvolvida para oferecer uma boa experiência no celular e também pode ser utilizada no computador.',
  ],
  [
    'Preciso instalar algum programa?',
    'A versão Mobile pode ser acessada pelo navegador e utilizada como aplicativo quando adicionada à tela inicial. A versão Desktop é pensada para uso no computador.',
  ],
  [
    'O ARGO é uma planilha?',
    'Não. O ARGO é um sistema visual de organização financeira desenvolvido para centralizar informações em um único ambiente.',
  ],
  [
    'Preciso entender de finanças para utilizar?',
    'Não. A proposta do ARGO é tornar a organização financeira mais simples, visual e acessível.',
  ],
  [
    'O sistema possui integração automática com bancos?',
    'Não nesta primeira versão. Os dados são organizados manualmente pelo usuário, com foco em controle, clareza e privacidade.',
  ],
  [
    'Meus dados ficam disponíveis em diferentes dispositivos?',
    'Nesta versão, Mobile e Desktop funcionam como experiências locais e não sincronizam dados automaticamente entre dispositivos.',
  ],
  [
    'Como recebo o acesso depois da compra?',
    'O acesso é liberado após a confirmação da compra pela plataforma de pagamento utilizada na oferta.',
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
          <h1>Organize toda a sua vida financeira em um único sistema.</h1>
          <p className="hero-lead">
            Centralize receitas, despesas e informações importantes da sua vida financeira
            em uma experiência simples, visual e desenvolvida para funcionar no celular e no computador.
          </p>
          <p className="hero-support">
            Menos informações espalhadas. Mais clareza para acompanhar seu dinheiro e tomar decisões melhores.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#oferta">Quero organizar minhas finanças</a>
            <a className="button secondary" href="#produto">Conhecer o ARGO</a>
          </div>
          <p className="microcopy">Primeira versão do ARGO para organização financeira no celular e no desktop.</p>
        </div>

        <div className="product-stage" aria-label="ARGO no celular e no computador">
          <div className="desktop-frame hero-desktop">
            <div className="desktop-chrome">
              <span></span><span></span><span></span>
              <small>ARGO Desktop</small>
            </div>
            <img
              src={desktopScreen}
              alt="Tela real do ARGO Desktop mostrando o painel inicial de organização financeira"
            />
          </div>
          <div className="phone-mockup">
            <img src={mobileScreen} alt="Tela do ARGO Mobile mostrando visão do mês" />
          </div>
        </div>
      </section>

      <section className="problem section-panel">
        <div className="section-heading wide">
          <p className="eyebrow">O problema</p>
          <h2>Sua vida financeira está espalhada em vários lugares?</h2>
          <p>
            O problema não é apenas registrar informações. É não conseguir enxergar sua vida financeira como um todo.
          </p>
        </div>
        <div className="problem-grid">
          {problemItems.map((item) => (
            <article className="problem-pill" key={item}>
              <span></span>
              <p>{item}</p>
            </article>
          ))}
        </div>
        <div className="solution-strip">
          O ARGO reúne tudo em um único sistema para que você consiga organizar,
          acompanhar e entender melhor sua realidade financeira.
        </div>
      </section>

      <section className="product-section" id="produto">
        <div className="section-heading centered">
          <p className="eyebrow">Produto</p>
          <h2>Um sistema que acompanha sua rotina.</h2>
          <p>
            Utilize o ARGO no celular para registrar e consultar informações durante o dia.
            No computador, tenha uma visualização mais ampla para analisar e organizar sua vida financeira com mais conforto.
          </p>
        </div>
        <div className="dual-product">
          <div className="device-card mobile-device">
            <span>Celular</span>
            <img
              src={mobileScreen}
              alt="Tela do ARGO Mobile com indicadores financeiros do mês"
              loading="lazy"
            />
          </div>
          <div className="device-card desktop-device">
            <span>Desktop</span>
            <div className="desktop-frame">
              <div className="desktop-chrome">
                <span></span><span></span><span></span>
                <small>ARGO Desktop</small>
              </div>
              <img
                src={desktopScreen}
                alt="Captura real do ARGO Desktop em tela ampla"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="controls-section">
        <div className="section-heading centered">
          <p className="eyebrow">Benefícios</p>
          <h2>Mais organização, controle e clareza para acompanhar seu dinheiro.</h2>
        </div>
        <div className="control-grid">
          {benefits.map(([title, text]) => (
            <article className="glass-card" key={title}>
              <div className="module-icon">{title.slice(0, 2).toUpperCase()}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="section-action">
          <a className="button primary" href="#oferta">Quero organizar minhas finanças</a>
        </div>
      </section>

      <section className="steps-section" id="como-funciona">
        <div className="section-heading">
          <p className="eyebrow">Como funciona</p>
          <h2>Comece a organizar sua vida financeira em poucos passos.</h2>
        </div>
        <div className="steps">
          {steps.map(([title, text], index) => (
            <div className="step" key={title}>
              <span>{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className="section-action align-right">
          <a className="button primary" href="#oferta">Quero começar minha organização</a>
        </div>
      </section>

      <section className="audience-section">
        <div className="section-heading centered">
          <p className="eyebrow">Para quem é</p>
          <h2>O ARGO foi criado para quem busca mais organização financeira.</h2>
        </div>
        <div className="audience-grid">
          {audience.map((item) => (
            <article className="check-card" key={item}>
              <span></span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="transformation">
        <img
          src={brandWide}
          alt="Marca ARGO Financial Workspace"
          loading="lazy"
        />
        <div>
          <p className="eyebrow">Onde você estiver</p>
          <h2>Sua organização financeira onde você estiver.</h2>
          <p>
            Utilize o celular para acompanhar sua rotina e o computador para ter uma visão mais ampla.
            O ARGO foi desenvolvido para oferecer uma experiência consistente nos dois formatos.
          </p>
          <a className="button secondary" href="#produto">Conhecer o ARGO</a>
        </div>
      </section>

      <section className="offer-section" id="oferta">
        <div className="offer-card">
          <div>
            <p className="eyebrow">Condição especial de lançamento</p>
            <h2>Acesso à primeira versão do ARGO</h2>
            <p>
              Uma oferta principal para começar a centralizar sua organização financeira
              em uma experiência simples, visual e prática.
            </p>
          </div>
          <div className="included-list">
            <h3>O que você recebe ao adquirir o ARGO</h3>
            <ul>
              {included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="button primary wide-button" href="#garantia">Quero organizar minhas finanças</a>
          </div>
        </div>
      </section>

      <section className="guarantee-section" id="garantia">
        <div className="guarantee-card">
          <p className="eyebrow">Garantia e segurança</p>
          <h2>Você pode conhecer o ARGO com tranquilidade.</h2>
          <p>
            Após a compra, você terá sete dias para avaliar o sistema. Caso entenda que ele não atende às suas
            necessidades, poderá solicitar o reembolso dentro do período de garantia.
          </p>
          <div className="trust-row">
            <span>Pagamento seguro</span>
            <span>Acesso após confirmação</span>
            <span>Primeira versão do produto</span>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Perguntas frequentes sobre o ARGO.</h2>
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
        <h2>Sua vida financeira não precisa continuar desorganizada.</h2>
        <p>
          Centralize suas informações, acompanhe sua rotina e tenha mais clareza para tomar decisões melhores com o ARGO.
        </p>
        <a className="button primary" href="#oferta">Quero organizar minhas finanças</a>
      </section>
    </main>
  );
}

export default App;
