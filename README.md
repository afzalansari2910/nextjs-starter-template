# Next.js Template com TypeScript e Mantine UI

Este repositório contém a aplicação web baseada em Next.js (App Router), TypeScript e Mantine UI. Abaixo estão apenas as instruções básicas para instalar, configurar e executar o projeto.

## Pré-requisitos

- Node.js 20+
- pnpm (gerenciador de pacotes)
- (Opcional) PostgreSQL 16+ se utilizar Prisma localmente

## Instalação

```bash
# Instale as dependências
pnpm install
```

## Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto e defina as variáveis necessárias para sua execução (ex.: credenciais de banco, chaves de autenticação, integrações). Se existir um `.env.example`, use-o como base:

```bash
cp .env.example .env.local
# Edite .env.local com seus valores
```

## Banco de Dados (Prisma)

Se o projeto utilizar Prisma, gere os artefatos e aplique o schema no banco:

```bash
# Gerar Prisma Client
npx prisma generate

# Criar/atualizar schema no banco
npx prisma db push

# (Opcional) Executar migrações em desenvolvimento
npx prisma migrate dev

# (Opcional) Executar seed
pnpm seed
```

## Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
pnpm dev
```

A aplicação ficará disponível em http://localhost:3000 (porta padrão do Next.js).

## Build e Produção

```bash
# Build de produção
pnpm build

# Iniciar servidor em produção
pnpm start
```

## Scripts úteis

```bash
pnpm lint       # Verificações de código (Biome)
pnpm format     # Formatação (Biome)
pnpm typecheck  # Checagem de tipos (TypeScript)
```

## Estrutura (resumo)

- src/app/ — rotas e layouts (App Router)
- src/components/ — componentes compartilhados
- src/features/ — módulos de domínio (UI, lógica, ações)
- src/lib/ — integrações e utilitários (inclui Prisma, autenticação, etc.)
- prisma/ — schema e migrações

---

Para detalhes específicos de funcionalidades ou integrações, consulte os arquivos no código-fonte. Este README foi simplificado para conter apenas instruções básicas do projeto.
