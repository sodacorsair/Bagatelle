import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Tag } from 'antd';

class TagList extends Component {
    render() {

        return (
            <div className="content-inner-wrapper catalogue">
                <h2 className="title">Catalogue</h2>
                <p>There are three articles totally.</p>

                <div>
                    <Badge count={4}>
                        <Tag>
                            Article Name
                        </Tag>
                    </Badge>
                    <Badge count={4}>
                        <Tag>
                            Article Name
                        </Tag>
                    </Badge>
                    <Badge count={4}>
                        <Tag>
                            Article Name
                        </Tag>
                    </Badge>
                    <Badge count={4}>
                        <Tag>
                            Article Name
                        </Tag>
                    </Badge>
                    <Badge count={4}>
                        <Tag>
                            Article Name
                        </Tag>
                    </Badge>
                </div>
            </div>
        )
    }
}

export default TagList;