import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Tag, Col } from 'antd';
import axios from '@/lib/axios';
import { leftSide, rightSide, middle } from '@/lib';

import './index.less';

class TagList extends Component {

    state = {
        taglist: [],
    }

    componentWillMount() {
        axios.get('tags/all')
            .then(res => {
                const { taglist } = res;
                this.deduplicate(taglist);
            })
            .catch(res => {

            });
    }

    deduplicate(tags) {
        tags.sort((a, b) => {
            return a.Name > b.Name ? 1 : -1;
        });

        let newList = [];
        let tag = '';

        for (var i = 0; i < tags.length; i++) {
            if (tag !== tags[i].Name) {
                tag = tags[i].Name;
                newList.push(tag);
            }
        }
        this.setState({taglist: newList});
    }

    render() {
        const { taglist } = this.state;
        console.log(taglist);

        return (
            <div className="content-inner-wrapper catalogue">
                 
                <Col {...leftSide} />
                <Col {...middle}>
                    <div className="tag-list">
                        {taglist.map(item => (
                                <Badge key={item} className="tag-item">
                                    <Tag>
                                        <span className="tag-name">
                                            <a href={`/tag/${item}`}>{item}</a>
                                        </span>
                                    </Tag>
                                </Badge>
                            ))}
                    </div>
                </Col>
                <Col {...rightSide} />
                
            </div>
        )
    }
}

export default TagList;