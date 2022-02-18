module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "react", "react-hooks", "@emotion"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  settings: {
    react: {
      pragma: "jsx",
      version: "17.0.2",
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "@emotion/no-vanilla": "error",
    "@emotion/import-from-emotion": "error",
  },
};
