// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    // این باعث میشه فقط ترنسپایل کنه و خطاها رو نخواد
    logOverride: { 'ts-javascript': 'silent' }
  }
})
