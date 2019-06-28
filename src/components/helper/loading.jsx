import React from 'react';
import ReactDOM from 'react-dom';
import { Spin, Icon } from 'antd';

const loadingRoot = document.getElementById('component-loading')
const loadingIcon = <Icon type="loading" style={{ fontsize: 24 }} spin />
const loadingStyle = {
    position: 'absolute',
    right: '20px',
    top: '20px',
}

const Loading = () => {
    return ReactDOM.createPortal(
        <Spin indicator={loadingIcon} style={loadingStyle} />,
        loadingRoot
    )
}

export default Loading;