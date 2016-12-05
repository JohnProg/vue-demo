module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  // https://github.com/airbnb/javascript
  extends: "airbnb-base",
  // required to lint *.vue files
  plugins: [
    "html",
  ],
  settings: {
    "import/resolver": {
      webpack: {
        config: "webpack.config.babel.js"
      }
    },
  },
  // add your custom rules here
  rules: {
    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    "import/extensions": ["error", "always", {
      js: "never",
      vue: "never",
    }],
    // allow debugger during development
    "no-debugger": [process.env.NODE_ENV === "production" ? "error" : "off"]
  }
}
