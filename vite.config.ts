import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';
import msw from '@iodigital/vite-plugin-msw';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';
import handlers from './src/mocks/handlers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    msw({ handlers }),
    react({
      jsxImportSource: '@emotion/react',
    }),
    eslint(),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}), // add options if needed
      ],
    },
  },
});
