import React,{useState} from "react";
import "./style.css";
import {data} from './data';

export default function App() {
 
  const [value, setValue] = useState(0)

 const delayCounter = ()=>{
   setTimeout(()=>{
     setValue((prevValue)=>{
       return prevValue +1
     })
    },2000)
   
 }
 
  return (
    <>
    <h2>counter</h2>
    <h2>{value}</h2>
    <button className="btn" onClick={()=>setValue(value - 1)}>decrease</button>
    <button className="btn" onClick={()=>setValue(0)}>reset</button>
    <button className="btn" onClick={()=>setValue(value + 1)}>increase</button>
  

    <h2>counter</h2>
    <h2>{value}</h2>
    <button className="btn" onClick={delayCounter}>increase delay</button>
    </>
  );
}
