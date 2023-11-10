import { Link } from 'react-router-dom'
import styles from './navigation.module.css'
import UserState from '../../components/userState'
import CartView from '../../components/cartView'

const Navigation = () => {
    return (
        <div className={styles.classNavigationContainer}>
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
            
            <div className='userState'>
                <UserState/>
            </div>
            <div>
                <CartView/>
            </div>
        </div>
    )
}

export default Navigation