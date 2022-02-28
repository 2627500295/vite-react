import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

import onDemandImport from 'vite-plugin-imp';

import upperFirst from 'lodash/upperFirst';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    onDemandImport({
      libList: [
        {
          libName: '@arco-design/web-react',
          style: (name) =>
            `@arco-design/web-react/es/${upperFirst(name)}/style/css.js`,
        },
      ],
    }),
  ],
});
