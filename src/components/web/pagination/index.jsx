import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Pagination } from 'antd';

@connect(state => ({
    windowWidth: state.common.windowWidth,
}))
class BlogPagination extends Component {

    static defaultProps = {
        pageSize: 10
    }

    render() {
        const { total, current, onChange, pageSize } = this.props;
        return (
            <div className="pagination">
                <Pagination
                    current={current}
                    onChange={onChange}
                    pageSize={pageSize}
                    total={total}
                    simple={this.props.windowWidth < 736}
                />
            </div>
        )
    }

}

export default BlogPagination;