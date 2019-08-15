import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Col, Divider } from 'antd'
import { loadingIcon } from '@/components/Loading'
import BlogPagination from '@/components/web/pagination'
import { leftSide, rightSide, middle } from '@/lib';
import axios from '@/lib/axios'

class Manage extends Component {

    state = {
        articleList: [],
    }

    componentDidMount() {
        axios.get('/articles/all')
            .then(res => {
                this.setState({ articleList: res.articles });
            });
    }

    render() {
        const { articleList } = this.state;

        return (
            <Fragment>
                <Col {...leftSide} />
                <Col {...middle}>
                    <Divider />
                    {articleList.map((i, k) => (
                        <div key={k}>
                            <span style={{ fontSize: "16px" }}>
                                <Link to={`/article/${i.id}`}>{i.name}</Link>
                                <span style={{ position: "relative", float: "right" }}>delete</span>
                                <span style={{ position: "relative", float: "right", marginRight: "30px" }}>
                                    <Link to={`/admin/write/${i.id}`}>edit</Link>
                                </span>
                                <Divider />
                            </span>
                        </div>
                    ))}
                </Col>
                <Col {...rightSide} />
            </Fragment>
        );
    }
}

export default Manage;