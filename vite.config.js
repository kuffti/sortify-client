import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3000
  },
  build: {
    outDir: 'build',
    assetsDir: 'assets'
  },
  // הוספת לוגים לתהליך הבנייה
  logLevel: 'info'
});
