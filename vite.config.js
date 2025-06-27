import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // ✅ يحل مشكلة الملفات المفتوحة
      interval: 10, // ⏱️ يقلل عدد مرات القراءة
    },
  },
});
