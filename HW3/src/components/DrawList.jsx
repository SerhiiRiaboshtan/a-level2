import styles from './stopWatch.module.css'

const DrawList = ({list}) => {
    return (
        <ol className={styles.olDrawList}>
            {list.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
    )}

export default DrawList