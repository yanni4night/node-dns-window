/**
 * Copyright (C) 2016 yanni4night.com
 * action-creators.js
 *
 * changelog
 * 2016-10-11[08:58:37]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
import * as ActionTypes from './action-types';

export function loadServers() {
    return dispatch => {
        dispatch({
            type: ActionTypes.ACTION_UPDATE_SERVERS,
            payload: window.dns.getServers()
        });
    };
}