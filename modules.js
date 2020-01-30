module.exports = {
    autoprefixer: require('gulp-autoprefixer'),
    browserSync: require('browser-sync'),
    cache : require('gulp-cached'),
    changed : require('gulp-changed'),
    concat: require('gulp-concat'),
    consolidate : require('gulp-consolidate'),
    crypto : require('crypto'),
    cssTimeStamp : require('gulp-timestamp-css-url'),
    del : require('del'),
    foreach : require('gulp-foreach'),
    gulpIf: require("gulp-if"),
    iconfont : require('gulp-iconfont'),
    imagemin : require('gulp-imagemin'),
    imageminGif : require('imagemin-gifsicle'),
    imageminJpg : require('imagemin-jpeg-recompress'),
    imageminPng : require('imagemin-pngquant'),
    pleeease : require('gulp-pleeease'),
    plumber: require("gulp-plumber"),
    pug: require('gulp-pug'),
    replace: require('gulp-replace'),
    stylus: require('gulp-stylus'),
    svgmin : require('gulp-svgmin'),
    unzip : require("gulp-unzip"),
    rename: require('gulp-rename'),
    webpack : require("webpack"),
    webpackStream : require("webpack-stream"),
    zip : require("gulp-zip")
};