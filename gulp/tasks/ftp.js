import { configFTP } from '../config/ftp.js';
import { vinylFTP } from 'vinyl-ftp';
import { util } from 'gulp-util';

export const ftp = () => {
    configFTP.log = util.log;
    const ftpConnection = vinylFTP.create(configFTP)
    return app.gulp.src(`${app.path.src.buildFolder}/**/*.*`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(ftpConnection.dest(`/${app.path.ftp}/${app.path.rootFolder}`))
}

// TODO: install vinyl-ftp gulp-util