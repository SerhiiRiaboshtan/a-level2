import {Link} from 'react-router-dom'

const ContactsFirst = () => {
    return (
        <>
            <div>
                Contacts first
            </div>
            <ul >
                <li><Link to={'/contacts'}>Contacts</Link></li>
                <li><Link to={'/contacts/contactSecond'}>Вторая страничка контактов</Link></li>
            </ul>
        </>

    )
}

export default ContactsFirst