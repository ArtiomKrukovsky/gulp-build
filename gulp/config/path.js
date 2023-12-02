// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    // папки с результатом
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`, 
    },
    // папки с источником
    src: {
        js: `${srcFolder}/js/app.js`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        svg: `${srcFolder}/img/**/*.svg`,  
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        files: `${srcFolder}/files/**/*.*`, 
        svgicons: `${srcFolder}/svgicons/*.svg`, 
    },
    // пути в папкам, которые будут являться триггерами для gulp
    watch: {
        js: `${srcFolder}/**/*.js`,
        scss: `${srcFolder}/scss/*.scss`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: `` // ftp сервер
}