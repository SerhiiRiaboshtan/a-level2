import styles from './rangeInput.module.css'
import { useState } from 'react';

const RangeInput = ({min, max})=> {
    const [text, setText]=useState('');
    return (
            <div className = {styles.input}>
                <input 
                    value={text} 
                    style={text.length<min || text.length>max?{color:'red'}:{color:'black'}} 
                    onChange = {
                                e => setText(e.target.value)
                    }
                />
            </div>
    )
}

export default RangeInput;