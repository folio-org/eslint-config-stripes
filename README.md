# eslint-config-stripes

This package exports linter and formatter configurations (`lintConfig`,
`fmtConfig`), functions (`defineLintConfig`, `defineFmtConfig`) and scripts
(`stripes-lint`, `stripes-fmt`).

## Description

This package uses [oxlint](https://oxc.rs/docs/guide/usage/linter.html) and
[oxfmt](https://oxc.rs/docs/guide/usage/formatter.html) under the hood. The
`stripes-lint` and `stripes-fmt` scripts are simple pass-through scripts that
delegate to those tools, allowing this repository to be self-contained and
permitting dependent packages to depend on this package and **no others**.

## Installation and configuration

Add this repository as a dev-dep:
```
yarn add -D @folio/eslint-config-stripes
```

Create `oxlint.config.mts` and `oxfmt.config.mts` files in the root of your
project:
```
// oxfmt.config.mts
import { defineLintConfig, lintConfig } from "@folio/eslint-config-stripes";
export default defineConfig({ ...lintConfig });

// oxfmt.config.mts
import { defineFmtConfig, fmttConfig } from "@folio/eslint-config-stripes";
export default defineFmtConfig({ ...fmtConfig });
```

Add entries to the `scripts` section of `package.json`:
```
"fmt": "stripes-fmt ./src ./test",
"fmt:check": "stripes-fmt --check ./src ./test",
"lint": "stripes-lint ./src",
"lint:fix": "stripes-lint --fix ./src",
```

## Usage

Run `yarn lint` (or `npm run lint`) and `yarn fmt` (or `npm run fmt`) in your
terminal.

## Additional information

See project [ESCONF](https://folio-org.atlassian.net/jira/software/c/projects/ESCONF/list) at the [FOLIO issue tracker](https://folio-org.atlassian.net/jira/projects).

Other FOLIO Developer documentation is at [dev.folio.org](http://dev.folio.org/).
