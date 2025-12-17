import './App.css';
import chatData from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import ColorChoice from './components/ColorChoice';





const App = () => {
  const [entries, setEntries] = useState(chatData);
  
  const [color, setColor] = useState(
    {local:"blue",
      remote:"yellow"
    });
  const updateChatColor = (type, color) => {
        setColor((previous) =>({...previous,[type]:color}))

    }

  const users = [...new Set(entries.map(entry => entry.sender))];
  // console.log(users);



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
        <h1>Chat Between <span className ={color.local}>{users[0]}</span> and <span className ={color.remote}>{users[1]}</span></h1>
        <section>
          <div className="colorsOption"> 
            <ColorChoice setColorCallback={updateChatColor} type="local" users={users} color={color}/>
              <h2 className='widget'>{totalLikes} ❤️s</h2> 
            <ColorChoice setColorCallback={updateChatColor} type="remote" users={users} color={color}/>
            {/* <ColorChoice setColorCallback={setColor}/> */}
          </div>
        
        
        </section>
      </header>
      <main>
        {/* <ChatEntry sender={chatData[0].sender} body={chatData[0].body} timeStamp={chatData[0].timeStamp}>

        </ChatEntry> */}
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ul>
          <ChatLog entries={entries} onLike={toggleLike} color={color} users={users}></ChatLog>
        </ul>
      </main>
    </div>
  );
};

export default App;
