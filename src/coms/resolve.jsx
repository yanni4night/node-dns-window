/**
  * Copyright (C) 2016 yanni4night.com
  * resolve.jsx
  *
  * changelog
  * 2016-10-11[14:48:16]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';
import React from 'react';

class Resolver extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Resolver';
    }
    resolve() {
        const hostname = this.refs.input.value.trim();
        if (hostname) {
            this.props.lookup(hostname);
        }
    }
    render() {
        return (<div>
                <div className="input-group mt10">
                    <input type="text" className="form-control" placeholder="google.com" ref="input"/>
                    <span className="input-group-btn">
                        <button className="btn btn-secondary" type="button" onClick={this.resolve.bind(this)}>resolve</button>
                    </span>
                </div>
                <ul className="list-group list-group-flush mt10">
                    {this.props.lookupedAddress.map((server, idx) => {
                        return <li key={idx} className="list-group-item">{server.address}</li>
                    })}
                </ul>
                </div>
                );
    }
}

export default Resolver;
