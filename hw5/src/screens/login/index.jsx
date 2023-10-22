import { useState, useEffect } from "react"
import { useLazyQuery } from '@apollo/client'
import { setUserTokenAC } from '../../redux/reducers/userReducer.jsx'
import { useDispatch } from "react-redux";
import { GET_TOKEN } from "../../gql/index.jsx";

import { useNavigate } from "react-router-dom";



const Login = () => {
    const [fetchAuth, { data }] = useLazyQuery(GET_TOKEN);
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState({
        login:'',
        password:'',
    })
    const navigate = useNavigate();
    useEffect(() =>{
        // console.log(data);
        if (data) {
            dispatch(setUserTokenAC(data.login))
            if(data.login) {
                console.log('Token is:', data.login)
                navigate('/loginOk')
            } 
        }
    }, [data, dispatch, navigate])

    const handleUpdateLogin = (e) => {
        // console.log(e.target.value)
        setUserInfo({...userInfo, login: e.target.value})
    }

    const handleUpdatePassword = (e) => {
        
        setUserInfo({...userInfo, password: e.target.value})
    }

    const handleGetToken = () => {
        console.log("getToken trying");
        fetchAuth({
            variables: {login: userInfo.login, password: userInfo.password},
        });
    }

    return (
        <div className="container">
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input type='text' value = {userInfo.login} onChange={handleUpdateLogin}/>
                <input type='text' value = {userInfo.password} onChange={handleUpdatePassword}/>
            </div>
            <button onClick={handleGetToken}>Войти</button>
        </div>
    )
}

export default Login