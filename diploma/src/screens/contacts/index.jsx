import { Route, Routes,  Link, Outlet } from "react-router-dom"
import ContactsFirst from "../contactsFirst"
import ContactsSecond from "../contactsSecond"
import styles from "./contacts.module.css"

const ContactsPage = () => {
    
    return (
        <div className={styles.mainContacts}>
            <div className={styles.parentContacts}>    
                <h1 style={{backgroundColor: 'lightgrey', textAlign:'center'}}>Contacts</h1>
                <ul >
                    <li><Link to={'contactfirst'}>Первая страничка контактов</Link></li>
                    <li><Link to={'contactsecond'}>Вторая страничка контактов</Link></li>
                </ul>
            </div>
            <div className={styles.childrenContacts}>   
                <Routes>
                    <Route path="contactfirst" element={<ContactsFirst/>}/>
                    <Route path="contactsecond" element={<ContactsSecond/>}/>
                </Routes>
                <Outlet/>
            </div> 
        </div>
    )
        
}

export default ContactsPage