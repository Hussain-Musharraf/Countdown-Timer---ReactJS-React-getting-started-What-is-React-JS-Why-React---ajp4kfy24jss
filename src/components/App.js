import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 

  const [getTime,setTime]=useState(0);
  let result='';
  useEffect(()=>{
    if(getTime!=0){
      result=setTimeout(()=>{
        setTime(getTime-1);
      },1000)
    }
  },[getTime]);

  const onKeyboardEnter=(event)=>{
    if(event.keyCode ===13){
      let input=document.getElementById("timeCount").value;
      if(!isNaN(input) && input!=0){
        setTime(parseInt(input));
      }else{
        setTime(0);
        if(result!="")[
          clearTimeout(result)
        ]
      }
    }
  }
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={onKeyboardEnter} /> sec.
        </h1>
      </div>
      <div id="current-time">{getTime}</div>
    </div>
  )
}


export default App;
