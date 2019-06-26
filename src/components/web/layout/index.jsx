import React, { Component } from 'react';
import './index.less';
import PropTypes from 'prop-types';

import Header from '../header';
import { Layout, Row, Col, BackTop } from 'antd';

const { Content, Footer } = Layout;

class WebLayout extends Component {

    render() {
        const leftSide = { xxl: 2, xl: 2, lg: 2, sm: 0, xs: 0 };
        const content = { xxl: 20, xl: 20, lg: 20, sm: 24, xs: 24 };
        const rightSide = { xxl: 2, xl: 2, lg: 2, sm: 0, xs: 0 };

        return (
            <Layout className="app-container">
                <Header />
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
                <Footer className="footer">
                    © 2019 Motivated Strongly by Bagatelle!
                </Footer>
            </Layout>
        )
    }
}

export default WebLayout;