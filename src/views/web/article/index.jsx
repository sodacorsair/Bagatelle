import React, { Component, Fragment, useState, useEffect } from 'react';
import './index.less';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import Loading from '@/components/helper/loading';
import axios from '@/lib/axios';
import Comment from '@/components/web/comment';
import { Divider } from 'antd';

function Article(props) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState([]);
    const [volume, setVolumes] = useState([]);
    const [postTime, setPostTime] = useState('');
    const [commentList, setCommentList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (id => {
            setLoading(true);
            axios.get(`/article/get/${id}`)
                .then(res => {
                    const { content, title, createdAt, tags, categories, comments } = res.data;
                    setTags(tags);
                    setVolumes(volume);
                    setTitle(title);
                    setContent(content);
                    setPostTime(postTime);
                    setCommentList(comments);
                    setLoading(false);
                })
                .catch(err => {
                    props.history.push('/404');
                })
        })(props.match.params.id);
    }, [props.match.params.id])

    const articleId = parseInt(props.match.params.id)
    return (
        <div className="content-inner-wrapper article">
            {loading ? (
                <Loading />
            ) : (
                    <Fragment>
                        <div className="post-header">
                            <h1 className="post-title">{title}</h1>

                            <div className="post-body">
                                <i className="post-icon" />
                                &nbsp; Posted on &nbsp;
                                <span>{postTime}</span>
                                <div>This is tag list</div>
                                <div>This is volume list</div>
                                <Divider type="message" style={{ marginRight: 7 }} />
                                there're 4 comments
                            </div>
                        </div>

                        <ReactMarkdown source={content} escapeHtml={false} />

                        <Comment articleId={articleId} commentList={commentList} setCommentList={setCommentList} />
                    </Fragment>
                )}
        </div>
    )
}

export default connect(
    state => {

    }, {}
)(Article);
