import { defineConfig } from 'vite';
const { resolve } = require('path');
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        }),
        viteImagemin({
            gifsicle: {
                optimizationLevel: 7,
                interlaced: false
            },
            optipng: {
                optimizationLevel: 7
            },
            mozjpeg: {
                quality: 20
            },
            pngquant: {
                quality: [0.8, 0.9],
                speed: 4
            },
            svgo: {
                plugins: [
                    {
                        name: 'removeViewBox'
                    },
                    {
                        name: 'removeEmptyAttrs',
                        active: false
                    }
                ]
            }
        })
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        },
        extensions: ['.js', '.json', '.ts']
    }
});
