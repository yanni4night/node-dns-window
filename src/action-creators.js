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
import * as _t from './action-types';

const dns = window.dns;

export function loadServers() {
    return dispatch => {
        dispatch({
            type: _t.ACTION_UPDATE_SERVERS,
            payload: dns.getServers()
        });
    };
}

export function lookup(hostname) {
    return dispatch => {
        dns.lookup(hostname, {all: true, family: 4}, (err, address) => {
            if (err) {
                dispatch({
                    type: _t.ACTION_LOOKUP_FAILED
                });
            } else {
                dispatch({
                    type: _t.ACTION_LOOKUP_SUCCESS,
                    payload: address
                });
            }
        });
    };
}

export function reverse(ip) {
    return dispatch => {
        dns.reverse(ip, (err, hostnames) => {
            if (err) {
                dispatch({
                    type: _t.ACTION_REVERSE_FAILED
                });
            } else {
                dispatch({
                    type: _t.ACTION_REVERSE_SUCCESS,
                    payload: hostnames
                });
            }
        });
    };
}