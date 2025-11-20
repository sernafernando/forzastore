import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: [
      'testforza.gaussonline.com.ar',
      'localhost',
      '.localhost'
    ]
  }
});
