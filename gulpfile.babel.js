"use strict";
import gulp, { series, parallel } from "gulp";
import sass from "gulp-sass";
import connect from "gulp-connect";

// Move html to dist
// TODO: minify --- https://github.com/jonschlinkert/gulp-htmlmin
export const html = () => {
  return gulp
    .src("./src/*.html")
    .pipe(gulp.dest("./dist"))
    .pipe(connect.reload());
};

// Compile sass into /dist/index.css
export const styles = () => {
  return gulp
    .src("./src/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist"))
    .pipe(connect.reload());
};

// Watch for changes
export const watch = () => {
  gulp.watch("./src/sass/**/*.scss", styles);
  gulp.watch("./src/*.html", html);
};

// Start development server
export const server = () => {
  return connect.server({
    root: "dist",
    port: 8080,
    livereload: true
  });
};

export const build = series(html, styles);
export const dev = series(build, parallel(watch, server));

export default build;
