# Change history for eslint-config-stripes

## 6.3.0 IN PROGRESS

* Update eslint-plugins to current values. Refs ESCONF-21.
* Bump CI Node env from v12 to v16. Refs ESCONF-22.
* Loosen rules applied to tests and files recognized as tests. ESCONF-20.

## [6.2.0](https://github.com/folio-org/eslint-config-stripes/tree/v6.2.0) (2022-06-14)
[Full Changelog](https://github.com/folio-org/eslint-config-stripes/compare/v6.1.0...v6.2.0)

* Pin `webpack` to avoid conflicts with `karma-webpack` and `moment`. Refs ESCONF-16.
* Bump `@folio/stripes-webpack` to `v4` so it stays in sync with `@folio/stripes-cli`. Refs ESCONF-18.

## [6.1.0](https://github.com/folio-org/eslint-config-stripes/tree/v6.1.0) (2022-02-08)
[Full Changelog](https://github.com/folio-org/eslint-config-stripes/compare/v6.0.0...v6.1.0)

* Migrate to `@folio/stripes-webpack` `v3` which provides webpack `v5`. Refs ESCONF-13.

## [6.0.0](https://github.com/folio-org/eslint-config-stripes/tree/v6.0.0) (2021-09-24)
[Full Changelog](https://github.com/folio-org/eslint-config-stripes/compare/v5.4.0...v6.0.0)

* Turn off `react/jsx-uses-react` and `react/react-in-jsx-scope`. Refs ESCONF-4.
* Migrate from `babel-eslint` to `@babel/eslint-parser`. Refs ESCONF-8.
* Migrate to `@folio/stripes-webpack` `v2`, which provides babel config options. Refs ESCONF-10.

## [5.4.0](https://github.com/folio-org/eslint-config-stripes/tree/v5.4.0) (2021-03-19)
[Full Changelog](https://github.com/folio-org/eslint-config-stripes/compare/v5.3.0...v5.4.0)

* Turned off no-await-in-loop
* add Acquisitions-UI config

## [5.3.0](https://github.com/folio-org/eslint-config-stripes/tree/v5.3.0) (2020-12-09)
[Full Changelog](https://github.com/folio-org/eslint-config-stripes/compare/v5.2.0...v5.3.0)

* Turn off `camelcase` for methods prefixed with UNSAFE_ (i.e. deprecated react lifecycle methods).
* Turn off `no-multiple-empty-lines` so we can use whitespace freely.
* Turn off `react/jsx-one-expression-per-line` so we can avoid `{' '}` which is just silly.
* Update `elinst-plugin-import` to `2.22.1` to avoid barfing on `∞` somewhere in a transitive dependency.

## [5.2.0](https://github.com/folio-org/eslint-config-stripes/tree/v5.2.0) (2020-02-18)
* Turn off and `react/jsx-curly-newline` and `react/state-in-constructor` rules since they contradict patterns already well-established in our codebases.
* Turn off `max-classes-per-file` rule for test files since it is perfectly acceptable and common to have multiple classes in a single test file (for example: interactor files).

## [5.1.0](https://github.com/folio-org/eslint-config-stripes/tree/v5.1.0) (2020-01-31)
* Turn off `quote-props` rule.
* Turn off and `react/jsx-props-no-spreading` and `react/static-property-placement` rules since they contradict patterns already well-established in our codebases.
* Establish order for `static-variables` to appear after `static-methods` but before everything else to match our current style since it is now acknowledged by https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md.

## [5.0.0](https://github.com/folio-org/eslint-config-stripes/tree/v5.0.0) (2019-10-23)
* Undo revert of Security update eslint to >= 6.2.1 or eslint-util >= 1.4.1. Releasing as a major version update. Part of STRIPES-648.

## [4.3.1](https://github.com/folio-org/eslint-config-stripes/tree/v4.3.1) (2019-10-17)
* Reverting eslint update since version should be a major bump as it can break when used in workspaces with modules/platforms still referring to eslint 5.x.x. Part of STRIPES-648.

## [4.3.0](https://github.com/folio-org/eslint-config-stripes/tree/v4.3.0) (2019-10-17)
* Security update eslint to >= 6.2.1 or eslint-util >= 1.4.1. Part of STRIPES-648.

## [4.2.0](https://github.com/folio-org/eslint-config-stripes/tree/v4.2.0) (2019-08-12)
* Add eslint plugin [eslint-plugin-no-only-tests](https://www.npmjs.com/package/eslint-plugin-no-only-tests) for warning about .only in tests

## [4.1.0](https://github.com/folio-org/eslint-config-stripes/tree/v4.1.0) (2019-01-03)
[Full Changelog](https://github.com/folio-org/eslint-config-stripes/compare/v4.1.0...v4.2.0)

* Add eslint [rules](https://reactjs.org/docs/hooks-rules.html) for react hooks (ESCONF-2)

## [4.0.1](https://github.com/folio-org/eslint-config-stripes/tree/v4.0.1) (2019-01-23)
[Full Changelog](https://github.com/folio-org/eslint-config-stripes/compare/v4.0.0...v4.0.1)

* Fix `package.json` version mismatch

## [4.0.0](https://github.com/folio-org/eslint-config-stripes/tree/v4.0.0) (2019-01-17)
[Full Changelog](https://github.com/folio-org/eslint-config-stripes/compare/v3.2.1...v4.0.0)

* Upgrade `eslint-plugin-babel` https://github.com/babel/eslint-plugin-babel/compare/v5.1.0...v5.3.0
* Upgrade `eslint-plugin-jsx-a11y` https://github.com/evcohen/eslint-plugin-jsx-a11y/compare/v6.1.1...v6.1.2
* Upgrade `eslint-plugin-react` https://github.com/yannickcr/eslint-plugin-react/compare/v7.11.0...v7.12.4

## [3.2.1](https://github.com/folio-org/eslint-config-stripes/tree/v3.2.1) (2018-09-14)
[Full Changelog](https://github.com/folio-org/eslint-config-stripes/compare/v3.2.0...v3.2.1)

* Set `webpack` as a dependency

## [3.2.0](https://github.com/folio-org/eslint-config-stripes/tree/v3.2.0) (2018-09-12)
[Full Changelog](https://github.com/folio-org/eslint-config-stripes/compare/v3.1.0...v3.2.0)

* Turn off `react/destructuring-assignment` rule.

## [3.1.0](https://github.com/folio-org/eslint-config-stripes/tree/v3.1.0) (2018-09-03)
[Full Changelog](https://github.com/folio-org/eslint-config-stripes/compare/v3.0.0...v3.1.0)

* Turn off `operator-linebreak` rule.
* Relax `lines-between-class-members` rule.

## [3.0.0](https://github.com/folio-org/eslint-config-stripes/tree/v3.0.0) (2018-08-14)
[Full Changelog](https://github.com/folio-org/eslint-config-stripes/compare/v2.0.0...v3.0.0)

* Turn off [the `key-spacing` rule](https://eslint.org/docs/rules/key-spacing). Available from v2.0.1.
* Add an exception for `stripes-config` in `import/no-unresolved`
* `eslint` version 5 support

## [2.0.0](https://github.com/folio-org/eslint-config-stripes/tree/v2.0.0) (2018-06-04)
[Full Changelog](https://github.com/folio-org/eslint-config-stripes/compare/v1.1.1...v2.0.0)

* First version to pin a specific version of the `eslint-config-airbnb` dependency, to avoid nasty surprises where the rules change on their own.
