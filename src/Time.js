import React from 'react'
import {useState} from 'react';
import './App.css';


const time = ['08:00','08:30','09:00','09:30','10:00','14:00','14:30','15:00']

function Times({ date, setDisabledCalendar}) {

 const [event, setEvent] = useState(null)
 const [info, setInfo] = useState(false)
 const [disabled, setDisabled] = useState(false);

 function displayInfo(e) {
   setInfo(true);
   setEvent(e.target.innerText);
   setEvent(e.target.style.backgroundColor='red');
   setDisabled(!disabled);
   setDisabledCalendar(true);
   setEvent(e.target.innerText)
 }
 let appointment = `${event} ${date.toDateString()}`
 localStorage.setItem('appointment',appointment)
return (
 
 <div className="times">
   {/* {time.map(times => { */}
    {/* return ( */}
    <div>
      <button  onClick={(e)=> displayInfo(e)} disabled={disabled}> {time[0]} </button>
      <button  onClick={(e)=> displayInfo(e)} disabled={disabled}> {time[1]} </button>
      <button  onClick={(e)=> displayInfo(e)} disabled={disabled}> {time[2]} </button>
      <button  onClick={(e)=> displayInfo(e)} disabled={disabled}> {time[3]} </button>
      <button  onClick={(e)=> displayInfo(e)} disabled={disabled}> {time[4]} </button>
      <button  onClick={(e)=> displayInfo(e)} disabled={disabled}> {time[5]} </button>
      <button  onClick={(e)=> displayInfo(e)} disabled={disabled}> {time[6]} </button>
      <button  onClick={(e)=> displayInfo(e)} disabled={disabled}> {time[7]} </button>
    </div>
        {/* ) */}
     {/* })} */}
    <div>
      {info ? `Your appointment is set to ${event} ${date.toDateString()}` : null}
    </div>
 </div>
  )
}

export default Times;