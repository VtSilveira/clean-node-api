import love from "eslint-config-love";

export default [
  {
    ...love,
    files: ["**/*.js", "**/*.ts"],
    ignores: ["dist", "node_modules"],
  },
];
