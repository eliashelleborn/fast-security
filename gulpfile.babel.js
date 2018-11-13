"use strict";
import gulp, { series, parallel } from "gulp";
import sass from "gulp-sass";
import connect from "gulp-connect";
import sourcemaps from "gulp-sourcemaps";
import webpack from "webpack-stream";

// Move html to dist
// TODO: minify --- https://github.com/jonschlinkert/gulp-htmlmin
export const html = () => {
  return gulp
    .src("./src/index.html")
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
};

// Compile sass into /dist/index.css
export const styles = () => {
  return gulp
    .src("./src/sass/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./dist"))
    .pipe(connect.reload());
};

// Create JS bundle
export const js = () => {
  return gulp
    .src("src/js/index.js")
    .pipe(
      webpack({
        mode: "development",
        devtool: "source-map",
        output: { filename: "bundle.js" }
      })
    )
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
};

// Copy assets to dist
export const assets = () => {
  return gulp.src("./src/assets/**/*").pipe(gulp.dest("./dist/assets"));
};

// Watch for changes
export const watch = done => {
  gulp.watch("./src/sass/**/*.scss", styles);
  gulp.watch("./src/index.html", html);
  gulp.watch("./src/js/**/*.js", js);
  done();
};

// Start development server
export const server = done => {
  connect.server({
    root: "dist",
    port: 8080,
    livereload: true
  });
  done();
};

export const build = series(assets, styles, js, html);
export const dev = series(build, parallel(watch, server));

export default build;
