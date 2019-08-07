import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Tag } from 'antd';
import axios from '@/lib/axios';

class TagList extends Component {

    state = {
        taglist: [],
    }

    componentWillMount() {
        axios.get('tags/all')
            .then(res => {
                const { taglist } = res;
                console.log(taglist);
                this.deduplicate(JSON.stringify(taglist));
            })
            .catch(res => {

            });
    }

    deduplicate(list) {
        console.log("list: " + list);
        list.sort((a, b) => {
            return a.Name > b.Name ? 1 : -1;
        });
        
        newList = [];
        tag = '';
        for (i = 0; i < list.length; i++) {
            console.log("name: " + list[i].Name);
            if (tag !== list[i].Name) {
                tag = list[i].Name;
                newList.push(tag);
            }
        }
        this.setState({taglist: list});
        console.log("taglist: " + list);
    }

    render() {
        const { taglist } = this.state;

        return (
            <div className="content-inner-wrapper catalogue">
                 

                <div>
                    {taglist.map(item => (
                            <Badge key={item}>
                                <Tag>{item.Name}</Tag>
                            </Badge>
                        ))}
                </div>
            </div>
        )
    }
}

export default TagList;