import * as nodePath from 'path'


const rootFolder = nodePath.basename(nodePath.resolve())
const buildFolder = `./dist`
const srcFolder = `./src`
const paths = {
  build: {
    files: `${buildFolder}/files/`,
    html: `${buildFolder}/`
  },
  src: {
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/**/!(_*)*.html`,

  },
  watch: {
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/**/*.html`,

  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}


export default paths
