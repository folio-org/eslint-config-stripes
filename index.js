module.exports = {
  "extends": "airbnb",
  "settings": {
    "import/resolver": {
      "webpack": {}
    },
    "react": {
      "version": "16.3.0"
    },
  },
  "env": {
    "browser": true,
    "node": true,
  },
  "plugins": ["react-hooks", "no-only-tests"],
  "rules": {
    "arrow-body-style": "off",
    "arrow-parens": "off",
    "camelcase": ["error", { properties: "never", allow: ["^UNSAFE_"] }],
    "class-methods-use-this": "off",
    "comma-dangle": [
      "error",
      {
        "arrays": "only-multiline",
        "objects": "only-multiline",
        "imports": "only-multiline",
        "exports": "only-multiline",
        "functions": "only-multiline"
      }
    ],
    "function-paren-newline": ["error", "consistent"],
    "import/extensions": ["warn", "never"],
    "import/no-extraneous-dependencies": ["error", {
      "peerDependencies": true
    }],
    "import/no-unresolved": ["error", { "ignore": ["react", "react-dom", "stripes-config"] } ],
    "jsx-a11y/anchor-is-valid": ["error", {
      "components": ["Link"],
      "specialLink": ["to"]
    }],
    "jsx-a11y/href-no-hash": "off", // deprecated rule
    "jsx-a11y/label-has-for": [ "error", {
      "required": {
        "some": [ "nesting", "id" ]
      },
      "allowChildren": false,
    }],
    "jsx-a11y/no-noninteractive-tabindex": ["error", {
      "tags": [],
      "roles": ["tabpanel", "dialog"],
    }],
    "jsx-a11y/no-autofocus": "off", /* this rule cites https://w3c.github.io/html/sec-forms.html#autofocusing-a-form-control-the-autofocus-attribute
                                      which mainly applies to non-SPA's. SPA's like FOLIO have good reason to manually control focus for
                                      users of Assistive Technology or those who just prefer to navigate using a keyboard alone -
                                      focus transitions serve as a primary indicator of a change in page context as new
                                      trees of components mount/dismount.
                                      */
    "key-spacing": "off",
    "linebreak-style": "off",
    "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
    "max-len": "off",
    "no-console": "warn",
    "no-else-return": "off",
    "no-multiple-empty-lines": "off",
    "no-multi-spaces": ["error", {
      "ignoreEOLComments": true,
    }],
    "no-nested-ternary": "off",
    "no-only-tests/no-only-tests": "error",
    "no-param-reassign": ["error", {
      "props": false
    }],
    "no-plusplus": "off",
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    "no-underscore-dangle": "off",
    "no-unused-vars": ["warn", {
      "argsIgnorePattern": "^_"
    }],
    "object-curly-newline": ["error", { "consistent": true }],
    "operator-linebreak": ["off"],
    "prefer-destructuring": "off",
    "prefer-template": "off",
    "quote-props": "off",
    "react/destructuring-assignment": ["off"],
    "react/forbid-prop-types": ["warn", {
      "forbid": ["any", "array"]
    }],
    "react/jsx-curly-newline": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-wrap-multilines": "off",
    "react/no-array-index-key": "off",
    "react/prefer-stateless-function": "off",
    "react/require-default-props": "off",
    "react/sort-comp": ["warn", {
      "order": [
        "static-methods",
        "static-variables",
        "lifecycle",
        "everything-else",
        "render"
      ]
    }],
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  overrides: [
    {
      files: ["**/test/**"],
      rules: {
        "max-classes-per-file": "off",
        "no-console": "off",
        // lexically bound "this" prevents access to the Mocha test context.
        // See https://mochajs.org/#arrow-functions
        "prefer-arrow-callback": "off",
      }
    }
  ]
};
