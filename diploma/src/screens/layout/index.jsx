import {Outlet} from 'react-router-dom'

import Navigation from '../navigation'
import AsideLeft from '../aside/asideleft.jsx'
import Footer from '../footer'

import styles from './layout.module.css'

const Layout = () => {
    return (
      <div className={styles.container}>
        <Navigation/>
        <div className={styles.centralContainer}> 
          <div>
            <AsideLeft/>
          </div>
          <div className={styles.outletContainer}>
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
}

export default Layout
