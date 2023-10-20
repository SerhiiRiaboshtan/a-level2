// import { useEffect } from "react"
import { useParams } from "react-router-dom";

const Contacts = () => {
    // useEffect(() => {
    //     alert("Contacts is alive!");
    //     return () => alert("Contacts is dead!");
    //     }    
    // )
    const {contactID} = useParams();
    return (
    <>
        <h1>{contactID?'Hello,'+contactID: 'Contacts'} </h1>
        <a href={'/'}>Login</a><br/>
        <a href={'/stopwatch'}>Секундомер</a>
    </>)
}

export default Contacts