import React,{useState} from 'react';

function Colorpic(){
const [color,setColor] = useState("#ffffff");

function handleColor(event){
    setColor(event.target.value);
}

  return(<div className='new'>
    <h1>  Color picker </h1>
    <div className='display' style={{backgroundColor:color}}>
        <p>Selected color:{color}</p>
    </div>
    <label>Select a color</label>
    <input type="color" value={color} onChange={handleColor} />
  </div>)
}
export default Colorpic