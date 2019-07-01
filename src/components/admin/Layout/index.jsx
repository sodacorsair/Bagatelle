import React, { Component } from 'react';
import './index.less';
import PropTypes from 'prop-types';

import Header from '../header';
import { Layout, Row, Col, BackTop } from 'antd';

const { Content, Footer } = Layout;

class AdminLayout extends Component {

    render() {
        const leftSide = { xxl: 2, xl: 2, lg: 2, sm: 0, xs: 0 };
        const content = { xxl: 22, xl: 22, lg: 22, sm: 24, xs: 24 };
        const rightSide = { xxl: 0, xl: 0, lg: 0, sm: 0, xs: 0 };

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
            </Layout>
        )
    }
}

export default AdminLayout;