#!/usr/bin/env node

/**
 * run oxfmt
 * this is a simple pass-through script, allowing dependencies to be consolidated
 * in this repository.
 */

import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const oxfmtPackage = fileURLToPath(import.meta.resolve('oxfmt/package.json'));
const oxfmt = join(dirname(oxfmtPackage), 'bin', 'oxfmt');
const result = spawnSync(oxfmt, process.argv.slice(2), { stdio: 'inherit' });

if (result.error) {
  throw result.error;
}

process.exitCode = result.status ?? 1;
