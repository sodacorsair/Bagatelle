import React from 'react';
import { Layout, Row, Col } from 'antd';

import HeaderLeft from './headerleft';
import Search from './search'
import Navigator from './navigator';
import HeaderRight from './headerright';

import './index.less';

const Header = Layout.Header;

const navList = [
    {
        title: '首页',
        link: '/',
    },
    {
        title: '文章',
        link: '/articles',
    },
    {
        title: '分类',
        link: '/categories',
    },
    {
        title: '关于',
        link: '/about',
    },
]

const BlogHeader = () => {
    const responsiveLeft = { xxl: 4, xl: 5, lg: 5, sm: 4, xs: 24 };
    const responsiveRight = { xxl: 20, xl: 19, lg: 19, sm: 20, xs: 0 };

    return (
        <Header className="header">
            <Row>
                <Col {...responsiveLeft}>
                    <HeaderLeft navList={navList} />
                </Col>
                <Col {...responsiveRight}>
                    <Search />
                    <HeaderRight />
                    <Navigator navList={navList} />
                </Col>
            </Row>
        </Header>
    );
}

export default BlogHeader;