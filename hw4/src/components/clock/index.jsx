import { useEffect, useState } from "react";
import { Watch } from "./watch.jsx";


const Clock=()=>{
  const [seconds, setSec] = useState(0)
  useEffect(()=>{
    const intervalId = setInterval(() => {  
      const currentDate=new Date()
      setSec(currentDate.getSeconds()+currentDate.getMinutes()*60+currentDate.getHours()*3600)
    }, 1000)
  // console.log(intervalId)
  },[])

      return (
        <Watch seconds={seconds}/>
        )
}
export default Clock