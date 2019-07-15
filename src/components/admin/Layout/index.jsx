import React, { Component } from 'react';
import './index.less';
import PropTypes from 'prop-types';

import Header from '../header';
import { Layout, Row, Col, BackTop } from 'antd';

const { Content, Footer } = Layout;

class AdminLayout extends Component {

    render() {

        return (
            <Layout className="app-container">
                <Header />
                <Row className="main-wrapper">
                    <div className="content-wrapper">
                        {this.props.children}
                    </div>
                </Row>
            </Layout>
        )
    }
}

export default AdminLayout;