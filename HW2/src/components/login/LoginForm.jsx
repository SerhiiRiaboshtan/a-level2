import styles from './loginForm.module.css'
import { useState } from 'react';

const LoginForm = ({onLogin}) => {
    const [textLogin, setTextLogin]=useState('');
    const [textPassword, setTextPassword]=useState('');
    return (
        <div className={styles.login}> 
            <div className={styles.loginPassword}>     
                <div className={styles.loginInput}>
                    <p className={styles.titleLoginPassword}>Login:</p>
                    <input
                        value={textLogin} 
                        onChange = {
                            (e) => setTextLogin(e.target.value)
                        } 
                    />
                </div>
                <div className={styles.loginInput}>    
                    <p className={styles.titleLoginPassword}>Password:</p>
                    <input
                        value={textPassword}
                        onChange = {
                            (e) => setTextPassword(e.target.value)
                        }
                    />
                </div>
            </div>
            <button 
                className = {styles.buttonLogin}
                disabled = {!(textLogin&&textPassword)}
                onClick = {() => onLogin(textLogin, textPassword)
            }>
                Login
            </button>            
        </div>
        
    )
}

export default LoginForm