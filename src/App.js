import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  let localName = chatMessages[0].sender;
  let remoteName = "";
  
  while (remoteName === "") {
    let i = 1;
    if (chatMessages[i].sender !== localName) {
      remoteName = chatMessages[i].sender;
      i++;
    }
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between {localName} and {remoteName}</h1>
      </header>
      <main>
        <ChatLog messages={chatMessages}/>
      </main>
    </div>
  );
};

export default App;
