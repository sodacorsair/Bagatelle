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
                const { list } = res;
                this.deduplicate(list);
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
            <div className="innter-content-wrapper catalogue">
                 
                <Col {...leftSide} />
                <Col {...middle}>
                    <div className="tag-list">
                        <h1 style={{ color: "#0d1a26", fontSize: "2.5em", marginBottom: "30px" }} className="title-name">
                            Tag
                        </h1>

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