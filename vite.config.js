import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
    plugins: [vue({})],

    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },

    server: {
        port: 8082,
    },

    optimizeDeps: {
        include: ['pdfjs-dist'],
    },

    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/assets/styles/mixins.scss" as *;`,
            },
        },
    },

    define: {
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
    },
})
