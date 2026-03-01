# BeeFirst Hive Landing

Landing page da solucao Hive para conciliacao bancaria automatica, com foco em captacao de leads para escritorios de contabilidade.

## Visao geral

Este projeto roda em React + Vite e atualmente usa a app em `src/App-new.jsx` como experiencia principal.

Principais capacidades:
- Conteudo em 3 idiomas: `pt`, `en`, `es`
- Tema claro/escuro com toggle em runtime
- Hero, problema, solucao, fluxo, beneficios, showcase e CTA final
- Formulario de contacto com integracoes opcionais (CRM, Calendly, WhatsApp, email)
- Fallback local para leads quando nao existe integracao externa
- Layout responsivo com ajustes para desktop/tablet/mobile

## Stack

- React 19
- Vite 7
- Framer Motion
- Lucide React
- CSS global (`src/styles-new.css`)
- Compressao de build com `vite-plugin-compression2` (gzip e brotli)

## Requisitos

- Node.js 20+
- npm 10+

## Setup rapido

```bash
npm install
npm run dev
```

App em desenvolvimento: `http://localhost:5173`

## Variaveis de ambiente

Crie/edite o ficheiro `.env` na raiz:

```env
VITE_API_URL=http://localhost:8000
VITE_CRM_WEBHOOK_URL=
VITE_CALENDLY_URL=
VITE_CONTACT_EMAIL=
VITE_WHATSAPP_NUMBER=
```

Descricao:
- `VITE_API_URL`: endpoint base para funcionalidades de chat (`src/lib/chatService.ts`)
- `VITE_CRM_WEBHOOK_URL`: webhook para envio de lead para CRM
- `VITE_CALENDLY_URL`: link de agendamento (abre em novo separador)
- `VITE_CONTACT_EMAIL`: fallback para `mailto:`
- `VITE_WHATSAPP_NUMBER`: fallback para WhatsApp (`wa.me`)

## Scripts

```bash
npm run dev      # servidor local
npm run build    # build de producao
npm run preview  # preview local do build
```

## Estrutura relevante

```text
.
|-- src/
|   |-- main.jsx                 # entrypoint (lazy-load de App-new)
|   |-- App-new.jsx              # landing ativa
|   |-- styles-new.css           # estilos principais da landing ativa
|   |-- lib/
|   |   |-- leadCapture.js       # fluxo de submissao de leads
|   |   `-- chatService.ts       # cliente de API para chat
|   |-- App.jsx                  # versao anterior
|   |-- App-redesign.jsx         # variante alternativa
|   `-- components/              # componentes e experimentos adicionais
|-- public/
|   |-- logo_hex.svg
|   `-- landing page - hive contabilidade.pdf
|-- vite.config.js               # chunks, minificacao e compressao
`-- README.md
```

## Fluxo de lead capture

Implementado em `src/lib/leadCapture.js`.

Passos:
1. Normaliza os dados do formulario.
2. Bloqueia spam com campo honeypot (`website`).
3. Valida obrigatorios (`name`, `email`, `company`).
4. Tenta enviar para `VITE_CRM_WEBHOOK_URL` (se configurado).
5. Abre Calendly ou WhatsApp (se configurado).
6. Se nao houver destino externo, tenta email (`mailto:`).
7. Se nada estiver configurado, guarda localmente em `localStorage`.

Storage local:
- Chave: `hive-landing-leads`
- Limite: 50 registos

## Build e performance

Configuracoes importantes em `vite.config.js`:
- `minify: "esbuild"`
- `cssCodeSplit: true`
- `manualChunks` para separar:
  - `vendor-react`
  - `vendor-motion`
  - `vendor-icons`
  - `vendor-3d`
  - `vendor`
- Compressao de assets com gzip e brotli

Output de build:
- Pasta `dist/`
- Ficheiros comprimidos `.gz` e `.br`

## Responsividade

Breakpoints principais usados no CSS:
- `max-width: 1024px`
- `max-width: 900px`
- `max-width: 768px`
- breakpoints adicionais menores para refinamentos finais

## Deploy

Projeto estatico, compativel com:
- Vercel
- Netlify
- Cloudflare Pages
- S3 + CloudFront
- qualquer servidor de ficheiros estaticos

Fluxo:
```bash
npm run build
```
Publicar conteudo de `dist/`.

## Troubleshooting

### Erro no build: `Cannot find package 'vite-plugin-compression2'`

Instale dependencias novamente:
```bash
npm install
```

### Integracoes nao disparam

Verifique valores no `.env` e reinicie o dev server apos alteracoes.

### Lead nao enviado externamente

Sem integracao configurada, o projeto guarda lead no navegador (fallback local).

## Notas

- O entrypoint atual e `src/main.jsx`, que carrega `src/App-new.jsx`.
- Existem ficheiros de variantes antigas no repositorio para referencia, mas nao sao a app principal.

## Licenca

Projeto proprietario BeeFirst.
