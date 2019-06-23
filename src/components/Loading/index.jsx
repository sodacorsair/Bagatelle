import React from 'react';
import ReactDOM from 'react-dom';
import { Spin, Icon } from 'antd';

const loadingRoot = document.getElementById('component-loading');
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin/>

const style = {
    position: 'absolute',
    right: '20px',
    top: '20px',
}

const Loading = () => {
    return ReactDOM.createPortal(
        <Spin indicator={antIcon} style={style}/>,
        loadingRoot
    )
}

export default Loading;