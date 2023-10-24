import Navigation from '../navigation'
import {Outlet} from 'react-router-dom'

const Layout = () => {
    return (
      <div className='container'>
        <Navigation/>
        <div>
          <Outlet/>
        </div>
      </div>
    )
}

export default Layout
