/**
  * Copyright (C) 2016 yanni4night.com
  * reverse.js
  *
  * changelog
  * 2016-10-11[15:54:14]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */

'use strict';
import * as T from '../action-types';

export function reversedAddress(state = [], action) {
    if (T.ACTION_REVERSE_SUCCESS === action.type) {
        return [...action.payload];
    } else if (T.ACTION_REVERSE_FAILED === action.type) {
        return [];
    } else {
        return state;
    }
}