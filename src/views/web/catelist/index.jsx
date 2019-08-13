import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Divider } from 'antd';
import axios from '@/lib/axios';
import { leftSide, rightSide, middle } from '@/lib';

class CateList extends Component {
    state = {
        cateList: [],
    }

    componentDidMount() {
        this.axios.get(`/categories/all`)
            .then(res => {
                this.deduplicate(res.catelist);
            });
    }

    deduplicate(list) {
        list.sort((a, b) => {
            return a.Name > b.Name ? 1 : -1;
        });

        let newList = [];
        let cate = '';

        for (var i = 0; i < list.length; i++) {
            if (cate !== list[i].Name) {
                cate = list[i].Name;
                newList.push(cate);
            }
        }
        this.setState({cateList: newList});
    }

    
    render() {
        const { cateList } = this.state;

        return (
            <div>
                <Col {...leftSide} />
                <Col {...middle}>
                    <div className="content-inner-wrapper">
                        <h1 className="title-name">
                            Category
                        </h1>

                        {cateList.map(item => (
                            <span className="category-item" key={item} style={{ fontSize: "16px", marginTop: "8px", marginRight: "20px" }}>
                                <Link to={`/category/${item}`}>
                                    {item}
                                </Link>
                            </span>
                        ))}
                    </div>
                </Col>
                <Col {...rightSide} />
            </div>
        );
    }
}

export default CateList;