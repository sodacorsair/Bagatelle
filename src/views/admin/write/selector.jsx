import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Tag, Input, Icon } from 'antd';
import CheckableTag from 'antd/lib/tag/CheckableTag';

import { changeCateList, changeTagList } from '@/redux/article/actionCreators';

class TagsSelector extends Component {

    constructor(props) {
        super(props);
        let {type} = this.props;
        if (type === 'tag') {
            this.state = { curlist: this.props.taglist, isUpdate: true, inputVisible: false, inputValue: '', type: 'tag' };
        } else {
            this.state = { curlist: this.props.catelist, isUpdate: true, inputVisible: false, inputValue: '', type: 'cate' };
        }
    }

    showInput = () => {
        this.setState({inputVisible: true}, () => this.inputRef.focus());
    }

    handleInputChange = e => {
        this.setState({inputValue: e.target.value});
    }

    handleInputConfirm = () => {
        let isAlready = false;
        let { curlist, inputValue } = this.state;
        curlist.map(item => {if (item === inputValue) isAlready = true;})
        if (inputValue !== '' && !isAlready) {
            curlist = [...curlist, inputValue];
            if (this.state.type === 'tag') {
                this.props.changeTagList(curlist);
            } else {
                this.props.changeCateList(curlist);
            }

        }
        this.setState({
            curlist,
            inputValue: '',
            inputVisible: false,
        })
    }

    handleRemove = (item, checked) => {
        if (!checked) {
            this.setState({curlist: this.state.curlist.filter(t => t !== item)});
        }
    }

    render() {
        const { isUpdate, curlist, inputVisible, inputValue, type } = this.state;
        return (
            <div>
                {type === 'tag' ? (
                    <span style={{fontWeight: "bold"}}>标签： </span>
                ) : (
                    <span style={{fontWeight: "bold"}}>类别： </span>
                )}
                { isUpdate && curlist.map((item) => (
                    <CheckableTag
                        key={item}
                        checked={true}
                        onChange={(checked) => this.handleRemove(item, checked)}
                    >
                    {item}
                    </CheckableTag>
                ))}
                {inputVisible && (
                    <Input
                        ref={input => {this.inputRef = input}} 
                        type="text"
                        size="small"
                        style={{ width: 78 }}
                        value={ inputValue }
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputConfirm}
                        onPressEnter={this.handleInputConfirm}
                    />
                )}

                {!inputVisible && (
                    <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
                        <Icon type="plus" /> 添加
                    </Tag>
                )}
            </div>
        )
    }
}

export default connect(store => store.article, { changeCateList, changeTagList })(TagsSelector);