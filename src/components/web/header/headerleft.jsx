import React from 'react';
import { Icon, Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import SearchButton from './search';

const HeaderLeft = ({ navList }) => {

    const navMenu = (
        <Menu>
            <Menu.Item>
                <SearchButton />
            </Menu.Item>
            {navList.map(item => (
                <Menu.Item key={item.link}>
                    <Link to={item.link}>
                        <span>{item.title}</span>
                    </Link>
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <div className="header-left">
            <span className="blog-slogan">
                <Link to={'/'} style={{ color: "#e7e7e7" }}>
                    SodaCorsair
                </Link>
            </span>
            <Dropdown trigger={['click']} overlay={navMenu}>
                <Icon type="menu-o" className="mobile-menu" />
            </Dropdown>
        </div>
    );
}

export default HeaderLeft;