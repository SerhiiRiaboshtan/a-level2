// import { useEffect } from "react"

const Login = () => {
    // useEffect(() => {
    //     alert("Login is alive!");
    //     return () => alert("Login is dead!");
    //     }    
    // )
    return (
        <>
            <h1>Login</h1>
            <a href={'/contacts'}>Contacts</a><br/>
            <a href={'/stopWatch'}>Секундомер</a>
        </>
    )
}

export default Login