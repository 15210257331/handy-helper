import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'handy-helper',
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `handy-helper.${format}.js`,
    }
  }
})
