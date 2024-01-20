import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(

  ),
  {
    name: 'disable-dynamic-import-analysis',
      enforce: 'pre',
      apply: 'build',
      configureServer({ watcher }) {
        watcher.add('./src/**/*.jsx');
  }
}

],
})
