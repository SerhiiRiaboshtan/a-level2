import { useEffect, useState } from "react";
import { Watch } from "./watch.jsx";

const Clock=()=>{
  const [seconds, setSec] = useState()
  useEffect(()=>{
    setInterval(() => {  
      const currentDate=new Date()
      setSec(currentDate.getSeconds()+currentDate.getMinutes()*60+currentDate.getHours()*3600)
      }, 1000)
  },[])
  return ( 
    <Watch seconds={seconds}/>
  )
}
export default Clock