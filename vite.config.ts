import { defineConfig } from 'vite';
import msw from "@iodigital/vite-plugin-msw";
import react from '@vitejs/plugin-react';
import handlers from "./src/mocks/handlers";
import autoprefixer from 'autoprefixer';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [msw({ handlers }), react({
    jsxImportSource: "@emotion/react",
    babel: {
      plugins: ["@emotion/babel-plugin"],
    },
  }), eslint()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}) // add options if needed
      ],
    }
  }
});
