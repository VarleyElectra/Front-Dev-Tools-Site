const { src, dest, watch, parallel, series } = require("gulp");

const scss          = require("gulp-sass");
const concat        = require("gulp-concat");
const browserSync   = require("browser-sync").create();
const uglify        = require("gulp-uglify-es").default;
const autoPrefixer  = require("gulp-autoprefixer");
const imageMin      = require("gulp-imagemin");
const del           = require("del");




/* Функция по автоматическому обновлению веб-сайта, если изменяется содержимое папки "app/" */
function browsersync() {
    browserSync.init({
        server: {
            baseDir: "app/",
        }
    });
}




/* Функция для сжатия изображений */
function images() {
    return src("app/images/**/*")
        .pipe(imageMin(
            [
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]
        ))
        .pipe(dest("dist/images"))
}




/* Удалить dist, чтобы в dist не сохранялись уже не используемые файлы*/
function cleanDist(params) {
    return del("dist")
}




/* Функция по конвертации js файлов в 1 js-файл main.min.js */
function scripts() {
    return src([
        "app/js/main.js"
    ])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("app/js"))
    .pipe(browserSync.stream());
}

/* Сборка приложения - отправляет выбранные файлы в папку dist */
function build() {
    return src([
        "app/css/*.css",
        "app/fonts/**/*",
        "app/js/main.min.js",
        "app/*.html",
    ], {base: "app"}) // Этот параметр позволяет копировать структуру папки app, при создании файлов в dist 
    .pipe(dest("dist"))
}


/* Функция по конвертации scss файлов в css */
function stylesNull() {
    return src("app/scss/null.scss") // Загрузить файл style.scss
        .pipe(scss({outputStyle: "compressed"})) // Минифицировать его (если убрать параметр у функции, то будет обычный css-файл)
        .pipe(concat("null.min.css")) // Добавить название файлу
        .pipe(autoPrefixer({
            overrideBrowserlist: ["last 10 version"],
            grid: true,
        }))
        .pipe(dest("app/css")) // Отправить в папку app/css
        .pipe(browserSync.stream()); // Обновить страницу браузера
}


/* Функция по конвертации scss файлов в css */
function stylesHeader() {
    return src("app/scss/header.scss") // Загрузить файл style.scss
        .pipe(scss({outputStyle: "compressed"})) // Минифицировать его (если убрать параметр у функции, то будет обычный css-файл)
        .pipe(concat("header.min.css")) // Добавить название файлу
        .pipe(autoPrefixer({
            overrideBrowserlist: ["last 10 version"],
            grid: true,
        }))
        .pipe(dest("app/css")) // Отправить в папку app/css
        .pipe(browserSync.stream()); // Обновить страницу браузера
}

/* Функция по конвертации scss файлов в css */
function stylesFooter() {
    return src("app/scss/footer.scss") // Загрузить файл style.scss
        .pipe(scss({outputStyle: "compressed"})) // Минифицировать его (если убрать параметр у функции, то будет обычный css-файл)
        .pipe(concat("footer.min.css")) // Добавить название файлу
        .pipe(autoPrefixer({
            overrideBrowserlist: ["last 10 version"],
            grid: true,
        }))
        .pipe(dest("app/css")) // Отправить в папку app/css
        .pipe(browserSync.stream()); // Обновить страницу браузера
}


/* Функция по конвертации scss файлов в css */
function stylesIndex_html() {
    return src("app/scss/style.scss") // Загрузить файл style.scss
        .pipe(scss({outputStyle: "compressed"})) // Минифицировать его (если убрать параметр у функции, то будет обычный css-файл)
        .pipe(concat("style.min.css")) // Добавить название файлу
        .pipe(autoPrefixer({
            overrideBrowserlist: ["last 10 version"],
            grid: true,
        }))
        .pipe(dest("app/css")) // Отправить в папку app/css
        .pipe(browserSync.stream()); // Обновить страницу браузера
}


/* Функция по конвертации scss файлов в css */
function stylesFilter_html() {
    return src("app/scss/filter.scss") 
        .pipe(scss({outputStyle: "compressed"})) // Минифицировать его (если убрать параметр у функции, то будет обычный css-файл)
        .pipe(concat("filter.min.css")) // Добавить название файлу
        .pipe(autoPrefixer({
            overrideBrowserlist: ["last 10 version"],
            grid: true,
        }))
        .pipe(dest("app/css")) // Отправить в папку app/css
        .pipe(browserSync.stream()); // Обновить страницу браузера
}


/* Функция по конвертации scss файлов в css */
function stylesFlexbox_html() {
    return src("app/scss/flexbox.scss") 
        .pipe(scss({outputStyle: "compressed"})) // Минифицировать его (если убрать параметр у функции, то будет обычный css-файл)
        .pipe(concat("flexbox.min.css")) // Добавить название файлу
        .pipe(autoPrefixer({
            overrideBrowserlist: ["last 10 version"],
            grid: true,
        }))
        .pipe(dest("app/css")) // Отправить в папку app/css
        .pipe(browserSync.stream()); // Обновить страницу браузера
}


/* Функция по конвертации scss файлов в css */
function stylesGradient_html() {
    return src("app/scss/gradient.scss") 
        .pipe(scss({outputStyle: "compressed"})) // Минифицировать его (если убрать параметр у функции, то будет обычный css-файл)
        .pipe(concat("gradient.min.css")) // Добавить название файлу
        .pipe(autoPrefixer({
            overrideBrowserlist: ["last 10 version"],
            grid: true,
        }))
        .pipe(dest("app/css")) // Отправить в папку app/css
        .pipe(browserSync.stream()); // Обновить страницу браузера
}


/* Функция по конвертации scss файлов в css */
function stylesGrid_html() {
    return src("app/scss/grid.scss") 
        .pipe(scss({outputStyle: "compressed"})) // Минифицировать его (если убрать параметр у функции, то будет обычный css-файл)
        .pipe(concat("grid.min.css")) // Добавить название файлу
        .pipe(autoPrefixer({
            overrideBrowserlist: ["last 10 version"],
            grid: true,
        }))
        .pipe(dest("app/css")) // Отправить в папку app/css
        .pipe(browserSync.stream()); // Обновить страницу браузера
}


/* Функция по конвертации scss файлов в css */
function stylesShadow_html() {
    return src("app/scss/shadow.scss") 
        .pipe(scss({outputStyle: "compressed"})) // Минифицировать его (если убрать параметр у функции, то будет обычный css-файл)
        .pipe(concat("shadow.min.css")) // Добавить название файлу
        .pipe(autoPrefixer({
            overrideBrowserlist: ["last 10 version"],
            grid: true,
        }))
        .pipe(dest("app/css")) // Отправить в папку app/css
        .pipe(browserSync.stream()); // Обновить страницу браузера
}


/* Функция по конвертации scss файлов в css */
function stylesText_html() {
    return src("app/scss/text.scss") 
        .pipe(scss({outputStyle: "compressed"})) // Минифицировать его (если убрать параметр у функции, то будет обычный css-файл)
        .pipe(concat("text.min.css")) // Добавить название файлу
        .pipe(autoPrefixer({
            overrideBrowserlist: ["last 10 version"],
            grid: true,
        }))
        .pipe(dest("app/css")) // Отправить в папку app/css
        .pipe(browserSync.stream()); // Обновить страницу браузера
}


/* Функция для автоматического обновления содержимого файлов (например scss), чтобы каждый раз не перекомпилировать */
function watching() {
    /* 
    ** - следить за всеми каталогами и подкаталогами, а также самим содержимым папки, 
    *.scss - следить за всеми файлами с расширением scss
    */
    watch(["app/scss/**/null.scss"], stylesNull);
    watch(["app/scss/**/header.scss"], stylesHeader);
    watch(["app/scss/**/footer.scss"], stylesFooter);
    watch(["app/scss/**/style.scss"], stylesIndex_html);
    watch(["app/scss/**/filter.scss"], stylesFilter_html);
    watch(["app/scss/**/flexbox.scss"], stylesFlexbox_html);
    watch(["app/scss/**/gradient.scss"], stylesGradient_html);
    watch(["app/scss/**/grid.scss"], stylesGrid_html);
    watch(["app/scss/**/shadow.scss"], stylesShadow_html);
    watch(["app/scss/**/text.scss"], stylesText_html);
    /* Следить за всеми js-файлами, кроме файла app/js/main.min.js, т.к. перед ним стоит восклицательный знак */
    watch(["app/js/**/*.js", "!app/js/main.min.js"], scripts); 
    watch(["app/*.html"]).on("change", browserSync.reload);
}



/* Для запуска сценариев нужно в терминале писать команду: gulp <название команды>. Например, gulp stylesIndex_html - запускает функцию stylesIndex_html. */
exports.stylesNull = stylesNull;
exports.stylesHeader = stylesHeader;
exports.stylesFooter = stylesFooter;
exports.stylesIndex_html = stylesIndex_html;
exports.stylesFilter_html = stylesFilter_html;
exports.stylesFlexbox_html = stylesFlexbox_html;
exports.stylesGradient_html = stylesGradient_html;
exports.stylesGrid_html = stylesGrid_html;
exports.stylesShadow_html = stylesShadow_html;
exports.stylesText_html = stylesText_html;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;


/* При запуске команды gulp build, запускаются строго последовательно функции-параметры */
exports.build = series(cleanDist, images, build);
/* При запуске команды gulp, запускаются параллельно функции browsersync и watching и scripts. */
exports.default = parallel(stylesNull, stylesHeader, stylesFooter, stylesIndex_html, stylesFilter_html, stylesFlexbox_html, stylesGradient_html, stylesGrid_html, stylesShadow_html, scripts, browsersync, watching);   