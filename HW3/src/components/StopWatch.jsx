import {convertSecondsToHHMMSS, getTimeString} from '../utils/auxiliaryFunctions'
import { useEffect, useState } from 'react';
import styles from './stopWatch.module.css'
import DrawList from './DrawList'

const Stopwatch = () => {
    const [seconds, secChange]=useState(0);
    const [work, setWork]=useState(0);
    const [list, setList]=useState([]);
    useEffect(() => {
        const intervalID = setInterval( () => {
            secChange(seconds=>seconds+work)},
             1000)
        return () => {
            clearInterval(intervalID)}
        }, [work])
        const stringHHMMSS = getTimeString(convertSecondsToHHMMSS({seconds:seconds}))
    return (
        <>
            <div className={styles.container}>    
                <div>{stringHHMMSS} </div>
                <div className={styles.containerButtonList}>
                    <div className={styles.buttonContainer}>
                        <button className={styles.btnClass} onClick ={ () =>setWork(!work)}>{!work?'Start':'Stop'}</button>
                        <button 
                            disabled={!work} 
                            className={styles.btnClass} 
                            onClick = {() => {
                                    const tempList = list
                                    tempList.push(stringHHMMSS)
                                    setList(tempList)
                                }
                            }
                        >Interval</button>
                        <button 
                            className={styles.btnClass} 
                            onClick ={ () =>{
                                setWork(0)
                                secChange(0)
                                setList([])
                            }}
                        >Clear
                        </button>
                    </div>
                    <DrawList list = {list}/>
                </div>
            </div> 
        </>
    );
}
        // console.log(getTimeString(convertSecondsToHHMMSS({seconds:seconds})))

export default Stopwatch;