import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        createSvgSpritePlugin({
            symbolId: 'icon-[name]-[hash]',
        }),
    ],
});
