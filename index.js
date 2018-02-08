module.exports = {
  "extends": "airbnb",
  "settings": {
    "import/resolver": {
      "webpack": {}
    },
    "react": {
      "version": "15.6.1"
    },
  },
  "env": {
    "browser": true,
    "node": true,
  },
  "rules": {
    "prefer-const": "off",
    "import/extensions": ["warn", "never"],
    "import/no-extraneous-dependencies": ["error", {
      "peerDependencies": true
    }],
    "jsx-a11y/href-no-hash": "off", // deprecated rule
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/label-has-for": [ "error", {
      "required": {
          "every": [ "id" ]
      },
      "allowChildren": false,
    }],
    "jsx-a11y/no-noninteractive-tabindex": ["error", {
      "tags": [],
      "roles": ["tabpanel", "dialog"],
    }],
    "max-len": "off",
    "no-console": "warn",
    "no-else-return": "off",
    "no-nested-ternary": "off",
    "no-param-reassign": ["error", {
      "props": false
    }],
    "no-plusplus": "off",
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    "no-underscore-dangle": "off",
    "no-unused-vars": ["warn", {
      "argsIgnorePattern": "^_"
    }],
    "react/forbid-prop-types": ["warn", {
      "forbid": ["any", "array"]
    }],
    "react/jsx-filename-extension": "off",
    "react/jsx-wrap-multilines": "off",
    "react/no-array-index-key": "off",
    "react/require-default-props": "off",
    "react/sort-comp": ["warn", {
      "order": [
        "static-methods",
        "lifecycle",
        "everything-else",
        "render"
      ]
    }],
  }
};
