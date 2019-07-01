import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon, Dropdown } from 'antd';

@withRouter
class Navigator extends Component {

    renderCatalogueMenu() {
        return (
            <Menu>
                <Menu.Item>
                    <Link to={'/archives'}>
                        归档
                    </Link>
                    <Link to={'/archives'}>
                        归档
                    </Link>
                </Menu.Item>
            </Menu>
        )
    }

    render() {
        const { navList } = this.props;
        return (
            <div id="header-nav-wrapper">
                <Menu
                    className="header-nav"
                    mode="horizontal"
                    selectedKeys={[this.props.location.pathname]}>
                    {navList.map(item => (
                        <Menu.Item key={item.link}>
                            <Link to={item.link}>
                                <span className="nav-title">{item.title}</span>
                            </Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </div>
        )
    }

}

export default Navigator;