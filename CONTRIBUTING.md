# Contributing to IronClad IP

Thank you for your interest in contributing to IronClad IP. This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## How to Contribute

### Reporting Bugs

1. Check [existing issues](https://github.com/thefiredev/ironclad-ip/issues) to avoid duplicates
2. Use the bug report template when creating a new issue
3. Include reproduction steps, expected behavior, and actual behavior
4. Include your environment details (Node.js version, OS, Docker version)

### Suggesting Features

1. Open a [feature request](https://github.com/thefiredev/ironclad-ip/issues/new?template=feature_request.md)
2. Describe the use case and expected behavior
3. Explain why this feature would be useful to other users

### Pull Requests

1. Fork the repository
2. Create a feature branch from `main`: `git checkout -b feature/your-feature`
3. Make your changes
4. Write or update tests as needed
5. Ensure all tests pass: `npm test`
6. Ensure linting passes: `npm run lint`
7. Ensure type checking passes: `npm run typecheck`
8. Commit with conventional commits: `feat: add new feature`
9. Push to your fork and submit a pull request

### Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — New feature
- `fix:` — Bug fix
- `docs:` — Documentation only
- `style:` — Formatting, missing semicolons, etc.
- `refactor:` — Code change that neither fixes a bug nor adds a feature
- `perf:` — Performance improvement
- `test:` — Adding or updating tests
- `chore:` — Maintenance tasks

### Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/ironclad-ip.git
cd ironclad-ip

# Install dependencies
npm install

# Copy environment config
cp .env.example .env

# Start infrastructure
docker-compose up -d

# Run migrations
npm run db:migrate

# Seed test data
npm run db:seed

# Start dev server
npm run dev
```

### Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- --grep "patent crawler"
```

### Code Style

- TypeScript strict mode enabled
- ESLint + Prettier for formatting
- Maximum line length: 100 characters
- Use meaningful variable and function names
- Document public APIs with JSDoc comments

## Architecture Decisions

Major architecture decisions are documented in `docs/adr/`. Please review these before making significant changes. If your contribution involves an architectural change, create a new ADR.

## Questions?

- Open a [discussion](https://github.com/thefiredev/ironclad-ip/discussions)
- Join our [Discord](https://discord.gg/thefiredev)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
