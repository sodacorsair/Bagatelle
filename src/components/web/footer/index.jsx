import React from 'react';
import { leftSide, rightSide, middle } from '@/lib';
import { Col, Row, Divider } from 'antd';

const Footer = () => {
    return (
        <div>
           <Col {...leftSide} />
           <Col {...middle}>
           <Divider />
                <div className="layout-footer">Motivated by <a href="https://github.com/sodacorsair/bagatelle">Bagatelle!</a></div>
                <div className="layout-footer">This site is licensed under a <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en">
                    Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International license</a></div>
                <div className="layout-footer">本站点使用 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh">
                    知识共享 署名-非商业性使用-禁止演绎 4.0 国际 许可协议</a></div>
           </Col>
           <Col {...rightSide} />   
        </div>
    )
}

export default Footer;