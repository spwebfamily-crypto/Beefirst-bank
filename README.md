# BeeFirst Hive - Conciliação Bancária Automática

Landing page moderna e responsiva para a solução Hive de conciliação bancária automática, desenvolvida com React e Vite.

## 📋 Sobre o Projeto

A Hive é uma plataforma de conciliação bancária automática que utiliza inteligência artificial para cruzar automaticamente lançamentos contabilísticos com movimentos de extratos bancários, reduzindo drasticamente o tempo operacional e minimizando erros manuais.

Esta landing page foi desenvolvida para apresentar a solução de forma clara e objetiva, focando na conversão de visitantes em leads qualificados.

## ✨ Funcionalidades

- **Multi-idioma**: Suporte completo para Português, Inglês e Espanhol
- **Tema Claro/Escuro**: Alternância entre modos com persistência local
- **Design Responsivo**: Experiência otimizada para desktop, tablet e mobile
- **Acessibilidade**: Implementação de boas práticas WCAG
- **Animações Suaves**: Efeitos de reveal e transições fluidas
- **Formulário de Captura**: Sistema de lead generation integrado
- **Navegação Inteligente**: Menu fixo com indicador de progresso de scroll
- **Integrações**: Suporte para Calendly, WhatsApp e webhooks de CRM

## 🎨 Características de Design

- Gradientes ambientes animados
- Efeito de grão (grain) para textura visual
- Cards flutuantes com métricas em tempo real
- Sistema de grid responsivo
- Tipografia hierárquica e legível
- Paleta de cores adaptativa por tema
- Animações sequenciais nos cards de processo
- Efeitos de hover interativos e suaves
- Números pulsantes com anéis expansivos
- Setas com animação de fluxo contínuo

## 🛠️ Tecnologias Utilizadas

- **React 19.2.4**: Biblioteca JavaScript para interfaces
- **Vite 7.3.1**: Build tool e dev server ultrarrápido
- **CSS Modules**: Estilização com escopo local
- **LocalStorage**: Persistência de preferências do usuário

## 📁 Estrutura do Projeto

```
Beefirst-bank/
├── src/
│   ├── assets/
│   │   └── dashboard.svg          # Imagem do dashboard
│   ├── App.jsx                    # Componente principal
│   ├── main.jsx                   # Entry point
│   ├── styles.css                 # Estilos globais
│   └── uiCopy.js                  # Textos e traduções
├── .env.example                   # Exemplo de variáveis de ambiente
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:

```env
# URL do webhook para envio de leads ao CRM
VITE_CRM_WEBHOOK_URL=

# URL do Calendly para agendamento
VITE_CALENDLY_URL=

# Número do WhatsApp (apenas dígitos)
VITE_WHATSAPP_NUMBER=
```

## 🚀 Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview
```

## 🌐 Seções da Landing Page

1. **Hero**: Apresentação principal com proposta de valor
2. **Problema**: Identificação das dores do público-alvo
3. **Solução**: Apresentação da Hive e seus diferenciais
4. **Como Funciona**: Fluxo de trabalho em 3 etapas
5. **Benefícios**: Vantagens para escritórios contábeis
6. **Porque Hive**: Posicionamento da plataforma
7. **Demo**: Formulário de captura de leads

## 📱 Responsividade

A landing page é totalmente responsiva com breakpoints otimizados:

- **Desktop**: > 940px
- **Tablet**: 600px - 940px
- **Mobile**: < 600px

Recursos mobile específicos:
- Menu drawer lateral
- Navegação rápida inferior
- CTA fixo na parte inferior
- Formulário otimizado para toque

## ♿ Acessibilidade

Implementações de acessibilidade incluem:

- Navegação por teclado completa
- Atributos ARIA apropriados
- Skip links para conteúdo principal
- Contraste adequado de cores
- Foco visível em elementos interativos
- Suporte a leitores de tela
- Respeito a `prefers-reduced-motion`
- Animações otimizadas para performance

## 🎯 Integrações

### Calendly
Configure `VITE_CALENDLY_URL` para redirecionar leads automaticamente para agendamento.

### WhatsApp
Configure `VITE_WHATSAPP_NUMBER` para permitir contato direto via WhatsApp.

### CRM Webhook
Configure `VITE_CRM_WEBHOOK_URL` para enviar dados do formulário para seu CRM via POST request.

Payload enviado:
```json
{
  "source": "hive-landing",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "name": "Nome do Lead",
  "email": "email@exemplo.com",
  "company": "Empresa",
  "profile": "escritorio",
  "volume": "medio",
  "goal": "Objetivo principal"
}
```

## ✨ Animações e Interações

### Cards de Processo
- Entrada sequencial com efeito slide-up
- Números com animação de pulso contínua
- Anéis expansivos nos badges numéricos
- Hover com elevação e brilho deslizante
- Transições suaves com cubic-bezier

### Setas de Fluxo
- Animação de fluxo horizontal contínuo
- Pulsação sincronizada entre elementos
- Delays coordenados para efeito de onda

### Performance
- Animações otimizadas com GPU acceleration
- Uso de `transform` e `opacity` para melhor performance
- Respeito às preferências de movimento reduzido do usuário

## 🎨 Personalização

### Cores e Temas

Os temas são controlados via CSS custom properties em `styles.css`. Principais variáveis:

```css
--color-bg: /* Cor de fundo */
--color-text: /* Cor do texto */
--color-primary: /* Cor primária */
--color-accent: /* Cor de destaque */
```

### Textos e Traduções

Todos os textos estão centralizados em `src/uiCopy.js`, facilitando:
- Edição de conteúdo
- Adição de novos idiomas
- Manutenção de consistência

## 📊 Métricas e Analytics

A landing page está preparada para integração com ferramentas de analytics. Eventos importantes para rastrear:

- Visualizações de seção
- Cliques em CTAs
- Submissões de formulário
- Mudanças de idioma/tema
- Tempo de permanência

## 🔒 Segurança

- Validação de formulários no frontend
- Sanitização de dados antes do envio
- Uso de HTTPS recomendado em produção
- Variáveis de ambiente para dados sensíveis
- Headers de segurança configuráveis no servidor

## 🚀 Deploy

O projeto pode ser deployado em qualquer plataforma que suporte sites estáticos:

- **Vercel**: Deploy automático via Git
- **Netlify**: Configuração zero
- **AWS S3 + CloudFront**: Para maior controle
- **GitHub Pages**: Opção gratuita

Após o build (`npm run build`), os arquivos estarão na pasta `dist/`.

## 📝 Licença

© BeeFirst • Hive - Todos os direitos reservados.

## 🤝 Contribuição

Este é um projeto proprietário da BeeFirst. Para sugestões ou melhorias, entre em contato com a equipe de desenvolvimento.

## 📞 Suporte

Para dúvidas sobre a implementação ou uso da landing page, consulte a documentação interna ou entre em contato com o time técnico da BeeFirst.

---

**Desenvolvido com ❤️ pela equipe BeeFirst**

## Atualizacao de performance (mobile-first)

As ultimas mudancas focam em reduzir custo de renderizacao no mobile, mantendo o desktop intacto.

### Build e bundling
- Code splitting manual no Vite (`vendor-react`, `vendor-motion`, `vendor-icons`, `vendor`, `vendor-3d`).
- Minificacao com `esbuild`.
- Compressao de assets com `vite-plugin-compression2` (gzip + brotli).

### Carregamento inicial
- `App-new.jsx` carregado com `React.lazy` + `Suspense` em `main.jsx`.
- Remocao de `StrictMode` no bootstrap para evitar double-render em desenvolvimento.
- Fonts Google com carregamento nao bloqueante (`media="print"` + `onload`).

### Otimizacoes de runtime para mobile
- Remocao de hooks pesados de scroll (`useScroll/useTransform/useSpring`) em favor de calculo mais leve.
- Scroll listener com throttle via `requestAnimationFrame`.
- `IntersectionObserver` para renderizacao tardia da secao de dashboard.
- Modo `lite motion` para mobile e `prefers-reduced-motion`.

### CSS focado em mobile
- Reducao de efeitos caros (blur/backdrop/glow/orbs) apenas em breakpoints mobile.
- Menos animacoes decorativas em `max-width: 768px`.
- Placeholder leve para a secao de dashboard antes da intersecao.

### Como validar
```bash
npm run build
```

O build gera arquivos comprimidos `.gz` e `.br` no `dist/`.
