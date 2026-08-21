#!/usr/bin/env node

/**
 * run oxlint
 * this is a simple pass-through script, allowing dependencies to be consolidated
 * in this repository.
 */

import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const oxlintPackage = fileURLToPath(import.meta.resolve('oxlint/package.json'));
const oxlint = join(dirname(oxlintPackage), 'bin', 'oxlint');
const result = spawnSync(oxlint, process.argv.slice(2), { stdio: 'inherit' });

if (result.error) {
  throw result.error;
}

process.exitCode = result.status ?? 1;
