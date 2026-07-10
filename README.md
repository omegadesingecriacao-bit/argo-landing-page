# ARGO Landing Page

Landing page oficial do ARGO Financial Workspace, criada em projeto separado com React + Vite.

## Rodar localmente

Opção mais simples no Windows:

```bash
abrir-landing-local.bat
```

Esse arquivo serve a pasta `dist` em `http://127.0.0.1:4173/` e abre o navegador.

Opção de desenvolvimento:

```bash
pnpm install
pnpm run dev
```

Depois abra o endereço mostrado pelo Vite no navegador.

## Build

```bash
pnpm run build
```

## Netlify via GitHub

O projeto ja inclui `netlify.toml`.

Configuracao esperada:

- Build command: `pnpm run build`
- Publish directory: `dist`
- Node: `20`
