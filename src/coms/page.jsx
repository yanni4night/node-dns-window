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

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Page';
    }
    componentDidMount() {
        this._int = setInterval(() => {
            this.props.loadServers();
        }, 1e3);
    }
    componentWillUnmount() {
        clearInterval(this._int);
    }
    componentWillUpdate(nextProps) {
        if (nextProps.servers.length !== this.props.servers.length) {
            return true;
        }

        const a = nextProps.servers.sort();
        const b = this.props.servers.sort();

        for (let i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) {
                return true;
            }
        }

        return false;
    }
    render() {
        return (<ul className="list-group list-group-flush">
                    {this.props.servers.map((server, idx) => {
                        return <li key={idx} className="list-group-item">{server}</li>
                    })}
                </ul>);
    }
}

export default Page;
