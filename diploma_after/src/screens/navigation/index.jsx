import { Link } from 'react-router-dom'

import styles from './navigation.module.css'
import UserStateOnScreen from '../../components/userState'
import { CartTopViewOnScreen } from '../../components/cart/CartTopView'

const Navigation = () => {
    return (
        <div className={styles.classNavigationContainer}>
            <ul className = {styles.classNavigation}>
                <li className={styles.classNavigationLi}>
                    <Link to={'/mainpage'}><div className={styles.classLink}>MainPage</div></Link>
                </li>
                <li className={styles.classNavigationLi}>
                    <Link to={'/contacts'}><div className={styles.classLink}>Contacs</div></Link>
                </li> 
            </ul>
            
            <div className={styles.userStateOnScreen}>
                <UserStateOnScreen/>
            </div>
            <div>
                <CartTopViewOnScreen/>
            </div>
        </div>
    )
}

export default Navigation