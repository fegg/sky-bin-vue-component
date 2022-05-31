#!/usr/bin/env node

import path from 'path';
import fs from 'fs-extra';
import { Command } from 'commander';
import devComponent from './scripts/dev-component';
import buildComponent from './scripts/build-component';

const program = new Command();

const packageContent = fs.readFileSync(
  path.resolve(__dirname, '../package.json'),
  'utf8'
);
const packageData: any = JSON.parse(packageContent);

program
  .version(packageData.version)
  .name('sky-componet-bin')
  .usage('command [options]');

program
  .command('dev:component')
  .description('build components with watch mode.')
  .action(async () => {
    await devComponent();
  });

program
  .command('build:component')
  .description('build production files.')
  .option('-u, --umd', 'build with UMD file')
  .action(async ({ umd }: { umd: boolean }) => {
    await buildComponent({ umd });
  });

program.parse(process.argv);
