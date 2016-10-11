/**
 * Copyright (C) 2016 yanni4night.com
 * pantofile.js
 *
 * changelog
 * 2016-10-10[15:46:37]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
module.exports = panto => {

    const DEV = process.env.NODE_ENV === 'development';

    panto.setOptions({
        cwd: __dirname,
        src: '.',
        output: 'dist'
    });

    require('load-panto-transformers')(panto);
    require('time-panto')(panto);

    panto.$('src/**/*.{js,jsx}').tag('src').read().babel({
        extend: `.babelrc`
    }).browserify({
        entry: 'src/index.jsx',
        bundle: 'app.js',
        process: {
            env: {
                NODE_ENV: 'production'
            }
        }
    }).uglify({
        isSkip: DEV
    }).write();

    panto.$('node_modules/bootstrap/dist/css/bootstrap.min.css', true).tag('reset').copy({
        flatten: true
    });

    panto.$('src/app.less').tag('less').read().less({
        lessOptions: {
            compress: true
        }
    }).write({
        destname: 'app.css'
    });
};