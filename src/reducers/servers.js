/**
 * Copyright (C) 2016 yanni4night.com
 * servers.js
 *
 * changelog
 * 2016-10-10[20:58:35]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
import * as T from '../action-types';

export function servers(state = [], action) {
    if (T.ACTION_UPDATE_SERVERS === action.type) {
        return [...action.payload];
    } else {
        return state;
    }
}