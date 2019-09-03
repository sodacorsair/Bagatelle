import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, message, Icon, Input } from 'antd';
import { login } from '@/redux/user/actionCreators';

import './index.less';
import logo from '@/assets/go-rocker.svg';

@withRouter
@connect(
    state => state.user,
    { login }
)
class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async () => {
        await this.props.login(this.state);
        if (this.props.permission === 0) {
            console.log("props.perm=" + this.props.permission);
            this.props.history.push('/admin');
            message.success('登录成功');
        } else {
            console.log("props.perm=" + this.props.permission);
            this.props.history.push('/');
            message.success('登录成功')
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
                        登录
                    </Button>
                </div>
            </div>
        )
    }
}

export default Login;