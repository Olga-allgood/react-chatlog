const ColorChoice = ({setColorCallback, type}) => {
   
    return(
    <div>
    <button onClick={()=> setColorCallback(type, 'purple')}>🟣</button>
    <button onClick={()=> setColorCallback(type, 'green')}>🟢</button>
    <button onClick={()=> setColorCallback(type, 'blue')}>🔵</button>
    <button onClick={()=> setColorCallback(type, 'yellow')}>🟡</button>
    <button onClick={()=> setColorCallback(type, 'red')}>🔴</button>
    
    </div>

)}

export default ColorChoice;