import React from 'react';
import './index.less';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

const PageNotFound = () => {
    return (
        <div className="not-found-wrapper">
            <Row style={{ height: 400 }}>
                <span className="hint">页面缺失</span>
            </Row>
            <Row>
                <Link to="/">返回首页</Link>
            </Row>
        </div>
    )
}

export default PageNotFound;