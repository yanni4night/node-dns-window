/**
  * Copyright (C) 2016 yanni4night.com
  * index.jsx
  *
  * changelog
  * 2016-10-10[16:16:49]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, bindActionCreators} from 'redux';
import {Provider, connect} from 'react-redux';
import * as reducers from './reducers/';
import * as actionCreators from './action-creators';
import thunk from 'redux-thunk';
import Page from './coms/page.jsx';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Page);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector('#react-root'));