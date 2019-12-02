import React from 'react';
import './style.less';

const BaseContainer: React.FC = (props) => {
    return (
        <div className='layout-container'>
            <div className="layout-bg"></div>
            {props.children}
        </div>
    );
}

export default BaseContainer;
