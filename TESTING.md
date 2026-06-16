# Testing

This project has two test layers plus a CI pipeline.

## Unit & integration (Jest + React Testing Library)

Configured via [`jest.config.ts`](jest.config.ts) using `next/jest`. Tests live in
[`__tests__/`](__tests__) and use the `*.test.ts(x)` suffix. jsdom is the default
environment; the API route test opts into the Node environment with a
`@jest-environment node` docblock.

| Command | Description |
| --- | --- |
| `npm test` | Run all unit/integration tests once |
| `npm run test:watch` | Watch mode |
| `npm run test:coverage` | Run with a coverage report (`coverage/`) |

Covered:

- **API** — `app/api/contact/route.ts`: validation, success, payload shape, provider failure (Resend is mocked).
- **Hook** — `hooks/useReveal.ts`: observe/unobserve/disconnect lifecycle (IntersectionObserver is mocked in [`jest.setup.ts`](jest.setup.ts)).
- **Components** — `Nav`, `Hero`, `Footer`, `Projects`, `Contact`: rendered output, links (incl. the résumé PDF), scroll state, and form submit/success/error flows (`fetch` mocked).

## End-to-end (Playwright)

Configured via [`playwright.config.ts`](playwright.config.ts). Specs live in
[`e2e/`](e2e) with the `*.spec.ts` suffix and run against Chromium, Firefox, and
mobile Chrome. The config auto-starts the app (`next dev` locally, `next start`
in CI).

| Command | Description |
| --- | --- |
| `npm run test:e2e` | Run all E2E tests |
| `npm run test:e2e:ui` | Run with the Playwright UI |

First-time setup: `npx playwright install`.

Covered: page metadata, all sections render, résumé PDF is downloadable, project
cards, anchor-link navigation, external-link safety attributes, and the contact
form (the `/api/contact` request is intercepted so no real email is sent).

## CI

[`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs on pushes and PRs to
`main` in two jobs:

1. **lint-and-unit** — `eslint`, `tsc --noEmit`, and `jest` with coverage.
2. **e2e** — installs Playwright browsers, builds the app, and runs the E2E suite.

Both upload artifacts (coverage / Playwright HTML report).
