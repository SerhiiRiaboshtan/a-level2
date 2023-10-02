import { useState } from "react"
import styles from "./spoiler.module.css"

const Spoiler = ({header='+', open, children}) => {
    const [stateSpoiler, setSpoiler]=useState(true);
    return (
        <div onClick={()=>{
          setSpoiler(!stateSpoiler)
        }}
        >
          <div className={styles.spoiler}>
            {header}
            {stateSpoiler?<div > {children}</div>:<></>}
          </div>
        </div>
        )
}

export default Spoiler
