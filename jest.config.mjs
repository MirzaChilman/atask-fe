import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  testPathIgnorePatterns: ["/node_modules/", "fetch\\.ts$"],
  coveragePathIgnorePatterns: ["/node_modules/", "fetch\\.ts$"],
};

export default createJestConfig(config);
