import {convertSecondsToHHMMSS, getTimeString} from '../../utils/auxiliaryFunctions'
import { useEffect, useState } from 'react';
import styles from './stopWatch.module.css'
import DrawList from './DrawList'

const StopWatch = () => {
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
                <div style={{margin:10, backgroundColor: 'lightgrey', padding: 10, border:1, borderColor: 'green', borderStyle:'solid', borderRadius:10}}>{stringHHMMSS} </div>
                <div className={styles.containerButtonList}>
                    <div className={styles.buttonContainer}>
                        <button className={styles.btnClass} onClick ={ () =>setWork(!work)}>{!work?'Start':'Stop'}</button>
                        <button 
                            disabled={!work} 
                            className={styles.btnClass} 
                            onClick = {() => {
                                    // const tempList = list
                                    // tempList.push(stringHHMMSS)
                                    setList((prev) => [...prev, stringHHMMSS])
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

export default StopWatch;