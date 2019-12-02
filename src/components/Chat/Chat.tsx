import React from 'react';
import './style.less';

import ChatAside from './ChatAside';
import ChatDialog from './ChatDialog';

const Chat: React.FC = () => {
    return (
        <div className='moyu-chat'>
            <ChatAside />
            <ChatDialog />
        </div>
    );
}

export default Chat;
