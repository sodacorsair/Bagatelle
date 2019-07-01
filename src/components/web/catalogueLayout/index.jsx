import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Button } from 'antd';

import './index.less';

class CatalogueLayout extends Component {

    render() {

        return (
            <Layout className="catalogue-wrapper">
                <Button.Group className="select-wrapper">
                    <Button className="select-button">
                        <Link to={'/tags'}>Tags</Link>
                    </Button>
                    <Button className="select-button">
                        <Link to={'/archives'}>Archives</Link>
                    </Button>
                    <Button className="select-button">
                        <Link to={'/volumes'}>Volumes</Link>
                    </Button>
                </Button.Group>
                <Row >
                    <Col>
                        <div className="list-wrapper">
                            {this.props.children}
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default CatalogueLayout;