import React, { Component, Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from '@/lib/axios';
import './index.less';
import { Icon, Divider, Empty, Drawer } from 'antd';

import Loading from '@/components/helper/loading';

const Home = (props) => {

    const [loading, setLoading] = useState(false);

    return (
        <div className="content-inner-wrapper home">
            {loading ? (
                <Loading />
            ) : (
                    <Fragment>
                        <ul className="ul-list">
                            <li>
                                <Divider orientation="center">
                                    title
                            </Divider>
                                <div>
                                    this is paragraph
                            </div>
                                <div>
                                    there're 3 comments
                            </div>
                            </li>
                        </ul>
                        <ul className="ul-list">
                            <li>
                                <Divider orientation="left">
                                    title
                            </Divider>
                                <div>
                                    this is paragraph
                            </div>
                                <div>
                                    there're 3 comments
                            </div>
                            </li>
                        </ul>
                        <ul className="ul-list">
                            <li>
                                <Divider orientation="left">
                                    title
                            </Divider>
                                <div>
                                    this is paragraph
                            </div>
                                <div>
                                    there're 3 comments
                            </div>
                            </li>
                        </ul>
                        <ul className="ul-list">
                            <li>
                                <Divider orientation="left">
                                    title
                            </Divider>
                                <div>
                                    this is paragraph
                            </div>
                                <div>
                                    there're 3 comments
                            </div>
                            </li>
                        </ul>
                        <ul className="ul-list">
                            <li>
                                <Divider orientation="left">
                                    title
                            </Divider>
                                <div>
                                    this is paragraph
                            </div>
                                <div>
                                    there're 3 comments
                            </div>
                            </li>
                        </ul>
                        <ul className="ul-list">
                            <li>
                                <Divider orientation="left">
                                    title
                            </Divider>
                                <div>
                                    this is paragraph
                            </div>
                                <div>
                                    there're 3 comments
                            </div>
                            </li>
                        </ul>
                        <ul className="ul-list">
                            <li>
                                <Divider orientation="left">
                                    title
                            </Divider>
                                <div>
                                    this is paragraph
                            </div>
                                <div>
                                    there're 3 comments
                            </div>
                            </li>
                        </ul>
                        <ul className="ul-list">
                            <li>
                                <Divider orientation="left">
                                    title
                            </Divider>
                                <div>
                                    this is paragraph
                            </div>
                                <div>
                                    there're 3 comments
                            </div>
                            </li>
                        </ul>
                        <ul className="ul-list">
                            <li>
                                <Divider orientation="left">
                                    title
                            </Divider>
                                <div>
                                    this is paragraph
                            </div>
                                <div>
                                    there're 3 comments
                            </div>
                            </li>
                        </ul>
                        <ul className="ul-list">
                            <li>
                                <Divider orientation="left">
                                    title
                            </Divider>
                                <div>
                                    this is paragraph
                            </div>
                                <div>
                                    there're 3 comments
                            </div>
                            </li>
                        </ul>
                        <ul className="ul-list">
                            <li>
                                <Divider orientation="left">
                                    title
                            </Divider>
                                <div>
                                    this is paragraph
                            </div>
                                <div>
                                    there're 3 comments
                            </div>
                            </li>
                        </ul>
                        <ul className="ul-list">
                            <li>
                                <Divider orientation="left">
                                    title
                            </Divider>
                                <div>
                                    this is paragraph
                            </div>
                                <div>
                                    there're 3 comments
                            </div>
                            </li>
                        </ul>
                    </Fragment>
                )}
        </div>
    )
}

export default Home;