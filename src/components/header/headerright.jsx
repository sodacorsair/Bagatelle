import React, { Compnent, Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Button, Dropdown, Avatar, Menu, Icon } from 'antd';

import { login, logout } from '@/redux/user/actionCreators';

@connect(
    state => state.user,
    { logout, login }
)
class HeaderRight extends Component {

    renderAvatarDropMenu = () => (
        <Menu>
            <Menu.Item>
                <span>
                    Modify Account
                </span>
            </Menu.Item>
            <Menu.Item onClick={() => this.props.logout()}>
                <span>
                    Logout
                </span>
            </Menu.Item>
        </Menu>
    )

    renderLoginDropMenu = () => (
        <Menu>
            <Menu.Item onClick={() => this.props.history.push('/login')}>
                <span>Login</span>
            </Menu.Item>
            <Menu.Item onClick={() => this.props.history.push('/register')}>
                <span>Register</span>
            </Menu.Item>
        </Menu>
    )

    render() {
        const { username } = this.props;

        return (
            <div id="header-right">
                {username ? (
                    <Dropdown placement="bottomCenter" overlay={this.renderAvatarDropMenu()} trigger={['click']}>
                        <Avatar style={{ cursor: "pointer" }}>
                            {username}
                        </Avatar>
                    </Dropdown>
                ) : (
                    <Dropdown placement="bottomCenter" overlay={this.renderLoginDropMenu()} trigger={['click']}>
                        <Icon type="menu-o" style={{ color: "#e7e7e7" }}/>
                    </Dropdown>
                    )}
            </div>
        )
    }
}

export default HeaderRight;