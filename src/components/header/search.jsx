import React, { Component, useState } from 'react';
import { Input, Icon, Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';

const SearchButton = (props) => {

    const handleSubmit = () => {

    }

    const handleChange = e => {

    }

    const handlePressEnter = e => {

    }

    return (
        <Row id="search-box">
            <Col>
                <Icon type="search" className="search-icon" />
                <Input
                    type="text"
                    onChange={handleChange}
                    onBlur={handleSubmit}
                    onPressEnter={handlePressEnter}
                    placeholder="点击开始搜索"
                    className="header-search"
                />
            </Col>
        </Row>
    )
}

export default withRouter(SearchButton);