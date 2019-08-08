import React, { useState, useEffect, Fragment } from 'react';
import Loading from "@/components/helper/loading";
import axios from '@/lib/axios';
import { leftSide, rightSide, middle } from '@/lib';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@/components/markdown/codeblock';
import Comment from '@/components/web/comment';
import { Divider, Col, Tag } from 'antd';

import './index.less';

function Article(props) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isPrivate, setPrivate] = useState(false);
    const [tags, setTags] = useState([]);
    const [cates, setCates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [postTime, setPostTime] = useState('');
    const [updateTime, setUpdateTime] = useState('');
    const [reads, setReads] = useState(0);

    useEffect(() => {
        (id => {
            setLoading(true);
            axios.get(`article/get/${id}`)
                .then(res => {
                    console.log(res);
                    const { title, content, isPrivate, tags, cates, postTime, updateTime, reads } = res;
                    setTitle(title);
                    setContent(content);
                    setPrivate(isPrivate);
                    setTags(tags);
                    setCates(cates);
                    setPostTime(postTime);
                    setUpdateTime(updateTime);
                    setReads(reads);
                    setLoading(false);
                })
                .catch(res => {
                    props.history.push('/404');
                });
        })(props.match.params.id);
    }, [props.match.params.id]);

    return (
        <div className="article-wrapper">
            {loading ? (
                <Loading className="article-loading" />
            ) : (
                    <Fragment>
                        <Col {...leftSide} />
                        <Col {...middle}>
                            <div className="article-header">
                                <h1 className="article-title">{title}</h1>

                                <br />
                                <div className="aritcle-attri">
                                        &nbsp; posted at &nbsp;
                                    <span>{postTime}</span>
                                        &nbsp; recently updated at &nbsp;
                                    <span>{postTime}</span>
                                </div>
                            </div>
                            <Divider type="horizontal" />

                            <div className="article-body">
                                <ReactMarkdown
                                    source={content}
                                    escapeHtml={false}
                                    renderers={{ code: CodeBlock }}
                                />
                            </div>

                            <Divider type="horizontal" />
                            <div>
                                <span>category </span>
                                {cates.map((item) => (
                                    <Tag color={'#556B2F'} key={item.Name}>
                                        <Link to={`/cates/${item.Name}`}>{item.Name}</Link>
                                    </Tag>
                                ))}
                                <span>tag </span>
                                {tags.map((item) => (
                                    <Tag color={'#000080'} key={item.Name}>
                                        <Link 
                                            to={`/tags/${item.Name}`}
                                        >
                                            <span style={{ fontSize: "14px" }}>{item.Name}</span>
                                        </Link>
                                    </Tag>
                                ))}
                            </div>

                            {/* <Comment /> */}
                        </Col>
                        <Col {...rightSide} />
                    </Fragment>
                )}
        </div>
    )
}

export default Article;