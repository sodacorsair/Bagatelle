import React, { Component, useEffect, useState } from 'react';
import './index.less';
import { connect } from 'react-redux';
import { Divider, Rate, Icon, Avatar } from 'antd';

const About = (props) => {

    return (
        <div>
            <Avatar>
                SodaCorsair
            </Avatar>
            <Divider orientation="left">Brief</Divider>
            <p>This blog is aimed to record</p>
            <p>
                source code address is {' '}
                <a target="_blank" rel="noreferrer noopener" href="https://google.com">
                    github
                </a>
            </p>
            <Divider orientation="left">About me</Divider>
            <ul>
                <li>Name: </li>
                <li>Education: </li>
                <li>
                    Contact:
                    <Icon type="qq" /> 123456
                    <Divider type="vertical" />
                    <span>1234.com</span>
                </li>
            </ul>
        </div>
    )
}

export default About;