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
        axios.get('/articles/about')
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
                    <h1 style={{ marginTop: "60px", fontSize: "30px", textAlign: "center" }}>关于我</h1>
                    <div style={{ marginTop: "20px", fontSize: "16px" }}>
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