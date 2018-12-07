var gulp = require('gulp'),
    browserSync = require('browser-sync'),

    paths = {
        html:['index.html', 'hotels.html'],
        css: ['styles.css'],
        img: ['img']
    };

gulp.task('html', function () {
    gulp.src(paths.html)
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('css', function () {
    gulp.src(paths.css)
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function () {
    gulp.src(paths.img)
        .pipe(reload({stream: true}));
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: "./"
        },
        port: 8080,
        open: true,
        notify: false
    });
});

gulp.task('watcher', function () {
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.css, ['css']);
});

gulp.task('default', ['watcher', 'browserSync']);