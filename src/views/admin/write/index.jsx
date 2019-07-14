import React, { useEffect, useState, Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import { Col, Row, Input, Button, BackTop, Checkbox } from 'antd';
import { connect } from 'react-redux';
import SimpleMDE from 'simplemde';
import CodeBlock from '@/components/markdown/codeblock';
import { changePreview } from '@/redux/article/actionCreators';
import TagsSelector from './selector';

import 'simplemde/dist/simplemde.min.css';
import './index.less';

const { TextArea } = Input;

function Write() {
    let simpleMDE;
    let isUpdate = false;

    const rightSide = { xxl: 11, xl: 19, lg: 19, sm: 24, xs: 24 };

    const [isPreview, setPreview] = useState(true);

    

    const Editor = () => {
        const [title, setTitle] = useState('');
        const [content, setContent] = useState('');
        const [leftSide, setLeftSide] = useState([]);
    
        useEffect(() => {
            simpleMDE = new SimpleMDE({
                element: document.getElementById('editor').childElementCount,
                autofocus: true,
                autosave: true
            });
            if (isPreview) {
                simpleMDE.codemirror.on("change", () => setContent(simpleMDE.value()));
            }
        }, [isPreview]);
    
        const handleSubmit = () => {
    
        }

        const onChange = e => {
            setPreview(e.target.checked);
            setContent(simpleMDE.value());
            if (isPreview) {
                setLeftSide({ xxl: 12, xl: 5, lg: 5, sm: 0, xs: 0 });
            } else {
                setLeftSide({xxl: 23, xl: 23, lg:23, sm: 23, xs: 23});
            }
        }
    
        return (
            <div>
                <Col isPreview {...leftSide}>
                    <div className="blog-edit-title">
                        <span className="label">标题：</span>
                        <Input
                            placeholder="请输入文章标题"
                            className="title-input"
                            name="title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <br />
                    <TagsSelector type={"tag"}/>
                    <br />
                    <TagsSelector type={"cate"}/>
                    <br />
                    <TextArea id="editor" defaultValue={content} />
                    <Button className="submit-button" onClick={handleSubmit} type="primary">
                        {isUpdate ? '更新文章' : '添加文章'}
                    </Button>
                    {/* <span className="preview-label">动态预览 </span>
                    <Checkbox 
                        className="preview-check" 
                        onChange={e => onChange(e)} 
                        defaultChecked={isPreview} /> */}
                </Col>

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
        )
    }

    return (
        <div>
            {isPreview ? (
                <Row>
                    <Editor />
                    <BackTop />
                </Row>
            ) : (
                <div className="edit">
                    <Editor />
                    <BackTop />
                </div>
                    
            )}
        </div>

    )

}

export default connect(
    state => state.article,
    null
)(Write);