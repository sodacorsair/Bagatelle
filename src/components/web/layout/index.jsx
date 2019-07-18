import React, { Component } from 'react';
import './index.less';
import PropTypes from 'prop-types';

import Header from '../../header';
import { Layout, Row, Col, BackTop } from 'antd';

const { Content, Footer } = Layout;

class WebLayout extends Component {

    render() {
        return (
            <Layout className="app-container">
                <Header history={this.props.history} />
                <Row className="main-wrapper">
                    <Col >
                        <div className="content-wrapper">
                            {this.props.children}
                        </div>
                    </Col>
                </Row>
                <BackTop target={() => document.querySelector('.content-wrapper')} />
            </Layout>
        )
    }
}

export default WebLayout;