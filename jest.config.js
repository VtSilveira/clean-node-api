/** @type {import('jest').Config} */
const config = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  coverageProvider: "v8",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};

module.exports = config;
