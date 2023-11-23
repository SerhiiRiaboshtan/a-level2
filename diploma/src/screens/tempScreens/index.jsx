import { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
// import { api } from '../../components/rtkQuery/index.jsx';
import { store } from '../../components/redux';
import { actionFullLogin, actionLogout } from '../../components/redux/reducers/authReducer.js';
// import { store } from '../../components/redux';
import styles from './tempScreens.module.css';

export const LoginFormTest = () => {
    const dispatch = useDispatch()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    // console.log('LOGIN FORM isLoading->', isLoading, " data->", data);
    return (
        <div className={styles.container}>
            <div>
                <input value={login} onChange={e => setLogin(e.target.value)}/>
                <input value={password} onChange={e => setPassword(e.target.value)}/>
                <button onClick={() => dispatch(actionFullLogin({login, password}))} >
                    Login...
                </button>
                <button onClick={()=> dispatch(actionLogout())}>
                    Logout
                </button>
            </div>
            <div className={styles.conteinerUserInfo}>
                <CUserInfo/>
            </div>
        </div>
    )
}

const UserInfo = ({login}) => {
    // const dispatch = useDispatch();
    // console.log('User->', data?data.sub.login:"No user");
    console.log("data->", login);

    
    return (
        <div>
            User info
            <button
                onClick={() => {
                    console.log('User->', login?login:"No user")
                }}
                >
                State
            </button>
        </div>
    )
}

const mapStateToPropsUserInfo = (state) => {
    const tempData = store.getState().auth;
    if(Object.hasOwn(tempData, 'payload') && tempData.payload) {
        return {login: tempData.payload.sub.login};
    }
    else return {login: null}
}
const CUserInfo = connect( mapStateToPropsUserInfo )( UserInfo )