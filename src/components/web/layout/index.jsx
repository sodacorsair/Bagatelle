import React, { Component } from 'react';
import './index.less';
import PropTypes from 'prop-types';

import Header from '../../header';
import Footer from '../footer';
import { Layout, Row, Col, BackTop } from 'antd';
import { leftSide, rightSide, middle } from '@/lib';

class WebLayout extends Component {

    render() {
        return (
            <Layout className="app-container">
                <Header history={this.props.history} />
                <Row >
                    <Col className="layout-wrapper">
                        <div className="content-wrapper">
                            <Row className="inner-content-wrapper">{this.props.children}</Row>
                            <br />
                            <Footer />
                        </div>
                    </Col>
                </Row>
                <BackTop target={() => document.querySelector('.content-wrapper')} />
            </Layout>
        )
    }
}

export default WebLayout;