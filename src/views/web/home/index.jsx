import React, { Component, Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from '@/lib/axios';
import { leftSide, rightSide, middle } from '@/lib';
import './index.less';
import { Icon, Divider, Empty, Drawer, Col, Row } from 'antd';

import Loading from '@/components/helper/loading';

const Home = (props) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    })

    return (
        <div className="content-inner-wrapper home">
            
            {loading ? (
                <Loading />
            ) : (
                    <Fragment>
                        <Col {...leftSide} />
                        <Col {...middle}>
                            <h1>欢迎来到Soda Corsair的博客！</h1>
                        </Col>
                        <Col {...rightSide} />
                    </Fragment>
                )}
            
        </div>
    )
}

export default Home;