import React, { Component } from 'react';
import './index.less';
import PropTypes from 'prop-types';

import Header from '../../header';
import { Layout, Row, Col, BackTop } from 'antd';

const { Content, Footer } = Layout;

class WebLayout extends Component {

    render() {
        const leftSide = { xxl: 5, xl: 5, lg: 5, sm: 0, xs: 0 };
        const content = { xxl: 19, xl: 19, lg: 19, sm: 24, xs: 24 };
        const rightSide = { xxl: 0, xl: 0, lg: 0, sm: 0, xs: 0 };

        return (
            <Layout className="app-container">
                <Header history={this.props.history} />
                <Row className="main-wrapper">
                    <Col {...leftSide} />
                    <Col {...content}>
                        <div className="content-wrapper">
                            {this.props.children}
                        </div>
                    </Col>
                    <Col {...rightSide} />
                </Row>
                <BackTop target={() => document.querySelector('.content-wrapper')} />
            </Layout>
        )
    }
}

export default WebLayout;