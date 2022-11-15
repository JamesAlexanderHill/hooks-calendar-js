import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: './src',
    publicDir: '../public',
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/main.js'),
            name: 'Calendar',
            fileName: 'calendar'
        },
        outDir: '../dist',
    }
})