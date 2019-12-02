import React from 'react';
import './style.less';

const ChatAside: React.FC = () => {
    return (
        <div className='chat-aside'>
            <div className="chat-aside__header">
                <div className="header-portrait">
                    <img src={require('../../assets/images/webwxgeticon.jpg')} alt="" />
                </div>
                <div className="header-userinfo">Silas@2019</div>
            </div>
            <div className="chat-aside__search">
                
            </div>
            <div className="chat-tag"></div>
            <div className="chat-list"></div>
        </div>
    );
}

export default ChatAside;
