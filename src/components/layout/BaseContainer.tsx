import React from 'react';
import './style.less';

const BaseContainer: React.FC = (props) => {
    return (
        <div className='layout-container'>
            {props.children}
        </div>
    );
}

export default BaseContainer;
