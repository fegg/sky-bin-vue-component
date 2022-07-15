import { defineConfig, InlineConfig } from 'vite';
import external from '../plugins/vite-plugin-external';

export default defineConfig({
  mode: 'development',
  build: {
    target: 'modules',
    outDir: 'es',
    emptyOutDir: true,
    minify: false,
    brotliSize: false,
    watch: {},
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        preserveModules: true,
        preserveModulesRoot: 'components',
      },
    },
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
    },
  },

  plugins: [
    external(),
  ],
}) as InlineConfig;
