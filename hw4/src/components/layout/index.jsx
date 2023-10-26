import {Outlet} from 'react-router-dom'

import Navigation from '../navigation'
import Footer from '../footer'

import styles from './layout.module.css'

const Layout = () => {
    return (
      <div className={styles.container}>
        <Navigation/>
        <div>
          <Outlet/>
        </div>
        <Footer/>
      </div>
    )
}

export default Layout
