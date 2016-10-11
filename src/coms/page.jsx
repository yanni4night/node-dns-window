/**
  * Copyright (C) 2016 yanni4night.com
  * page.jsx
  *
  * changelog
  * 2016-10-11[08:54:57]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';
import React from 'react';
import List from './list.jsx';
import Resolver from './resolve.jsx';
import Reverse from './reverse.jsx';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Page';
    }
    render() {
        return (<div><List {...this.props}/><Resolver {...this.props}/><Reverse {...this.props}/></div>);
    }
}

export default Page;
