/**
  * Copyright (C) 2016 yanni4night.com
  * lookup.js
  *
  * changelog
  * 2016-10-11[14:25:16]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';
import * as T from '../action-types';

export function lookupedAddress(state = [], action) {
    if (T.ACTION_LOOKUP_SUCCESS === action.type) {
        return [...action.payload];
    } else if (T.ACTION_LOOKUP_FAILED === action.type) {
        return [];
    } else {
        return state;
    }
}