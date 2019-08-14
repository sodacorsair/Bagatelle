import React, { useEffect, useState, Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import { Col, Row, Input, Button, BackTop, Checkbox, message } from 'antd';
import { connect } from 'react-redux';
import SimpleMDE from 'simplemde';
import CodeBlock from '@/components/markdown/codeblock';
import { postArticle } from '@/redux/article/actionCreators';
import TagsSelector from './selector';

import 'simplemde/dist/simplemde.min.css';
import './index.less';
import { async } from 'q';
import axios from '@/lib/axios';

const { TextArea } = Input;

class Write extends React.Component {

    // const [isPreview, setPreview] = useState(true);

    state = {
        title: '',
        content: '',
        isEdit: false,
        isTop: false,
        isPrivate: false,
    }

    // Editor = () => {

    //     useEffect(() => {
    //         this.simpleMDE = new SimpleMDE({
    //             element: document.getElementById('editor').childElementCount,
    //             autofocus: true,
    //             autosave: true
    //         });
    //         // if (isPreview) {
    //         //     simpleMDE.codemirror.on("change", () => setContent(simpleMDE.value()));
    //         // }
    //     }, []);



    //     // const onChange = e => {
    //     //     setPreview(e.target.checked);
    //     //     setContent(simpleMDE.value());
    //     //     if (isPreview) {
    //     //         setLeftSide({ xxl: 12, xl: 5, lg: 5, sm: 0, xs: 0 });
    //     //     } else {
    //     //         setLeftSide({xxl: 23, xl: 23, lg:23, sm: 23, xs: 23});
    //     //     }
    //     // }
    // }

    componentDidMount() {
        this.simpleMDE = new SimpleMDE({
            element: document.getElementById('editor').childElementCount,
            autofocus: true,
            autosave: true,
            tabSize: 4,
            placeholder: "Write what you wanna write...",
        });

        var id = -1;
        id = this.props.match.params.id;

        if (id > 0) {
            axios.get(`article/get/${id}`)
                .then(res => {
                    const { title, tags, cates, content } = res;
                    this.simpleMDE.value(content);
                    const tagList = tags.map(d => d.name);
                    const categoryList = cates.map(d => d.name);
                    this.setState({ title, tagList, categoryList, isEdit: true, articleId: id });
                    this.$tagRef.setResult(['dd', 'dd']);
                    this.$cateRef.setResult(categoryList);
                });
        }
    }

    handleSubmit = () => {
        const submitTags = this.$tagRef.getResult();
        const submitCates = this.$cateRef.getResult();
        const submitTitle = this.state.title;
        const submitContent = this.simpleMDE.value();
        const submitTop = this.state.isTop;
        const submitPrivate = this.state.isPrivate;
        if (submitTitle === '') {
            message.error('请输入标题！');
            return;
        }
        axios.post('/article/post', { submitTags, submitCates, submitTitle, submitContent, submitTop, submitPrivate })
            .then(res => {
                message.success('文章发表成功');
                const { articleid } = res;
                this.props.history.push(`/article/${articleid}`)
            })
            .catch(res => {
                message.error('文章发表失败');
            });
    }

    render() {
        const leftSide = { xxl: 5, xl: 2, lg: 2, sm: 0, xs: 0 };
        const middle = { xxl: 14, xl: 20, lg: 20, sm: 24, xs: 24 };
        const rightSide = { xxl: 5, xl: 2, lg: 2, sm: 0, xs: 0 };
        const { content, title, isEdit } = this.state;
        return (
            <div>
                <div>
                    <Row>
                        <Col {...leftSide} />
                        <Col {...middle} className="edit-wrapper">
                            <div className="blog-edit-title">
                                <span className="label">标题：</span>
                                <Input
                                    placeholder="请输入文章标题"
                                    className="title-input"
                                    name="title"
                                    value={title}
                                    onChange={e => this.setState({ title: e.target.value })}
                                    onBlur={e => this.setState({ title: e.target.value })}
                                    onPressEnter={e => this.setState({ title: e.target.value })}
                                />
                            </div>
                            <br />
                            <TagsSelector onRef={el => this.$tagRef = el} type={"tag"} />
                            <br />
                            <TagsSelector onRef={el => this.$cateRef = el} type={"cate"} />
                            <br />
                            <TextArea id="editor" defaultValue={content} className="editor-area" />
                            <Button className="submit-button" onClick={this.handleSubmit} type="primary">
                                {isEdit ? '更新文章' : '添加文章'}
                            </Button>
                            <span className="checkbox-lable" style={{ marginLeft: "15px" }}>文章置顶 </span>
                            <Checkbox className="checkbox" onChange={e => this.setState({ isTop: e.target.checked })} style={{ marginLeft: "5px" }} />
                            <span className="checkbox-lable" style={{ marginLeft: "5px" }}>仅自己可见</span>
                            <Checkbox className="checkbox" onChange={e => this.setState({ isPrivate: e.target.checked })} />
                            {/* <span className="preview-label">动态预览 </span>
                                <Checkbox 
                                    className="preview-check" 
                                    onChange={e => onChange(e)} 
                                    defaultChecked={isPreview} /> */}
                        </Col>
                        <Col {...rightSide} />
                    </Row>

                    {/* {isPreview ? (
                        <Col className="code-mirror-side" {...rightSide}>
                            <ReactMarkdown 
                                source={content}
                                style={{ margin: "20px", overflow: "auto" }}  
                                renderers={{code: CodeBlock}}
                            />
                        </Col>
                    ) : (<br />)} */}

                </div>
                <BackTop />
            </div>

        )
    }
}

export default connect(
    store => store.article,
    { postArticle }
)(Write);