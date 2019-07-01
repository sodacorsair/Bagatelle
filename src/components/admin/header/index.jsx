import React from 'react';
import { Layout, Row, Col } from 'antd';

import HeaderLeft from '../../header/headerleft';
import Navigator from '../../header/navigator';
import HeaderRight from '../../header/headerright';

import './index.less';

const Header = Layout.Header;

const navList = [
    {
        title: '返回首页',
        link: '/',
    },
    {
        title: '管理文章',
        link: '/admin/manage',
    },
    {
        title: '新建文章',
        link: '/admin/write',
    },
]

const AdminHeader = () => {
    const responsiveLeft = { xxl: 4, xl: 5, lg: 5, sm: 4, xs: 24 };
    const responsiveRight = { xxl: 20, xl: 19, lg: 19, sm: 20, xs: 0 };

    return (
        <Header className="header">
            <Row>
                <Col {...responsiveLeft}>
                    <HeaderLeft navList={navList} />
                </Col>
                <Col {...responsiveRight}>
                    <HeaderRight />
                    <Navigator navList={navList} />
                </Col>
            </Row>
        </Header>
    );
}

export default AdminHeader;