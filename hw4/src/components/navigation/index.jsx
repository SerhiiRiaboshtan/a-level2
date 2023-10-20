import { Link } from 'react-router-dom'
import styles from './navigation.module.css'

const Navigation = () => {
    return (
        <ul className = {styles.classNavigation}>
            <li className={styles.classNavigationLi}>
                <Link to={'/'}>MainPage</Link>
            </li>
            <li className={styles.classNavigationLi}>
                <Link to={'/contacts'}>Contacs</Link>
            </li> 
            <li className={styles.classNavigationLi}>
                <Link to={'/third'}>Third</Link>
            </li>
            <li className={styles.classNavigationLi}>
                <Link to={'/fourth'}>Fourth</Link>
            </li>
            <li className={styles.classNavigationLi}>
                <Link to={'/fifth'}>Fifth</Link>
            </li>
        </ul>
    )
}

export default Navigation