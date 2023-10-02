import './App.css';
import {Watch} from './components/watch.jsx';

let seconds;

setInterval(() =>{
  const currentDate=new Date();
  seconds=currentDate.getSeconds()+currentDate.getMinutes()*60+currentDate.getHours()*3600;
  console.log(seconds);
}
, 1000);

const Clock=()=>{
  // console.log(props);
  return <Watch seconds={seconds}/>
}

const App=()=> 
    <div className="App">
      <header className="App-header">
          <Clock />
      </header>
    </div>

export default App;
