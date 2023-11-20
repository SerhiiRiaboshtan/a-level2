import { Link } from 'react-router-dom'
import styles from './navigation.module.css'
import UserState from '../../components/userState'
import {CartTopView} from '../../components/cart'

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
                    <Link to={'/fourth'}>Тест меню</Link>
                </li>
                <li className={styles.classNavigationLi}>
                    <Link to={'/login'}>LOGIN</Link>
                </li>
            </ul>
            
            <div className='userState'>
                <UserState/>
            </div>
            <div>
                <CartTopView/>
            </div>
        </div>
    )
}

export default Navigation