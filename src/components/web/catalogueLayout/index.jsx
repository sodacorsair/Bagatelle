import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Button } from 'antd';

import './index.less';

class CatalogueLayout extends Component {

    render() {
        const leftSide = { xxl: 18, xl: 18, lg: 18, sm: 24, xs: 24 };
        const rightSide = { xxl: 6, xl: 6, lg: 6, sm: 0, xs: 0 };
        return (
            <Layout className="catalogue-wrapper">
                <Row>
                    <Col {...leftSide}>
                        <Button.Group className="select-wrapper">
                            <Button className="select-button">
                                <Link to={'/tags'}>Tags</Link>
                            </Button>
                            <Button className="select-button">
                                <Link to={'/archives'}>Archives</Link>
                            </Button>
                            <Button className="select-button">
                                <Link to={'/categories'}>Volumes</Link>
                            </Button>
                        </Button.Group>
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