import React, { useState, useEffect } from 'react';
import axios from '@/lib/axios';

function Article() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [private, setPrivate] = useState(false);
    const [tags, setTags] = useState([]);
    const [cates, setCates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [postTime, setPostTime] = useState('');
    const [updateTime, setUpdateTime] = useState('');
    const [reads, setReads] = useState(0);

    useEffect(() => {
        id => {
            setLoading(true);
            axios.get(`article/get/${id}`)
                .then(res => {

                })
        }
    })
}