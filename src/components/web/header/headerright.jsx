import React, { Compnent, Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Button, Dropdown, Avatar, Menu } from 'antd';

import { login, logout } from '@/redux/user/actionCreators';

@connect(
    state => ({
        isLogin: state.user.isLogin,
        avatarColor: state.user.avatarColor,
    }),
    { logout, login }
)
class HeaderRight extends Component {

    renderAvatarDropMenu = () => (
        <Menu>
            <Menu.Item>
                <span>
                    修改账户信息
                </span>
            </Menu.Item>
            <Menu.Item onClick={() => this.props.logout()}>
                <span>
                    退出
                </span>
            </Menu.Item>
        </Menu>
    )

    render() {
        const { isLogin, avatarColor } = this.props;

        return (
            <div id="header-right">
                {isLogin ? (
                    <Dropdown placement="bottomCenter" overlay={this.renderAvatarDropMenu()} trigger={['click']}>
                        <Avatar>
                            "sodacorsair"
                        </Avatar>
                    </Dropdown>
                ) : (
                        <Fragment>
                            <Button
                                ghost
                                style={{ marginRight: 20 }}
                                onClick={() => this.props.login()}
                            >
                                登录
                            </Button>
                            <Button
                                onClick={() => this.props.logout()}
                            >
                                注册
                            </Button>
                        </Fragment>
                    )}
            </div>
        )
    }
}

export default HeaderRight;