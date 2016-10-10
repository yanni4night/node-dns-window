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
    panto.setOptions({
        cwd: __dirname,
        src: 'src',
        output: 'dist'
    });

    require('load-panto-transformers')(panto);
    require('time-panto')(panto);

    panto.$('*.jsx').tag('src').read().babel({
        extend: '.babelrc'
    }).browserify({
        entry: 'index.jsx',
        bundle: 'app.js',
        process: {
            env: {
                NODE_ENV: 'production'
            }
        }
    }).write();
};