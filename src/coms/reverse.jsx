/**
  * Copyright (C) 2016 yanni4night.com
  * reverse.jsx
  *
  * changelog
  * 2016-10-11[15:52:58]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */

'use strict';
import React from 'react';

class Reverse extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Reverse';
    }
    reverse() {
        const ip = this.refs.input.value.trim();
        if (ip) {
            this.props.reverse(ip);
        }
    }
    render() {
        return (<div>
                <div className="input-group mt10">
                    <input type="text" className="form-control" placeholder="123.125.114.144" ref="input"/>
                    <span className="input-group-btn">
                        <button className="btn btn-secondary" type="button" onClick={this.reverse.bind(this)}>reverse</button>
                    </span>
                </div>
                <ul className="list-group list-group-flush mt10">
                    {this.props.reversedAddress.map((server, idx) => {
                        return <li key={idx} className="list-group-item">{server}</li>
                    })}
                </ul>
                </div>
                );
    }
}

export default Reverse;
