import brandWide from './assets/argo-brand-wide.png';
import logoSquare from './assets/argo-logo-square.png';
import mobileScreen from './assets/argo-mobile-screen.png';

const problemCards = [
  'Receitas e despesas sem controle',
  'Informações em lugares diferentes',
  'Falta de visão do todo',
];

const benefits = [
  'Visão geral do mês',
  'Controle de receitas e despesas',
  'Parcelas e vencimentos organizados',
  'Patrimônio em construção',
  'Relatórios e leitura rápida do cenário',
  'Acesso local com privacidade e simplicidade',
];

const controls = [
  ['Início', 'Resumo mensal, leitura rápida e indicadores essenciais.'],
  ['Orçamento', 'Entradas, saídas e categorias no mesmo fluxo.'],
  ['Parcelas e vencimentos', 'Compromissos futuros organizados por mês.'],
  ['Patrimônio', 'Construção do cenário financeiro com mais contexto.'],
  ['Relatórios', 'Leitura visual para entender o que mudou.'],
  ['Organização local', 'Dados salvos no dispositivo escolhido.'],
];

const faq = [
  [
    'O ARGO funciona no celular e no computador?',
    'Sim. O ARGO tem uma versão Mobile e uma versão Desktop, para você escolher a experiência que combina melhor com sua rotina.',
  ],
  [
    'Os dados sincronizam entre celular e computador?',
    'Não nesta versão. Mobile e Desktop funcionam localmente e não sincronizam dados entre si.',
  ],
  [
    'Preciso instalar alguma coisa?',
    'A versão Mobile abre no navegador. A versão Desktop é pensada para uso no computador com a experiência própria do ARGO Desktop.',
  ],
  [
    'Meus dados ficam onde?',
    'Os dados ficam salvos localmente no dispositivo escolhido, sem transformar o ARGO em banco, planilha ou serviço de sincronização.',
  ],
  [
    'Posso redefinir minha senha?',
    'Sim. A senha é local, e a redefinição segue o fluxo da versão que você estiver usando no dispositivo escolhido.',
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
          <a href="#versoes">Versões</a>
          <a href="#faq">FAQ</a>
        </div>
        <a className="nav-cta" href="#versoes">Acessar</a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Financial Workspace</p>
          <h1>Organize tudo. Entenda o todo. Decida melhor.</h1>
          <p className="hero-lead">
            O ARGO centraliza sua vida financeira em um único workspace inteligente,
            com uma experiência pensada para celular ou computador.
          </p>
          <p className="hero-support">
            Controle receitas, despesas, patrimônio, parcelas e metas em um ambiente
            visual, organizado e fácil de acompanhar.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#versoes">Quero acessar o ARGO</a>
            <a className="button secondary" href="#como-funciona">Ver como funciona</a>
          </div>
          <p className="microcopy">Disponível em versão Mobile e versão Desktop.</p>
        </div>

        <div className="product-stage" aria-label="Mockups do ARGO Mobile e Desktop">
          <div className="desktop-mockup">
            <div className="desktop-chrome">
              <span></span><span></span><span></span>
            </div>
            <div className="desktop-screen">
              <aside>
                <img src={logoSquare} alt="" />
                <b>ARGO</b>
                <small>Workspace</small>
              </aside>
              <section>
                <div className="screen-head">
                  <span>Visão do mês</span>
                  <strong>Julho de 2026</strong>
                </div>
                <div className="metric-row">
                  <div><small>Disponível</small><b>R$ 0,00</b></div>
                  <div><small>Entradas</small><b>R$ 0,00</b></div>
                  <div><small>Saídas</small><b>R$ 0,00</b></div>
                </div>
                <div className="chart-card">
                  <span>Fluxo do mês</span>
                  <div className="chart-line"></div>
                </div>
              </section>
            </div>
          </div>
          <div className="phone-mockup">
            <img src={mobileScreen} alt="Tela do ARGO Mobile mostrando visão do mês" />
          </div>
        </div>
      </section>

      <section className="problem section-panel">
        <div className="section-heading wide">
          <p className="eyebrow">O problema</p>
          <h2>Sua vida financeira não está desorganizada porque você não se importa. Ela está desorganizada porque tudo está espalhado.</h2>
        </div>
        <div className="three-grid">
          {problemCards.map((item, index) => (
            <article className="dark-card" key={item}>
              <span className="card-index">0{index + 1}</span>
              <h3>{item}</h3>
              <p>Quando os dados não conversam, a decisão fica lenta e o mês perde nitidez.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section" id="produto">
        <div className="section-heading">
          <p className="eyebrow">O que é o ARGO</p>
          <h2>O ARGO foi criado para transformar informações financeiras em decisões mais inteligentes.</h2>
        </div>
        <div className="benefit-list">
          {benefits.map((item) => (
            <div className="benefit-item" key={item}>
              <span></span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="controls-section">
        <div className="section-heading centered">
          <p className="eyebrow">Tudo o que você controla</p>
          <h2>Um workspace para acompanhar o dinheiro com contexto, rotina e clareza.</h2>
        </div>
        <div className="control-grid">
          {controls.map(([title, text]) => (
            <article className="glass-card" key={title}>
              <div className="module-icon">{title.slice(0, 2).toUpperCase()}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="versions-section" id="versoes">
        <div className="section-heading centered">
          <p className="eyebrow">Escolha sua versão</p>
          <h2>Use o ARGO no dispositivo que faz sentido para a sua rotina.</h2>
        </div>
        <div className="version-grid">
          <article className="version-card">
            <img src={logoSquare} alt="" />
            <h3>ARGO Mobile</h3>
            <p>Experiência para acompanhar o mês pelo celular, com navegação direta e leitura rápida.</p>
            <ul>
              <li>Acesso pelo navegador mobile</li>
              <li>Rotina financeira na palma da mão</li>
              <li>Ideal para lançamentos e consultas rápidas</li>
            </ul>
          </article>
          <article className="version-card featured">
            <img src={logoSquare} alt="" />
            <h3>ARGO Desktop</h3>
            <p>Experiência ampla para organizar, revisar e interpretar seu financeiro com mais respiro.</p>
            <ul>
              <li>Layout expandido para computador</li>
              <li>Boa leitura de relatórios e patrimônio</li>
              <li>Ideal para revisão semanal e planejamento</li>
            </ul>
          </article>
        </div>
        <div className="notice">
          Nesta versão, o ARGO funciona localmente no dispositivo escolhido.
          As versões Mobile e Desktop não sincronizam dados entre si.
        </div>
      </section>

      <section className="steps-section" id="como-funciona">
        <div className="section-heading">
          <p className="eyebrow">Como funciona</p>
          <h2>Comece sem complexidade.</h2>
        </div>
        <div className="steps">
          {['Escolha sua versão', 'Acesse e crie sua senha local', 'Comece a organizar seu financeiro'].map((step, index) => (
            <div className="step" key={step}>
              <span>{index + 1}</span>
              <h3>{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="transformation">
        <img src={brandWide} alt="" />
        <div>
          <p className="eyebrow">Clareza para decidir</p>
          <h2>O ARGO não serve apenas para registrar números. Ele serve para te dar clareza.</h2>
          <p>
            A proposta é transformar dados soltos em uma leitura organizada do seu mês,
            para que cada decisão tenha mais contexto e menos improviso.
          </p>
        </div>
      </section>

      <section className="audience-section">
        <div className="section-heading centered">
          <p className="eyebrow">Para quem é</p>
          <h2>Feito para quem quer um sistema financeiro próprio, simples e bem resolvido.</h2>
        </div>
        <div className="three-grid">
          {[
            'Para quem quer sair do improviso',
            'Para quem gosta de visualizar o mês com clareza',
            'Para quem quer um sistema próprio, simples e bem resolvido',
          ].map((item) => (
            <article className="dark-card compact" key={item}>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Perguntas importantes antes de começar.</h2>
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
        <h2>Se você quer mais clareza financeira, o próximo passo é começar a organizar tudo no lugar certo.</h2>
        <a className="button primary" href="#versoes">Quero acessar o ARGO</a>
        <p>Escolha sua versão e comece a usar no dispositivo que faz sentido para sua rotina.</p>
      </section>
    </main>
  );
}

export default App;
