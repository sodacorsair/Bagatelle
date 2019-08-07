import React, { Component, Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from '@/lib/axios';
import { leftSide, rightRide, middle } from '@/lib';
import './index.less';
import { Icon, Divider, Empty, Drawer, Col, Row } from 'antd';

import Loading from '@/components/helper/loading';

const Home = (props) => {

    const [loading, setLoading] = useState(false);

    return (
        <div className="content-inner-wrapper home">
            {loading ? (
                <Loading />
            ) : (
                    <Fragment>
                        
                    </Fragment>
                )}
        </div>
    )
}

export default Home;