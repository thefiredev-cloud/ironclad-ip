<div align="center">

# IronClad IP

[![Build Status](https://img.shields.io/github/actions/workflow/status/thefiredev/ironclad-ip/ci.yml?branch=main&style=for-the-badge&logo=github)](https://github.com/thefiredev/ironclad-ip/actions)
[![Coverage](https://img.shields.io/codecov/c/github/thefiredev/ironclad-ip?style=for-the-badge&logo=codecov)](https://codecov.io/gh/thefiredev/ironclad-ip)
[![Version](https://img.shields.io/npm/v/@thefiredev/ironclad-ip?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@thefiredev/ironclad-ip)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Discord](https://img.shields.io/discord/1234567890?style=for-the-badge&logo=discord&label=Discord)](https://discord.gg/thefiredev)

**Your patent army. 24/7.**

[Landing Page](https://thefiredev.com/ironclad-ip) · [Documentation](https://docs.thefiredev.com/ironclad-ip) · [Discord](https://discord.gg/thefiredev) · [Report Bug](https://github.com/thefiredev/ironclad-ip/issues)

</div>

---

## What is IronClad IP?

IronClad IP is an autonomous patent offense and defense system. It monitors your engineering team's work to identify patentable innovations, drafts patent applications, scans USPTO daily for threats, and kills them with prior art — all without a patent attorney on retainer.

**Autonomous patent offense + defense. No billable hours.**

---

## Key Value Props

| | Capability | Impact |
|---|---|---|
| 🔍 | **Daily USPTO scan** | Know about threats before they're granted |
| 💡 | **Innovation detection** | Find patentable ideas in your eng team's work |
| ✍️ | **Auto patent drafting** | Claims, abstract, drawings — ready for attorney review |
| ⚔️ | **Prior art search** | Kill threats before they become liabilities |
| 🛡️ | **Portfolio defense** | Monitor your existing patents for infringement |
| 📊 | **IP portfolio dashboard** | Full visibility into your IP position |

---

## Features

### 🔍 USPTO Daily Surveillance
- Automated daily crawl of new USPTO filings
- Patent classification matching against your technology stack
- Competitor patent tracking
- Grant and abandonment monitoring
- IPR / PTAB proceeding alerts

### 💡 Innovation Mining
- Integrates with GitHub, Jira, Confluence, Slack
- LLM-powered novelty detection in engineering work
- Identifies claim-worthy innovations in code commits, design docs, PRs
- Weekly innovation report delivered to IP counsel queue

### ✍️ Autonomous Patent Drafting
- Generates full patent application drafts (claims, abstract, spec, drawings)
- MPEP-aware claim structuring
- Independent and dependent claim strategy
- Prosecution history analysis for similar patents
- Attorney review workflow with tracked changes

### ⚔️ Prior Art Offense
- Automated prior art search against threatening patents
- USPTO, Google Patents, arXiv, academic papers
- Prior art packages formatted for IPR petitions
- Claim mapping: their claims vs. your prior art

### 🛡️ Portfolio Defense
- Monitor your granted patents for infringement signals
- Competitor product change detection
- Licensing opportunity identification
- Patent expiration and maintenance fee tracking

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        IronClad IP                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   Data Sources           Ingestion               Analysis        │
│   ┌────────────┐        ┌──────────────┐        ┌────────────┐  │
│   │ USPTO API  │───────▶│  Patent      │───────▶│  Classifier│  │
│   │ Google Pat.│        │  Crawler     │        │  & Ranker  │  │
│   │ arXiv      │        │  (daily)     │        └─────┬──────┘  │
│   └────────────┘        └──────────────┘              │          │
│                                                        ▼          │
│   Engineering Sources                         ┌──────────────┐  │
│   ┌────────────┐        ┌──────────────┐      │   Threat     │  │
│   │ GitHub     │───────▶│  Innovation  │      │   Database   │  │
│   │ Jira       │        │  Miner       │      └──────┬───────┘  │
│   │ Confluence │        │  (LLM)       │             │           │
│   │ Slack      │        └──────────────┘             │           │
│   └────────────┘                │                    │           │
│                                 ▼                    ▼           │
│                         ┌──────────────┐   ┌────────────────┐   │
│                         │   Patent     │   │   Prior Art    │   │
│                         │   Drafter    │   │   Searcher     │   │
│                         │   (LLM)      │   │               │   │
│                         └──────┬───────┘   └──────┬─────────┘   │
│                                │                   │             │
│                         ┌──────▼───────────────────▼──────┐     │
│                         │         Workflow Engine           │     │
│                         │   (attorney review, alerts)      │     │
│                         └──────────────────┬───────────────┘     │
│                                            │                      │
│                                   ┌────────▼───────┐             │
│                                   │   Dashboard /  │             │
│                                   │   API Layer    │             │
│                                   └────────────────┘             │
└─────────────────────────────────────────────────────────────────┘
```

---

## Tech Stack

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat-square&logo=nodedotjs)](https://nodejs.org/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-412991?style=flat-square&logo=openai)](https://openai.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql)](https://www.postgresql.org/)
[![Elasticsearch](https://img.shields.io/badge/Elasticsearch-8.x-005571?style=flat-square&logo=elasticsearch)](https://www.elastic.co/)
[![Redis](https://img.shields.io/badge/Redis-7.x-DC382D?style=flat-square&logo=redis)](https://redis.io/)
[![Docker](https://img.shields.io/badge/Docker-24+-2496ED?style=flat-square&logo=docker)](https://www.docker.com/)

---

## Getting Started

### Prerequisites

- Node.js 20+
- Docker & Docker Compose
- USPTO API key (PatentsView or USPTO Open Data)
- OpenAI API key

### Quick Start

```bash
# Clone
git clone https://github.com/thefiredev/ironclad-ip.git
cd ironclad-ip

# Install dependencies
npm install

# Configure environment
cp .env.example .env

# Start infrastructure
docker-compose up -d

# Migrate database
npm run db:migrate

# Start dev server
npm run dev

# Start the patent scanner (separate process)
npm run scanner:start
```

API available at `http://localhost:3002`.

### Connect Your Engineering Sources

```bash
# Connect GitHub organization
curl -X POST http://localhost:3002/api/v1/sources \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "github",
    "org": "your-org",
    "token": "ghp_xxxx",
    "scan_commits": true,
    "scan_prs": true,
    "scan_issues": false
  }'

# Connect Jira
curl -X POST http://localhost:3002/api/v1/sources \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "jira",
    "domain": "your-org.atlassian.net",
    "email": "you@company.com",
    "api_token": "xxxx"
  }'
```

### Configure Patent Monitoring

```bash
# Set your technology classifications (CPC codes)
curl -X POST http://localhost:3002/api/v1/classifications \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "cpc_codes": ["G06F", "G06N", "H04L"],
    "keywords": ["machine learning", "distributed systems"],
    "competitors": ["competitor-corp", "rival-inc"]
  }'
```

---

## API Reference

### Patents

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/v1/patents` | List monitored patents |
| `GET` | `/api/v1/patents/:id` | Get patent details |
| `GET` | `/api/v1/patents/threats` | List identified threats |
| `POST` | `/api/v1/patents/search` | Search prior art |

### Innovations

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/v1/innovations` | List detected innovations |
| `GET` | `/api/v1/innovations/:id` | Get innovation details |
| `POST` | `/api/v1/innovations/:id/draft` | Generate patent draft |
| `PUT` | `/api/v1/innovations/:id/status` | Update innovation status |

### Sources

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/v1/sources` | List connected sources |
| `POST` | `/api/v1/sources` | Connect new source |
| `DELETE` | `/api/v1/sources/:id` | Disconnect source |
| `POST` | `/api/v1/sources/:id/sync` | Trigger manual sync |

### Portfolio

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/v1/portfolio` | Get portfolio overview |
| `GET` | `/api/v1/portfolio/patents` | List your patents |
| `GET` | `/api/v1/portfolio/alerts` | Get infringement alerts |
| `POST` | `/api/v1/portfolio/patents` | Add patent to portfolio |

Full API docs at [docs.thefiredev.com/ironclad-ip/api](https://docs.thefiredev.com/ironclad-ip/api).

---

## Environment Variables

```env
# Core
NODE_ENV=development
PORT=3002
API_KEY=your-api-key

# Database
DATABASE_URL=postgresql://ironclad:ironclad@localhost:5432/ironclad_ip

# Elasticsearch
ELASTICSEARCH_URL=http://localhost:9200

# Redis
REDIS_URL=redis://localhost:6379

# USPTO
USPTO_API_KEY=your-uspto-api-key

# OpenAI
OPENAI_API_KEY=your-openai-api-key
OPENAI_MODEL=gpt-4o

# GitHub (for innovation mining)
GITHUB_TOKEN=ghp_xxxx
GITHUB_ORG=your-org

# Notifications
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/xxx
EMAIL_FROM=ironclad@yourcompany.com
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_USER=user
SMTP_PASS=pass
```

---

## Development

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Lint
npm run lint

# Type check
npm run typecheck

# Run a single scanner cycle (useful for testing)
npm run scanner:once

# Seed database with sample patents
npm run db:seed
```

---

## Deployment

### Docker

```bash
docker build -t ironclad-ip .
docker run -p 3002:3002 --env-file .env ironclad-ip
```

### Docker Compose (Production)

```bash
docker-compose -f docker-compose.prod.yml up -d
```

---

## Roadmap

- [x] USPTO daily surveillance
- [x] Innovation mining (GitHub)
- [x] Patent draft generation
- [x] Prior art search
- [ ] Jira / Confluence integration
- [ ] Slack integration
- [ ] Multi-jurisdiction support (EPO, WIPO, JPO)
- [ ] Patent landscape visualization
- [ ] Automated IPR petition drafting
- [ ] Portfolio valuation modeling
- [ ] AI-powered claim chart generation

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## License

[MIT](LICENSE) © 2026 The Fire Dev LLC

---

<div align="center">

**Built by [The Fire Dev](https://thefiredev.com)**

*Your patent army never sleeps.*

</div>
