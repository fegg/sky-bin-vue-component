import { defineConfig, InlineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import eslint from 'vite-plugin-eslint';
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
      entry: 'components/index.ts',
      formats: ['es'],
    },
  },

  plugins: [
    external(),
    vue(),
    vueJsx(),
    eslint({
      include: [
        'components/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.vue',
      ],
      exclude: ['node_modules'],
    }),
  ],
}) as InlineConfig;
