import ClockFace from './img/ClockFace.png'
import ClockFace_H from './img/ClockFace_H.png'
import ClockFace_M from './img/ClockFace_M.png'
import ClockFace_S from './img/ClockFace_S.png'
import styles from './watch.module.css'
export const Watch = ({seconds}) => {
    const secondsNorm=seconds-Math.floor(seconds/43200)*43200//нормализуем секунды на входе 12*60*60=43200 
    const hour=(secondsNorm/3600)
    const min=((secondsNorm-Math.floor(hour)*3600)/60)
    const sec=(secondsNorm-Math.floor(hour)*3600-Math.floor(min)*60);
    return (
      <div >
        <img className={styles.Clock} src={ClockFace} alt=""  />
        <img className={styles.Clock} src={ClockFace_H} style={{transform: `rotate(${hour*30}deg)`}}  alt=""/>
        <img className={styles.Clock} src={ClockFace_M} style={{transform: `rotate(${min*6}deg)`}}  alt=""/>
        <img className={styles.Clock} src={ClockFace_S} style={{transform: `rotate(${sec*6}deg)`}}  alt=""/>
      </div>  
    )
  }