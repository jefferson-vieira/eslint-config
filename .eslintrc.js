const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    require.resolve("@vercel/style-guide/eslint/next"),
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:perfectionist/recommended-natural-legacy",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: [
    "@typescript-eslint",
    "prettier",
    "perfectionist",
    "unused-imports",
  ],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [".*.js", "node_modules/"],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
  rules: {
    "no-useless-rename": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "export" },
      { blankLine: "always", prev: "*", next: "return" },
    ],
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "prettier/prettier": "error",
    "perfectionist/sort-jsx-props": [
      "error",
      {
        customGroups: {
          react: ["key", "ref"],
          callback: "on[A-Z]*",
        },
        groups: ["react", "unknown", "callback"],
      },
    ],
    "perfectionist/sort-imports": [
      "error",
      {
        customGroups: {
          type: {
            barbaBrutal: "@barba-brutal/**",
            components: "@/components/**",
          },
          value: {
            barbaBrutal: "@barba-brutal/**",
            components: "@/components/**",
          },
        },
        groups: [
          "type",
          ["builtin", "external"],
          "barbaBrutal",
          "components",
          ["internal-type", "internal"],
          ["parent-type", "sibling-type", "index-type"],
          ["parent", "sibling", "index"],
          "object",
          "unknown",
        ],
        internalPattern: ["@/**"],
      },
    ],
    "react/jsx-max-props-per-line": "error",
    "react/jsx-newline": "error",
    "react/self-closing-comp": "error",
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": "warn",
  },
};
