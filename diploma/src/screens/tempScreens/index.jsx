import { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
// import { api } from '../../components/rtkQuery/index.jsx';
import { store } from '../../components/redux';
import { actionFullLogin, actionLogout } from '../../components/redux/reducers/authReducer.js';
import styles from './tempScreens.module.css';

export const LoginFormTest = () => {
    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
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

export const FileUpload = () => {
    const [formData, setFormData] = useState({
        action: "/upload",
        method: "post",
        enctype: "multipart/form-data",
        id: "form",
    });
    const handleInputChange = (e) => {
        const { name, files } = e.target;
        setFormData({
            ...formData,
            [name]: files[0],
        });
        const formDataObject = new FormData();
        for (const key in formData) {
            formDataObject.append(key, formData[key]);
        }
        console.log("formDataObject->", formDataObject);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataObject = new FormData();
        for (const key in formData) {
            formDataObject.append(key, formData[key]);
        }
        fetch('http://shop-roles.node.ed.asmer.org.ua/upload', {
                        method: "POST",
                        headers: store.getState().auth.token ? {Authorization: 'Bearer ' + store.getState().auth.token} : {},
                        body: formDataObject,
                    })
                    .then(res => res.json())
                    .then(json => console.log('UPLOAD RESULT', json))
        }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    File:
                    <input type="file" name="photo" id='photo' onChange={handleInputChange}/>
                    <button type="submit">Submit</button>
                </label>
            </form>
            <img 
                // src="http://shop-roles.node.ed.asmer.org.ua/images/07c58ea27cb478a9c745795b58b83b35" 
                alt="" 
                style = {{ width : "300px", heigth : "200px", objectFit: 'contain' }}/>
        </>
    )
}