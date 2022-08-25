import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    plugins: [react(), svgr()],
    server: {
      host: '0.0.0.0',
      port: 5000,
      watch: {
        usePolling: true
      },
      hmr: {
        clientPort: 80
      },
      proxy: {
        '/api/payments': {
          target: `${process.env['VITE_PAYMENTS_URL']}`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/payments/, '')
        },
        '/api/catalog': {
          target: `${process.env['VITE_CATALOG_URL']}`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/catalog/, '')
        },
        '/api/orders': {
          target: `${process.env['VITE_ORDERS_URL']}`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/orders/, '')
        },
        '/api/metrics': {
          target: `${process.env['VITE_METRICS_URL']}`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/metrics/, '')
        },
      }
    }
  });
}
