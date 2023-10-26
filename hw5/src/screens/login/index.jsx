import { useState, useEffect } from "react"
import { useLazyQuery } from '@apollo/client'
import { setUserTokenAC } from '../../redux/reducers/userReducer.jsx'
import { useDispatch } from "react-redux";
import { GET_TOKEN } from "../../gql/index.jsx";

import { useNavigate } from "react-router-dom";

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        login:'',
        password:'',
    })
    const [fetchAuth, { data }] = useLazyQuery(GET_TOKEN);
    const dispatch = useDispatch();
    
    const navigate = useNavigate();
    useEffect(() =>{
        if (data) {
            dispatch(setUserTokenAC(data.login, userInfo.login));
            if(data.login) {
                // console.log('login Ok');
                navigate('/loginOk')
            } 
        }
    }, [data, dispatch, navigate, userInfo])

    const handleUpdateLogin = (e) => {
        setUserInfo({...userInfo, login: e.target.value})
    }

    const handleUpdatePassword = (e) => {
        setUserInfo({...userInfo, password: e.target.value})
    }

    const handleGetToken = () => {
        fetchAuth({
            variables: {login: userInfo.login, password: userInfo.password},
        });
    }

    return (
        <div className="container">
            <h1>Пытаемся залогиниться!</h1>
            <div style={{width:200}}>
                <label>Логин:<input type='text' value = {userInfo.login} onChange={handleUpdateLogin}/></label>
                <label>Пароль:<input type='password' value = {userInfo.password} onChange={handleUpdatePassword}/></label>
            </div>
            <button onClick={handleGetToken}>Войти</button>
        </div>
    )
}

export default Login