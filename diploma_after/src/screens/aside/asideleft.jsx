import styles from './aside.module.css'
import Category from '../../components/category'

const AsideLeft = () => {
    return (
        <div className={styles.asideLeft}>
            <h3>Категории товаров</h3>
            <Category/>
        </div>
    )
}

export default AsideLeft