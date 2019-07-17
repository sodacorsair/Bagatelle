import React, { useState, useEffect, Fragment } from 'react';
import Loading from "@/components/helper/loading";
import axios from '@/lib/axios';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@/components/markdown/codeblock';
import { Divider } from 'antd';

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
                <Loading />
            ) : (
                    <Fragment>
                        <div className="article-header">
                            <h1 className="article-title">{title}</h1>

                            <br />
                            <div className="aritcle-attri">
                                &nbsp; 发表于 &nbsp;
                            <span>{postTime}</span>
                                &nbsp; 最后编辑于 &nbsp;
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
                    </Fragment>
                )}
        </div>
    )
}

export default Article;