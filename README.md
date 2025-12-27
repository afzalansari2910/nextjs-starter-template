# Next.js SaaS Template com TypeScript e Mantine UI

Template fullstack opinado para acelerar o lançamento de **aplicações SaaS com foco em produtividade e escalabilidade real**, usando **Next.js 16 (App Router)**, **React 19**, **TypeScript** e **Mantine UI**. Inclui autenticação completa, integração de e-mail, jobs em background, padrões de logging e configuração robusta de banco de dados.

Este template não é apenas “mais um boilerplate”. Ele encapsula decisões arquiteturais que já funcionaram em projetos reais de SaaS, ajudando você a evitar armadilhas comuns no início de um produto.

> **Licença:** [MIT](LICENSE)

---

## 🚀 Para quem este template é útil

**Perfeito para:**

* Produtos SaaS B2B com autenticação e áreas privadas
* Dashboards internos ou externos
* Aplicações que precisam de um ponto de partida com boas escolhas opinativas

**Não recomendado para:**

* Landing pages simples sem backend
* Sites estáticos sem lógica de usuário
* Projetos que exigem solução de frontend altamente customizada desde o início

---

## 🧠 Decisões arquiteturais explicadas

Aqui estão as escolhas principais e o porquê de elas existirem:

* **App Router nativo do Next.js 16**
  Estrutura moderna de rotas com suporte built-in a layouts aninhados.

* **TypeScript com `strict` ativado**
  Segurança de tipos que reduz bugs silenciosos em código complexo.

* **Mantine v8 como UI library**
  Produtividade alta com componentes acessíveis e tema customizável sem esforço.

* **Organização por features (`src/features`)**
  Separa domínio, lógica e UI para facilitar escala e colaboração em equipe.

* **NextAuth para autenticação completa**
  Inclui suporte a 2FA e recuperação de senha com padrões testados em produção.

* **Prisma + PostgreSQL**
  ORM moderno com migrations e seeds padronizados.

* **Inngest para background jobs**
  Jobs desacoplados do request/response, facilitando integrações como envio de e-mail.

* **Biome para lint/format**
  Ferramenta única para linting e formatação, simplificando regras de estilo.

Essas escolhas são opinativas por design. Se você discorda de alguma, ótimo. Está tudo visível para você modificar.

---

## 📦 O que já vem pronto

* Autenticação com NextAuth
* Estrutura de pastas opinada
* Layouts públicos e protegidos por padrão
* UI pronta com Mantine + tema
* Scripts utilitários de banco
* Pipelines de qualidade (lint, format, typecheck)
* Worker local para jobs com Inngest

---

## ⚙️ Requisitos

Consulte [REQUIREMENTS.md](REQUIREMENTS.md) para detalhes completos. Resumo:

* **Node.js:** 20 ou superior
* **pnpm:** 10 ou superior
* **PostgreSQL:** 16 ou superior

---

## 💡 Como Começar (em ~5 minutos)

```bash
git clone <repo>
cd <repo>
pnpm install
```

1. Copie o `.env.example` para `.env.local`
   Preencha credenciais de banco, chaves de e-mail (Brevo), segredos do NextAuth e integrações opcionais.

2. Prepare o banco:

```bash
pnpm prisma generate
pnpm prisma migrate dev
pnpm prisma seed   # opcional
```

3. Rode localmente:

```bash
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) e veja a magia acontecendo.

---

## 🛠️ Fluxo de Desenvolvimento

| Ação                  | Comando            | O que faz                      |
| --------------------- | ------------------ | ------------------------------ |
| Verificar lint/estilo | `pnpm lint`        | Lint e estilo com Biome        |
| Formatar código       | `pnpm format`      | Formatação automática          |
| Checar tipos          | `pnpm typecheck`   | Verificação de tipos sem build |
| Rodar jobs local      | `pnpm inngest:dev` | Worker Inngest em dev          |

---

## 📈 Build e Produção

```bash
pnpm build
pnpm start
```

**Antes de deploy:** garanta que todas as variáveis de ambiente estejam configuradas e que as migrations já foram aplicadas (`pnpm prisma migrate deploy`).

---

## 🧱 Estrutura de Pastas (visão rápida)

```
src/
 ├─ app/           # Rotas, handlers, layouts (App Router)
 ├─ components/    # UI reutilizável
 ├─ features/      # Domínio e lógica por feature
 ├─ lib/           # Utils, integrations, Prisma Client, NextAuth
 └─ providers/     # Providers globais (ex. Mantine)
prisma/            # Schema, migrations e seeds
```

---

## 🗺️ Roadmap Público

O arquivo [TODO.md](TODO.md) contém uma lista priorizada de melhorias e integrações futuras — todas visíveis para quem quiser contribuir.

**Principais itens no radar:**

* Testes automatizados (unit + e2e)
* Suporte a roles/permissions mais granulares
* Templates de e-mail reutilizáveis
* Deploy automatizado com pipelines prontos

---

## 📬 Suporte e Contato

Se precisar de ajuda, quiser customizações ou dar feedback:

* ✉️ [agencia.foliveira@gmail.com](mailto:agencia.foliveira@gmail.com)
* 🐙 Abra uma issue no GitHub
* 🔗 Conecte-se no LinkedIn: [https://www.linkedin.com/in/felipe-de-oliveira-souza-a558a814b/](https://www.linkedin.com/in/felipe-de-oliveira-souza-a558a814b/)
