import React, { Component } from 'react';
import './index.less';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { Timeline, Pagination, Spin, Timeline } from 'antd';
import BlogPagination from '@/components/web/pagination';

const TimelineList = ({ list, name, type }) => {
    return (
        <div className="timeline">
            <Timeline>
                <Timeline.Item>
                    <h1 className="list-title">
                        {name}
                        <small className="type-name">
                            {type === 'volumes' ? 'Volume' : 'Tag'}
                        </small>
                    </h1>
                    <br />
                </Timeline.Item>
                {list.map(item => (
                    <Timeline.Item key={item.id}>
                        <span style={{ fontSize: '13px', marginRight: '16px' }}>
                            {item.createdAt.slice(5, 10)}
                        </span>
                    </Timeline.Item>
                ))}
            </Timeline>
        </div>
    )
}

@connect(state => ({
    windowWidth: state.common.windowWidth
}))
class List extends Component {
    state = {
        list: [],
        page: 1,
        total: 0,
        type: 'volumes',
        name: '',
        loading: false,
    }

    componentDidMount() {
        const params = this.decodeQuery(this.props);
        this.setState({ type: params.type }, this.fetchList({ page: 1, ...params }))
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.name !== nextProps.match.params.name) {
            const params = this.decodeQuery(nextProps);
            this.fetchList({ page: 1, ...params });
        }
    }

    decodeQuery = props => {
        const type = props.location.pathname.includes('volumes') ? 'volumes' : 'tags';
        const name = props.match.params.name;
        return { type, name }
    }

    fetchList = ({ page = 1, name, type }) => {
        this.setState({ loading: true });
        this.axios.get(`/${type}/getArticles`, { params: { page, pageSize: 15, name } })
            .then(res => {
                this.setState({ list: res.rows, total: res.count, loading: fasle })
            })
            .catch(e => this.setState({ loading: false }))
    }

    handlePageChange = page => {
        const params = this.decodeQuery(this.props);
        this.setState({ page }, this.fetchList({ page, ...params }))
    }

    render() {
        const { list, type, page, total, loading } = this.state;
        const { name } = this.props.match.params;
        return (
            <div className="content-inner-wrapper list-page">
                <Spin tip="Loading..." spinning={loading}>
                    <TimelineList list={list} name={name} type={type} />
                </Spin>

                {list.length < total && (
                    <BlogPagination
                        current={parseInt(page) || 1}
                        onChange={this.handlePageChange}
                        total={total}
                        pageSize={15}
                    />
                )}
            </div>
        )
    }
}

export default List;