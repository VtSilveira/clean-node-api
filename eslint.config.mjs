import love from "eslint-config-love";

export default [
  {
    ...love,
    files: ["**/*.js", "**/*.ts"],
    ignores: ["dist", "node_modules"],
    rules: {
      ...love.rules,
      "@typescript-eslint/no-magic-numbers": "off",
      "@typescript-eslint/no-unsafe-assignment": "warn",
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/class-methods-use-this": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];
