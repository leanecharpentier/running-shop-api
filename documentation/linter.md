# Linter

## A quoi ça sert ?

Un **linter** sert principalement à :

1. **Améliorer la qualité du code** : En détectant des erreurs avant l'exécution, il réduit le nombre de bugs.

2. **Imposer des conventions de codage** : Il aide à maintenir un code uniforme et lisible, ce qui est essentiel lorsqu'on travaille en équipe.

3. **Faciliter la maintenance** : Le code bien structuré et sans erreurs est plus facile à maintenir et à étendre.

4. **Réduire les risques de défauts à l'exécution** : Le linter permet de détecter des erreurs de logique ou de syntaxe qui pourraient ne pas être visibles immédiatement à l'exécution.

## ESLint

**ESLint** est un linter spécifique à JavaScript et à d'autres langages utilisant le même moteur de syntaxe.

Il analyse le code JavaScript pour détecter des erreurs, appliquer des conventions de style et même refactorer le code. Il permet de configurer des règles strictes selon les besoins d’un projet.

### Config `.eslintrc.cjs` (à mettre à la racine)

```
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
```
## Prettier

**Prettier** est un outil de formatage de code.

Contrairement à ESLint, qui se concentre principalement sur la détection d’erreurs et la qualité du code, Prettier s'assure que le code est bien formaté, selon un style de codage uniforme, sans avoir besoin d'une configuration poussée.

### Config `.prettierrc` (à mettre à la racine)

```
{
    "plugins": ["@trivago/prettier-plugin-sort-imports"],
    "semi": true,
    "singleQuote": false,
    "tabWidth": 4,
    "trailingComma": "es5",
    "printWidth": 110,
    "useTabs": false,
    "endOfLine": "lf",
    "importOrder": ["^[a-zA-Z]", "^\\./", "^\\.\\./"],
    "importOrderSeparation": true,
    "importOrderSortSpecifiers": true
}
```

## Liste des dépendances à télécharger

```
"@trivago/prettier-plugin-sort-imports": "^5.2.0",
"eslint": "^8.57.1",
"eslint-config-prettier": "^9.1.0",
"eslint-plugin-prettier": "^5.2.1",
"prettier": "^3.4.2"
```
___

*Il s'agit de mes préférences en termes de formatage et de détection d'erreur*