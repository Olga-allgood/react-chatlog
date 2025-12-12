import './App.css';
import chatData from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import { useState } from 'react';




const App = () => {
  const [entries, setEntries] = useState(chatData);

  const toggleLike = (id) => {
    const updateEntries = entries.map((entry) => {
      if (entry.id == id) {
        return { ...entry, liked: !entry.liked };
      }
      return entry;
    });
    setEntries(updateEntries);
  };
  const totalLikes = entries.filter((entry) => entry.liked).length;
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <p>{totalLikes} ❤️s</p> 
      </header>
      <main>
        <ChatEntry sender={chatData[0].sender} body={chatData[0].body} timeStamp={chatData[0].timeStamp}>

        </ChatEntry>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ul>
          <ChatLog entries={chatData} onLike={toggleLike} ></ChatLog>
        </ul>
      </main>
    </div>
  );
};

export default App;
