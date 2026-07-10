import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './App.css';

console.info('[ARGO Landing] main started');

const rootElement = document.getElementById('root');

function RuntimeErrorMessage({ error }) {
  return (
    <main className="runtime-error" role="alert">
      <h1>Não foi possível carregar a Landing Page ARGO.</h1>
      <p>Atualize a página. Se o problema continuar, verifique o console do navegador.</p>
      <pre>{error?.message || 'Erro desconhecido no carregamento.'}</pre>
    </main>
  );
}

class LandingErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('[ARGO Landing] render error', error, info);
  }

  render() {
    if (this.state.error) {
      return <RuntimeErrorMessage error={this.state.error} />;
    }

    return this.props.children;
  }
}

if (!rootElement) {
  console.error('[ARGO Landing] root element not found');
  document.body.innerHTML = '<main class="runtime-error"><h1>Elemento root não encontrado.</h1></main>';
} else {
  createRoot(rootElement).render(
    <React.StrictMode>
      <LandingErrorBoundary>
        <App />
      </LandingErrorBoundary>
    </React.StrictMode>,
  );
}
