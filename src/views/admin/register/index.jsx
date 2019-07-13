import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, message, Icon, Input } from 'antd';
import { register } from '@/redux/user/actionCreators';

import './index.less';
import logo from '@/assets/go-rocker.svg';

@withRouter
@connect(
    state => state.user,
    { register }
)
class Register extends Component {
    state = {
        username: '',
        password: '',
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async () => {
        await this.props.register({ username: this.state.username, password: this.state.password });
        if (this.props.permission === 0) {
            this.props.history.push("/admin");
            message.success('注册成功');
        } else {
            this.props.history.push("/");
            message.success('注册成功');
        }
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-form">
                    <img src={logo} alt="" className="App-logo" />
                    <Input
                        size="large"
                        style={{ marginBottom: 25 }}
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        name="username"
                        placeholder="Username"
                        onChange={this.handleChange}
                    />
                    <Input
                        size="large"
                        style={{ marginBottom: 25 }}
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                    />
                    <Button
                        style={{ width: '100%' }}
                        size="large" type="primary"
                        onClick={this.handleSubmit}>
                        注册
                    </Button>
                </div>
            </div>
        )
    }
}

export default Register;