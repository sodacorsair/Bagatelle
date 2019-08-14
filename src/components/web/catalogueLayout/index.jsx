import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Button, Radio, Divider } from 'antd';

import './index.less';

class CatalogueLayout extends Component {
    state = {
        pathname: 'archives',
    }

    render() {
        const leftSide = { xxl: 18, xl: 18, lg: 18, sm: 24, xs: 24 };
        const rightSide = { xxl: 6, xl: 6, lg: 6, sm: 0, xs: 0 };
        return (
            <Layout className="catalogue-wrapper">
                <Row>
                    <Col {...leftSide}>
                        <div className="select-wrapper">
                            <span className="select-button">
                                <Link to="/tags" style={{ color: "#000" }}>Tags</Link>
                            </span>
                            <Divider type="vertical" />
                            <span className="select-button">
                                <Link to="/archives" style={{ color: "#000" }}>Archives</Link>
                            </span>
                            <Divider type="vertical" />
                            <span className="select-button">
                                <Link to="/categories" style={{ color: "#000" }}>Categories</Link>
                            </span>
                        </div>
                    </Col>
                    <Col {...rightSide} />
                </Row>
                <div className="list-wrapper">
                    {this.props.children}
                </div>
            </Layout>
        )
    }
}

export default CatalogueLayout;