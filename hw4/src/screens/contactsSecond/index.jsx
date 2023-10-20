import {Link} from 'react-router-dom'

const contactsSecond = () => {
    return (
        <>
            <div>
                Contacts first
            </div>
            <ul >
                <li><Link to={'/contacts'}>Contacts</Link></li>
                <li><Link to={'/contacts/contactFirst'}>Первая страничка контактов</Link></li>
            </ul>
        </>

    )
}

export default contactsSecond