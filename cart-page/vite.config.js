import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'src/[name]-[hash].js',
        entryFileNames: 'src/[name]-[hash].js',

        assetFileNames: ({ name: fileName }) => {
          if (/\.css$/.test(fileName ?? '')) {
            return 'styles/[name]-[hash][extname]';
          }

          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  plugins: [tsconfigPaths()],
});
