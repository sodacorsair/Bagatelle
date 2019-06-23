import React, { Component } from 'react';
import PorpTypes from 'prop-types';

class WebLayout extends Component {
    static propTypes = {
        children: PorpTypes.node,
    }

    render() {
        return (
            <div className="web-Weblayout">
                <div className="web-page-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default WebLayout;