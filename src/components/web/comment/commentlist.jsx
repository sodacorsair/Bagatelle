import React, { useState, useEffect, memo } from 'react';
import { connect } from 'react-redux';

import { random } from '@/lib';
import { Comment, Avatar, Button, Tooltip, Input, Icon, Popconfirm, message, Modal } from 'antd';
import moment from 'moment';

const { Textarea } = Input;

const CommentItem = ({
    children,
    item,
    openReply,
    fatherId,
    levelOneId,
    levelTwoId,
    handleChange,
    handleKeyUp,
    onSubmit,
    renderAvatar,
    delComment,
    auth,
    value,
}) => {
    const level = item.replies ? 1 : 2;
    function handleClick(level) {
        if (level === 1) openReply(level, item.id);
        else openReply(level, item.id, fatherId);
    }


    return (
        <Comment
            content={{ content }}
        >

        </Comment>
    )
}

const CommentList = (props) => {
    const { commentList, auth } = this.props;
    const { levelOneId, value, levelTwoId } = this.StaticRange;

    return (
        <div></div>
    )
}