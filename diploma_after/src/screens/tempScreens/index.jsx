import { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import {useDropzone} from 'react-dropzone';

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
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      ));
    // console.log("acceptedFiles->", files);
    // const [formData, setFormData] = useState({
    //     action: "/upload",
    //     method: "post",
    //     enctype: "multipart/form-data",
    //     id: "form",
    // });
    // const handleInputChange = (e) => {
    //     const { name, files } = e.target;
    //     console.log("handleInputChange->", files[0], 'name->', name);
    //     setFormData({
    //         ...formData,
    //         [name]: files[0],
    //     });
    //     alert("onChange work!");
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        // setFormData({
        //     ...formData,
        //     'photo': acceptedFiles[0],
        // });
        const formDataObject = new FormData();
        // for (const key in formData) {
        //     formDataObject.append(key, formData[key]);
        // }
        formDataObject.append("photo", acceptedFiles[0]);
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
                    <section style={{border:"solid", width:"300px"}}className="container">
                        <div {...getRootProps({className: 'dropzone'})}>
                            {/* <input type="file" name="photo" id='photo' {...getInputProps()} onChange={handleInputChange}/> */}
                            <input type="file" name="photo" id='photo' {...getInputProps()}/>
                            <p >Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </section>
                    <button type="submit">Submit</button>
                </label>
            </form>
            <h4>Files</h4>
            <ul>{files}</ul>
            <img 
                // src="http://shop-roles.node.ed.asmer.org.ua/images/0254ce62f073b0a2da0ea5e163a2c56b" 
                alt="" 
                style = {{ width : "300px", heigth : "200px", objectFit: 'contain' }}/>
        </>
    )
}