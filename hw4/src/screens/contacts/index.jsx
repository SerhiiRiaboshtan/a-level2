import { Link } from "react-router-dom"
import {useParams} from 'react-router-dom'
import ContactsFirst from "../contactsFirst"
import ContactsSecond from "../contactsSecond"


const ContactsPage = () => {
    const {contactID} = useParams()
    switch (contactID) {
        case undefined:{
            return (
            <>
                <div>
                    Contacts
                </div>
                <ul >
                    <li><Link to={'./contactfirst'}>Первая страничка контактов</Link></li>
                    <li><Link to={'./contactsecond'}>Вторая страничка контактов</Link></li>
                </ul>
            </>)
        }
        case '/firstpage': {
            return (<ContactsFirst/>)
        }
        case '/secondpage': {
            return (<ContactsSecond/>)
        }
        default: {
            break        
        }
    }
}

export default ContactsPage