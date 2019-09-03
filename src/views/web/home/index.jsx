import React, { Component, Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import axios from '@/lib/axios';
import { leftSide, rightSide, middle } from '@/lib';
import ReactMarkdown from 'react-markdown';
import './index.less';
import { Icon, Divider, Empty, Drawer, Col, Row } from 'antd';

import Loading from '@/components/helper/loading';

const Home = (props) => {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get("/articles/home")
            .then(res => {
                setList(res.articles);
            });
    }, []);

    return (
        <div className="inner-content-wrapper home">
            
            <Fragment>
                        <Col {...leftSide} />
                        <Col {...middle}>
                            <div className="home-wrapper" style={{ marginTop: "40px" }}>
                                {list.map((d, i) => (
                                    <Link key={i} to={`/article/${d.id}`}>
                                        <div style={{ marginBottom: "40px" }} >
                                            <Divider />
                                                <h1 style={{ textAlign: "center" }}>
                                                    {d.name}
                                                </h1>
                                                <h3 style={{ fontWeight: "normal", fontSize: "14px", marginTop: "30px" }}>
                                                    <ReactMarkdown
                                                        source={d.content.slice(0, 200) + "..."}
                                                    />
                                                </h3>
                                                <h3 style={{ fontWeight: "normal", fontSize: "12px", color: "#333" }}>
                                                    posted at {d.createdAt}
                                                </h3>
                                            <Divider />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </Col>
                        <Col {...rightSide} />
            </Fragment>
            
        </div>
    )
}

export default Home;