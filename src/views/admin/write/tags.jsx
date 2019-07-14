import React, { Component } from 'react';

import { Input, Tooltip, Icon, Tag } from 'antd';

class TagList extends Component {
    state = {
        list: [],
        inputVisible: false,
        inputValue: ''
    }

    render() {
        const { list, inputVisible, inputValue } = this.state;
        return (
            <div>
                {list.map((item, index) => {
                   const tagElem = (
                       <Tag key={item} closable afterClose={() => this.handleClose(item)} color="#1890ff">
                            {item}
                       </Tag>
                   ) 
                   return (
                       tagElem
                   )
                })}

                {inputVisible && (
                    <Input
                        ref={this.saveInputRef}
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
                        <Icon type="plus" /> 新标签
                    </Tag>
                )}
            </div>
        )
    }
}

export default TagList;