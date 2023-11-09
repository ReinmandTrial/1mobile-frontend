import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts`,
        files: `${buildFolder}/files`,
        icons: `${buildFolder}/icons`
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        // images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        images: `${srcFolder}/img/**/*.*`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.*`,
        icons: `${srcFolder}/fonts/iconFonts/*.*`,
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/img/**/*.*`,
        // images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,wepb,ico,svg}`,
        files: `${srcFolder}/files/**/*.*`,
        icons: `${srcFolder}/fonts/iconFonts/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``,
}