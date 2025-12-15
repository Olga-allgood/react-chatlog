const ColorChoice = ({setColorCallback}) => {
    return(
    <div>
    <button onClick={()=> setColorCallback('purple')}>🟣</button>
    <button onClick={()=> setColorCallback('green')}>🟢</button>
    <button onClick={()=> setColorCallback('blue')}>🔵</button>
    <button onClick={()=> setColorCallback('yellow')}>🟡</button>
    <button onClick={()=> setColorCallback('red')}>🔴</button>
    
    </div>

)}

export default ColorChoice;