module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react", "@typescript-eslint", "prettier", "react-hooks"],
  rules: {
    "react/jsx-props-no-spreading": "warn",
    "@typescript-eslint/ban-ts-ignore": "warn",
    "import/prefer-default-export": "off",
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: false,
        assignment: false
      }
    ],
    "@typescript-eslint/camelcase": "warn",
    "jsx-a11y/label-has-for": [
      2,
      {
        required: {
          some: ["nesting", "id"]
        }
      }
    ],
    "react/prop-types": "off",
    "import/no-cycle": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.stories.tsx", "**/*.stories.ts"]
      }
    ]
    /*
        "no-console": "warn",
        "no-param-reassign": "warn",
        "prefer-rest-params": "off",
        "no-multi-assign": "off",
        "no-else-return": "off",
        "no-extra-boolean-cast": "off",
        "prefer-template": "off",
        "consistent-return": "off",
        "no-prototype-builtins": "off",
        "default-case": "off",
        "no-case-declarations": "warn",
        "no-unneeded-ternary": "warn",
        "no-useless-computed-key": "warn",
        "no-restricted-syntax": "off",
        "react/sort-comp": "off",
        "react/prop-types": "warn",
        "react/jsx-props-no-spreading": "off",
        "react/jsx-curly-brace-presence": "warn",
        "react/no-array-index-key": "warn",
        "react/destructuring-assignment": "warn",
        "react/jsx-wrap-multilines": "off",
        "react/jsx-curly-newline": "off",
        "react/button-has-type": "off",
        "react/display-name": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/no-unescaped-entities": "off",
        "react/static-property-placement": "off",
        "import/prefer-default-export": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/mouse-events-have-key-events": "off",
        "jsx-a11y/no-autofocus": "off",
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/triple-slash-reference": "off",
        "@typescript-eslint/no-empty-function": "off" */
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["src"]
      }
    },
    react: {
      version: "detect"
    }
  }
};
