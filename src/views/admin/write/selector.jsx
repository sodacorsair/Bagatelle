import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tag, Input, Icon } from 'antd';
import CheckableTag from 'antd/lib/tag/CheckableTag';

import { changeCateList, changeTagList, changeSeleCateList, changeSeleTagList } from '@/redux/article/actionCreators';

class TagsSelector extends Component {

    constructor(props) {
        super(props);
        let { type } = this.props;
        if (type === 'tag') {
            this.state = {
                curlist: this.props.taglist,
                selectedList: this.props.seletaglist,
                isUpdate: true,
                inputVisible: false,
                inputValue: '',
                type: 'tag'
            };
        } else {
            this.state = {
                curlist: this.props.catelist,
                selectedList: this.props.selecatelist,
                isUpdate: true,
                inputVisible: false,
                inputValue: '',
                type: 'cate'
            };
        }
    }

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.inputRef.focus());
    }



    handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
    }

    getResult = () => {
        return [...this.state.selectedList];
    }

    setResult = list => {
        this.setState({selectedlist: list});
    }

    handleInputConfirm = () => {
        let isAlready = false;
        let { curlist, inputValue, selectedList } = this.state;
        curlist.map(item => { if (item === inputValue) isAlready = true; })
        if (inputValue !== '' && !isAlready) {
            curlist = [...curlist, inputValue];
            selectedList = [...selectedList, inputValue];
        }
        this.setState({
            curlist,
            selectedList,
            inputValue: '',
            inputVisible: false,
        })
    }

    handleCheck = (item, checked) => {
        const { selectedList } = this.state;
        const nextSelectedList = checked ? [...selectedList, item] : selectedList.filter(t => t !== item);
        this.setState({ selectedList: nextSelectedList });
    }

    componentDidMount() {
        this.props.onRef && this.props.onRef(this);
    }

    render() {
        const { isUpdate, curlist, selectedList, inputVisible, inputValue, type } = this.state;
        return (
            <div>
                {type === 'tag' ? (
                    <span style={{ fontWeight: "bold" }}>标签： </span>
                ) : (
                        <span style={{ fontWeight: "bold" }}>类别： </span>
                    )}
                {isUpdate && curlist.map((item) => (
                    <CheckableTag
                        key={item}
                        checked={selectedList.includes(item)}
                        onChange={(checked) => this.handleCheck(item, checked)}
                    >
                        {item}
                    </CheckableTag>
                ))}
                {inputVisible && (
                    <Input
                        ref={input => { this.inputRef = input }}
                        type="text"
                        size="small"
                        style={{ width: 78 }}
                        value={inputValue}
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

export default connect(
    store => store.article,
    {
        changeCateList,
        changeTagList,
        changeSeleCateList,
        changeSeleTagList,
    })(TagsSelector);