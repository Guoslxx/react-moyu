import React from 'react';
import './style.less';

const Chat: React.FC = () => {
    return (
        <div className='moyu-chat'>
            <div className="chat-toolbar"></div>
            <div className="chat-personnel"></div>
            <div className="chat-dialog"></div>
        </div>
    );
}

export default Chat;
