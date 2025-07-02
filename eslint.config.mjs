import love from "eslint-config-love";

export default [
  {
    ...love,
    files: ["**/*.js", "**/*.ts"],
    ignores: ["dist", "node_modules"],
    rules: {
      ...love.rules,
      "@typescript-eslint/no-magic-numbers": "off",
      "eslint-comments/require-description": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/class-methods-use-this": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/prefer-destructuring": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/return-await": "off",
      "promise/avoid-new": "off",
    },
  },
];
