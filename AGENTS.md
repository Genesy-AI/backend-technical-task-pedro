# Agent Guidelines for TinyGenesy

## Project Structure
- **Monorepo**: `backend/` (Express + Prisma + Temporal) and `frontend/` (React + Vite)
- Use `pnpm` for package management
- Node version specified in `.nvmrc`

## Commands
**Backend**: `cd backend && pnpm test` (all tests), `pnpm test messageGenerator` (single file), `pnpm build`, `pnpm format`
**Frontend**: `cd frontend && pnpm test` (all tests), `pnpm test csvParser` (single file), `pnpm build`, `pnpm lint`, `pnpm format`
**Database**: `cd backend && pnpm migrate:dev` (after schema changes), `pnpm gen:prisma` (generate client)

## Code Style
- **Formatting**: Prettier config: 2 spaces, no semicolons, single quotes, 110 char width
- **TypeScript**: Strict mode enabled, explicit types preferred, no `any`
- **Imports**: Group by: external packages → internal modules → types
- **Naming**: camelCase (vars/functions), PascalCase (components/types), snake_case (DB only)
- **Error handling**: Try-catch with meaningful messages, return error objects in API responses
- **Testing**: Vitest with comprehensive test suites, use `describe` blocks, test edge cases
- **Temporal**: Activities with timeouts/retries, idempotent workflows, typed activity imports

## Best Practices
- Run formatter before committing: `pnpm format`
- Update Prisma client after schema changes
- Validate inputs in API endpoints
- Use proper HTTP status codes (400 for validation, 404 for not found, 500 for server errors)
