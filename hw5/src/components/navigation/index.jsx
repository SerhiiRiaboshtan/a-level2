import { Link } from 'react-router-dom'
import styles from './navigation.module.css'

const Navigation = () => {
    return (
        <ul className = {styles.classNavigation}>
            <li className={styles.classNavigationLi}>
                <Link to={'/'}>MainPage</Link>
            </li>
            <li className={styles.classNavigationLi}>
                <Link to={'/login'}>Логин</Link>
            </li> 
            {/* <li className={styles.classNavigationLi}>
                <Link to={'/loginOk'}>Third</Link>
            </li> */}
        </ul>
    )
}

export default Navigation