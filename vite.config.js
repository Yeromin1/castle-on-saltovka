import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

import { viteStaticCopy } from 'vite-plugin-static-copy';

// Автоматичне збирання всіх HTML-файлів у src/pages/
const getHtmlEntries = () => {
  const pagesDir = resolve(__dirname, 'src/pages');
  const entries = {};

  const walk = dir => {
    fs.readdirSync(dir).forEach(file => {
      const fullPath = resolve(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        walk(fullPath);
      } else if (file.endsWith('.html')) {
        const name = fullPath
          .replace(pagesDir + '/', '')
          .replace('.html', '')
          .replace(/\//g, '-');
        entries[name] = fullPath;
      }
    });
  };

  walk(pagesDir);
  return entries;
};

export default defineConfig(({ command }) => {
  const inputFiles = glob.sync('./src/**/*.html');

  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },

    base: '/castle-on-saltovka/',
    root: 'src',
    build: {
      emptyOutDir: true,
      sourcemap: true,
      outDir: '../dist',
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'src/index.html'),
          ...getHtmlEntries(),
        },
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'commonHelpers.js',
        },
      },
    },
    plugins: [
      injectHTML(),
      FullReload(['./src/**/*.html']),
      viteStaticCopy({
        targets: [
          {
            src: 'src/img/**/*.svg',
            dest: 'img',
          },
        ],
      }),
    ],
  };
});
