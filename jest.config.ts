import type { Config } from "jest";
import nextJest from "next/jest.js";

// Provide the path to the Next.js app so next/jest can load next.config + .env files
const createJestConfig = nextJest({ dir: "./" });

const config: Config = {
  // jsdom is the default env for component/hook tests.
  // The API route test opts into the node env via a per-file docblock.
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  // Only treat files under __tests__ (or *.test.*) as Jest tests.
  // Playwright specs live in /e2e and use the *.spec.ts suffix.
  testMatch: ["**/__tests__/**/*.test.{ts,tsx}"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/e2e/", "<rootDir>/.next/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  collectCoverageFrom: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "hooks/**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!app/layout.tsx",
  ],
  clearMocks: true,
};

export default createJestConfig(config);
