import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Col, Row, Input, Button } from 'antd';

const { TextArea } = Input;

function Write() {

    const leftSide = { xxl: 11, xl: 5, lg: 5, sm: 0, xs: 0 };
    const rightSide = { xxl: 11, xl: 19, lg: 19, sm: 24, xs: 24 };

    const [value, setValue] = useState('');

    return (
        <Row>
            <Col {...leftSide}>
                <TextArea rows={20} onChange={e => setValue(e.target.value)} style={{ width: "80%" }} />
            </Col>
            <Col {...rightSide}>
                <p>
                    <ReactMarkdown source={value} style={{ margin: "20px" }} style={{ overflow: "auto" }} />
                </p>
            </Col>
        </Row>

    )

}

export default Write;