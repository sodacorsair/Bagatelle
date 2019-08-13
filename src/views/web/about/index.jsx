import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Divider } from 'antd';
import axios from '@/lib/axios';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@/components/markdown/codeblock';
import { leftSide, rightSide, middle } from '@/lib';

class About extends Component {

    state = {
        content: '',
    }

    componentDidMount() {
        axios.get('/article/get/0')
            .then(res => {
                this.setState({ content: res.content });
            });
    }

    render() {
        const { content } = this.state;

        return (
            <div>
                <Col {...leftSide} />
                <Col {...middle}>
                    <div style={{ marginTop: "100px" }}>
                        <ReactMarkdown
                            source={content}
                            escapeHtml={false}
                            renderers={{ code: CodeBlock }}
                        />
                    </div>
                </Col>
                <Col {...rightSide} />
            </div>
        )
    }
}

export default About;