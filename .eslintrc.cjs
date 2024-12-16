module.exports = {
    root: true,
    env: {
        node: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": "error",
        "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
};
