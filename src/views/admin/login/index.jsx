import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, message, Icon, Input } from 'antd';
import { login } from '@/redux/demo/actionCreators';

import './index.less';
import logo from '@/assets/go-rocker.svg';

@withRouter
@connect(
    null,
    { login }
)
class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    handleSubmit = async () => {
        await this.props.login();
        message.success('success login');
        this.props.history.push('/');
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
                        name="Username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <Input
                        size="large"
                        style={{ marginBottom: 25 }}
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        name="Password"
                        placeholder="Password"
                        value={this.state.password}
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