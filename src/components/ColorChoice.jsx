
const ColorChoice = ({setColorCallback, type, color, users}) => {
    return(
    <div>
     <p className={color[type]}>{type === "local" ? users[0]: users[1]}'s chat</p>   
    <button onClick={()=> setColorCallback(type, 'purple')}>🟣</button>
    <button onClick={()=> setColorCallback(type, 'green')}>🟢</button>
    <button onClick={()=> setColorCallback(type, 'blue')}>🔵</button>
    <button onClick={()=> setColorCallback(type, 'yellow')}>🟡</button>
    <button onClick={()=> setColorCallback(type, 'red')}>🔴</button>
    
    </div>

)}

export default ColorChoice;