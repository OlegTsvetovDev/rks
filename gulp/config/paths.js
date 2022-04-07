import * as nodePath from 'path'


const rootFolder = nodePath.basename(nodePath.resolve())
const buildFolder = `./dist`
const srcFolder = `./src`
const paths = {
  build: {
    html: `${buildFolder}/`,
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    files: `${buildFolder}/files/`,
    img: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts`
  },
  src: {
    html: `${srcFolder}/**/!(_*)*.html`,
    js: `${srcFolder}/js/*.js`,
    scss: `${srcFolder}/scss/*.scss`,
    css: `${srcFolder}/scss/*.css`,
    files: `${srcFolder}/files/**/*.*`,
    img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    fonts: `${srcFolder}/fonts/**/*.{otf,ttf,woff,woff2}`,
    ttf: `${srcFolder}/fonts/**/*.ttf`,
    otf: `${srcFolder}/fonts/**/*.otf`,
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    js: `${srcFolder}/js/*.js`,
    scss: `${srcFolder}/scss/*.{scss,css}`,
    css: `${srcFolder}/scss/*.css`,
    files: `${srcFolder}/files/**/*.*`,
    img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}


export default paths
