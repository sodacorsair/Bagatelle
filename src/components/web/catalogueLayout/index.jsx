import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Button, Radio } from 'antd';

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
                        <Radio.Group className="select-wrapper">
                            <Radio.Button className="select-button" value="tags">
                                <Link to="/tags">Tags</Link>
                            </Radio.Button>
                            <Radio.Button className="select-button" value="archives">
                                <Link to="/archives">Archives</Link>
                            </Radio.Button>
                            <Radio.Button className="select-button" value="categories">
                                <Link to="/categories">Categories</Link>
                            </Radio.Button>
                        </Radio.Group>
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