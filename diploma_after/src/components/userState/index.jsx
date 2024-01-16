import { connect } from "react-redux";

import { store } from '../redux';
import UserIsAuthorized from "./UserIsAuthorized";
import UserIsNotAuthorized from "./UserIsNotAuthorized";
import styles from "./userState.module.css";


const UserState = ({login, admin}) => {
    
    return(   
        <div className={styles.classUserState}>
            {login?<UserIsAuthorized userName={login} userAdmin={admin} />:<UserIsNotAuthorized/>}
        </div>
    ) 
}

const mapStateToPropsUserState = (state) => {
    const tempData = store.getState().auth;
    if(Object.hasOwn(tempData, 'payload') && tempData.payload) {
        return {login: tempData.payload.sub.login, admin: tempData.payload.sub.acl.includes('admin')};
    }
    else return {login: null}
}

const UserStateOnScreen = connect(mapStateToPropsUserState)(UserState);

export default UserStateOnScreen;