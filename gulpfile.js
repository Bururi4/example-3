'use strict';

const { src, dest, watch, series, task } = require('gulp');
const less = require('gulp-less');

const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

const LessAutoprefix = require('less-plugin-autoprefix');
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

task('less', function () {
    return src('./styles/style.less')
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./css'));
});

exports.watch = function () {
    watch('./styles/style.less', series('less'));
};