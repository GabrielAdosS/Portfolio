# 💻 Portfolio — Gabriel Antonio dos Santos

Desenvolvi meu portfólio pessoal utilizando React e TypeScript, com foco total em performance, animações fluidas e uma experiência de usuário limpa. No projeto, integrei a API do GitHub para listar meus repositórios de forma dinâmica e configurei um sistema seguro de envio de e-mails para facilitar o contato direto comigo. É o reflexo das tecnologias que domino e de como organizo meu fluxo de desenvolvimento!

**Link:** https://gabriel-antonio.vercel.app/

---

## ✨ Funcionalidades

- **Header fixo** com navegação por âncoras (Sobre, Tecnologias, Projetos, Contato) e efeito de *blur* ao rolar a página.
- **Banner de apresentação** com:
  - Animações de entrada usando `framer-motion`.
  - Modal de contato com formulário (nome, e-mail e mensagem) que envia dados para uma API própria via Resend.
  - Botão de download de currículo (PDF) que dispara notificação por e-mail a cada download.
  - Cópia rápida do e-mail para a área de transferência, com toast de feedback.
  - Links para GitHub e LinkedIn.
- **Seção de Tecnologias** com filtro interativo por categoria (Frontend, Mobile, Backend, Banco de Dados, DevOps & Cloud), exibindo as stacks correspondentes com cores e transições diferentes por categoria.
- **Seção de Projetos**, dividida em:
  - **Projetos Próprios** — buscados dinamicamente da API pública do GitHub (`/users/GabrielAdosS/repos`), ordenados por data do último push.
  - **Projetos de Clientes (Freelance)** — projetos marcados com o tópico `freelance`, exibindo link do repositório e do site publicado.
  - Cada card exibe tags de stack (frontend, backend, mobile, devops, banco de dados) com cores próprias, tópicos do repositório e ano do último commit.
- **Footer** com dados de contato, navegação rápida e cópia de e-mail.
- **Toasts de feedback** (sucesso/erro) reutilizados em diferentes componentes.

---

## 🛠️ Tecnologias utilizadas

### Frontend
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite 8](https://vitejs.dev/) — build tool e dev server
- [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- [Framer Motion](https://www.framer.com/motion/) — animações
- [Lucide React](https://lucide.dev/) e [React Icons](https://react-icons.github.io/react-icons/) — ícones

### Backend / API (Serverless)
- [Vercel Functions](https://vercel.com/docs/functions) (`/api`) — endpoints serverless em TypeScript
- [Resend](https://resend.com/) — envio de e-mails transacionais
- [isomorphic-dompurify](https://www.npmjs.com/package/isomorphic-dompurify) — sanitização de dados do formulário de contato contra XSS

### Ferramentas de desenvolvimento
- [oxlint](https://oxc.rs/docs/guide/usage/linter.html) — linting
- [dotenv](https://www.npmjs.com/package/dotenv) — variáveis de ambiente

---

## 📁 Estrutura do projeto

```
Portfolio/
├── api/
│   ├── cv-download.ts     # Endpoint que notifica por e-mail quando o CV é baixado
│   └── send-email.ts      # Endpoint do formulário de contato (envio via Resend)
├── public/
│   ├── code-xml.svg       # Favicon
│   └── Gabriel Antonio dos Santos.pdf   # Currículo disponível para download
├── src/
│   ├── assets/
│   │   └── me.png         # Foto de perfil
│   ├── components/
│   │   ├── Header.tsx     # Navbar fixa com âncoras
│   │   ├── Banner.tsx     # Seção "Sobre" + modal de contato
│   │   ├── TechSkills.tsx # Seção de tecnologias com filtro por categoria
│   │   ├── Projects.tsx   # Listagem de projetos (GitHub API) + freelas
│   │   └── Footer.tsx     # Rodapé com contato e navegação
│   ├── App.tsx             # Composição das seções da página
│   ├── main.tsx            # Ponto de entrada React
│   └── index.css           # Tema Tailwind (cores customizadas) e animações
├── index.html
├── package.json
├── tsconfig.app.json
├── .oxlintrc.json
└── .env                     # Variáveis de ambiente (não versionado)
```

---

## 🚀 Como rodar o projeto localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) 18+ instalado
- Uma conta na [Resend](https://resend.com/) para obter uma API Key (necessária para o formulário de contato e o aviso de download do currículo)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/GabrielAdosS/Portfolio.git
cd Portfolio

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
# Crie um arquivo .env na raiz com:
RESEND_API_KEY=sua_chave_aqui

# 4. Rode o servidor de desenvolvimento
npm run dev
```

O projeto ficará disponível em `http://localhost:5173` (porta padrão do Vite).

> ⚠️ **Atenção:** os endpoints em `/api` (envio de e-mail e notificação de download de CV) são funções serverless pensadas para rodar na Vercel. Ao rodar apenas com `vite dev`, essas rotas podem não funcionar localmente sem o [Vercel CLI](https://vercel.com/docs/cli) (`vercel dev`).

### Scripts disponíveis

| Comando           | Descrição                                        |
|-------------------|---------------------------------------------------|
| `npm run dev`     | Inicia o servidor de desenvolvimento (Vite)       |
| `npm run build`   | Compila o TypeScript e gera o build de produção   |
| `npm run preview` | Serve o build de produção localmente              |
| `npm run lint`    | Executa o linter (oxlint)                          |

---

## 🎨 Identidade visual

O tema é definido em `src/index.css` através de variáveis do Tailwind (`@theme`):

| Variável                  | Cor                          |
|---------------------------|-------------------------------|
| `--color-background`      | `#0a0b0f` (fundo escuro)       |
| `--color-card`             | `#13141a`                     |
| `--color-secondary`       | `#1c1d24`                     |
| `--color-foreground`      | `#e8e8e2`                     |
| `--color-muted-text`      | `#7a7a72`                     |
| `--color-accent`          | `#00c896` (verde destaque)     |
| `--color-border-custom`   | `rgba(232, 232, 226, 0.08)`    |

---

## 📬 Contato

- **GitHub:** [github.com/GabrielAdosS](https://github.com/GabrielAdosS)
- **LinkedIn:** [linkedin.com/in/gabriel-antonio-742869285](https://www.linkedin.com/in/gabriel-antonio-742869285/)
- **E-mail:** gabriel.17.set.2005@gmail.com

---

## 📄 Licença

Este projeto está sob a licença **MIT** — veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

Copyright (c) 2026 Gabriel Antonio
