import {useState} from 'react';
import Calendar from 'react-calendar';
import './App.css';
import Time from './Time.js'

function App() {
 
const [date, setDate] = useState(new Date());
const [showTime, setShowTime] = useState(false) 
const [disabledCalendar,setDisabledCalendar] = useState(false)

return (
  <div className='app'>
    <h1 className='header'>React Calendar</h1>
    <div >
   {!disabledCalendar &&  <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)} />}
    </div>
 
    {date.length > 0 ? (
    <p>
      <span>Start:</span>
      {date[0].toDateString()}
      &nbsp;
      &nbsp;
      <span>End:</span>{date[1].toDateString()}
    </p>
           ) : (
    <p>
       <span>Selected date:</span>{date.toDateString()}
   </p> 
          )
   }
   <Time showTime={showTime} date={date} setDisabledCalendar={setDisabledCalendar}/>

 </div>
  )
}

export default App;