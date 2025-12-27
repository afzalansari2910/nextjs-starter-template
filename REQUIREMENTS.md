# Documento de Requisitos

Este arquivo consolida dependências, integrações externas e configurações mínimas para executar e distribuir o template.

## Ambiente de Execução

- **Node.js**: 20.x ou superior (LTS recomendado).
- **pnpm**: 10.x ou superior (instalado globalmente).
- **Sistema Operacional**: macOS, Linux ou Windows 10/11 (WSL2 recomendado em Windows para uso de Docker).

## Banco de Dados

- **PostgreSQL** 16+ com acesso ao schema definido em `prisma/schema.prisma`.
- Usuário com permissões de criação/alteração de tabelas.
- Opcional: Docker Compose disponível via `docker-compose.dev.yml` para provisionamento local.

## Serviços Externos

- **Brevo (Sendinblue)**: envio de e-mails (API key + template IDs).
- **NextAuth**: provedores OAuth opcionais exigem suas respectivas chaves.
- **Inngest**: conta opcional para processamento de jobs assíncronos.

## Variáveis de Ambiente Principais

- `DATABASE_URL` — string de conexão do PostgreSQL.
- `NEXTAUTH_URL` e `NEXTAUTH_SECRET` — configuração obrigatória do NextAuth.
- `BREVO_API_KEY` — chave de acesso às rotinas de e-mail.
- `APP_BASE_URL` — URL pública utilizada em links e e-mails.
- `INGNEST_EVENT_KEY` — quando utilizar Inngest em produção.

Consulte o código/fonte para variáveis adicionais com prefixos `NEXT_PUBLIC_` e ajustes de integrações específicas.

## Ferramentas de Desenvolvimento

- **Biome** (instalado via dependências do projeto) para linting e formatação.
- **TypeScript** 5.9+.
- **tsx** para execução de scripts (ex.: seeds).
- **Git** configurado com hooks Husky (executados automaticamente via `pnpm prepare`).

## Deploy e Observabilidade

- Integração com pipelines que suportem execuções Node.js + pnpm.
- Acesso a sistemas de logs (p.ex. plataformas compatíveis com Pino).
- Provisionamento de storage para artefatos Prisma (`npx prisma generate` deve rodar no build).

Para mais detalhes sobre backlog e melhorias planejadas, consulte [TODO.md](TODO.md).
