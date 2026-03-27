# Security Policy

## Supported Versions

| Version | Supported          |
|---------|--------------------|
| 1.x.x   | ✅ Active support  |
| < 1.0   | ❌ Not supported   |

## Reporting a Vulnerability

**Do not open a public issue for security vulnerabilities.**

Please report security vulnerabilities by emailing **security@thefiredev.com**.

Include:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

We will acknowledge receipt within 48 hours and provide a detailed response within 7 days. We ask that you do not publicly disclose the vulnerability until we have had a chance to address it.

## Security Measures

IronClad IP implements the following security practices:

- All API endpoints require authentication
- API keys are hashed at rest (bcrypt)
- Database credentials encrypted via environment variables
- No patent data leaves your infrastructure
- All LLM calls use your own API keys (no data sent to our servers)
- Elasticsearch indices are access-controlled per tenant
- Docker containers run as non-root users
- Dependencies audited weekly via `npm audit`

## Responsible Disclosure

We believe in responsible disclosure and will credit reporters (with permission) in our release notes.
