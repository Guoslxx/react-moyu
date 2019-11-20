import React from 'react';
import './App.less';
import BaseContainer from './components/layout/BaseContainer';
import Chat from './components/Chat/Chat';

const App: React.FC = () => {
  return (
    <BaseContainer>
      <Chat />
    </BaseContainer>
  );
}

export default App;
