import svgSprite from "gulp-svg-sprite";  

export const svgSprite = () => {
    return app.gulp.src(app.path.src.svgSprite)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: `../icons/icons.svg`,
                    // Создать страницу с перечнем иконок
                    example: true
                }
            }
        }))
        .pipe(app.gulp.dest(app.path.build.images))
}

// TODO: install gulp-svg-sprite