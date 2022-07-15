import fs from 'fs-extra';
import path from 'path';
import { build } from 'vite';
import config from '../config/vite.prod.lib';

async function run() {
  await fs.emptyDir(path.resolve(process.cwd(), 'es'));
  await fs.emptyDir(path.resolve(process.cwd(), 'lib'));
  await build(config);
}

export default run;
