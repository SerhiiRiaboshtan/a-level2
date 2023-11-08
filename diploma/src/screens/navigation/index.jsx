import { Link } from 'react-router-dom'
import styles from './navigation.module.css'

const Navigation = () => {
    return (
        <ul className = {styles.classNavigation}>
            <li className={styles.classNavigationLi}>
                <Link to={'/mainpage'}>MainPage</Link>
            </li>
            <li className={styles.classNavigationLi}>
                <Link to={'/contacts'}>Contacs</Link>
            </li> 
            <li className={styles.classNavigationLi}>
                <Link to={'/third'}>Секундомер</Link>
            </li>
            <li className={styles.classNavigationLi}>
                <Link to={'/fourth'}>Часики</Link>
            </li>
            <li className={styles.classNavigationLi}>
                <Link to={'/login'}>LOGIN</Link>
            </li>
        </ul>
    )
}

export default Navigation