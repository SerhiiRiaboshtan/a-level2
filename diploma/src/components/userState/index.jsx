import UserIsAuthorized from "./UserIsAuthorized";
import styles from "./userState.module.css"

const UserState = () => {
    return(   
        <div className={styles.classUserState}>
            <UserIsAuthorized userName={"UserName"}/>
        </div>
    ) 
}

export default UserState