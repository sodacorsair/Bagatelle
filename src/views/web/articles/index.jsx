import React, { Component } from 'react';
import './index.less';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { Col, Pagination, Spin, Divider } from 'antd';
import BlogPagination from '@/components/web/pagination';
import { leftSide, middle, rightSide } from '../../../lib';

class ArticleList extends Component {

    state = {
        list: [],
        page: 1,
        type: 'category',
        name: '',
        total: 0,
    }

    componentDidMount() {
        const params = this.decodeQuery(this.props);
        this.setState({ type: params.type });
        this.fetchList({page: 1, ...params});
    }

    handlePageChange = page => {

    }

    decodeQuery = props => {
        const type = props.location.pathname.includes('category') ? 'category' : 'tag';
        const name = props.match.params.name;
        this.setState({name: name});
        return { type, name }
    }

    fetchList = ({ page = 1, name, type }) => {
        this.axios.get(`/${type}/get`, { params: { page, pageSize: 15, name } })
            .then(res => {
                console.log(res.articleItems);
                this.setState({ list: res.articleItems });
            });
    }
    
    render() {
        const { list, page, type, name, total } = this.state;

        return (
            <div>
                <Col {...leftSide} />
                <Col {...middle}>
                    <div className="content-inner-wrapper">
                        <div className="list-wrapper">
                            <h1 className="title-name">
                                {type === 'category' ? 'Category: ' : 'Tag: '}
                                {name}
                            </h1>

                            {list.map(item => (
                                <div>
                                    <div className="article-item" key={item}>
                                        <span>{item.createdAt}</span>
                                        <Link to={`/article/${item.id}`}>
                                            {item.name}
                                        </Link>
                                    </div>
                                    <Divider className="item-divider" />
                                </div>
                            ))}
                        </div>


                        {list.length < total && (
                            <BlogPagination
                                current={parseInt(page) || 1}
                                onChange={this.handlePageChange}
                                total={total}
                                pageSize={15}
                            />
                        )}
                    </div>
                </Col>
                <Col {...rightSide} />
            </div>
        );
    }
}

export default ArticleList;