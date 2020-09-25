// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "extends": [
        "airbnb/base",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "globals": {},
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "settings": {},
    "rules": {
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'no-underscore-dangle': 'off',
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/no-var-requires": 'off',
        'no-useless-constructor': 'off',
        'class-methods-use-this': 'off',
        'linebreak-style': 'off'
    },
    overrides: [
        {
            files: ['*.d.ts'],
            rules: {
                // FIXME Fix "TypeError: Cannot read property 'body' of null"
                // https://github.com/typescript-eslint/typescript-eslint/issues/420
                // https://github.com/eslint/eslint/issues/11464
                // https://github.com/eslint/eslint/issues/11440
                'no-useless-constructor': 'off'
            }
        }
    ]
};