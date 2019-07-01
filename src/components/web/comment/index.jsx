import React, { Component, Fragment, useState, useEffect } from 'react';
import './index.less';
import axios from '@/lib/axios';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { getCommentsCount } from '@/lib';
import { login, logout } from '@/redux/user/actionCreators';

import { Comment, Avatar, Form, Button, Divider, Input, Icon, Menu, Dropdown, message, Modal } from 'antd';
import CommentList from './commentlist';

const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value, articleId }) => (
    <div>
        <Form.Item>
            <TextArea rows={4} placeholder="说点啥" onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <div className="controls">
                <i className="iconfont icon-tips" />
                <span className="support-tip">支持 Markdown 语法</span>
                <Button
                    loading={submitting} onClick={onSubmit} type="primary"
                >
                    {articleId !== -1 ? '添加评论' : '留言'}
                </Button>
            </div>
        </Form.Item>
    </div>
)

function ArticleComment(props) {
    const [value, setValue] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = () => {

    }

    const handleMenuClick = e => {

    }

    const renderDropDownMenu = () => {

    }

    const { username, articleId, userId, commentList } = props;

    return (
        <div className="comment-wrapper">
            <div className="comment-header">
                <span className="count">
                    {getCommentsCount(commentList)}
                </span>
                <span>{articleId !== -1 ? '条评论' : '条留言'}</span>
                <span className="menu-wrapper">
                    <Dropdown overlay={renderDropDownMenu()} trigger={[]}>
                        <span>
                            {username ? username : '未登录用户'} <Icon type="down" />
                        </span>
                    </Dropdown>
                </span>
                <Divider className="hr" />
            </div>

            <Comment
                avatar={
                    username ? (
                        <Fragment>
                            {userId !== 1 ? (
                                <Avatar />
                            ) : (
                                    <Avatar />
                                )}
                        </Fragment>
                    ) : (
                            <Icon type="github" theme="filled" style={{ fontSize: 40, margin: '5px 5px 0 0' }} />
                        )
                }
                content={
                    <Editor
                        onChange={e => setValue(e.target.value)}
                        onSubmit={handleSubmit}
                        submitting={submitting}
                        value={value}
                        articleId={articleId}
                    />
                }
            />

            {commentList.map(comment => (
                <Comment key={comment.id} content={<ReactMarkdown source={comment.content} />}>
                    {comment.replies.map(reply => (
                        <Comment key={reply.id} content={<ReactMarkdown source={reply.content} />} />
                    ))}
                </Comment>
            ))}
        </div>
    )
}

export default connect(
    state => state.user,
    { login, logout }
)(ArticleComment)