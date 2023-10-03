import { useState } from 'react';
import Thumbnails from './Thumbnails.jsx';
import styles from './carousel.module.css'

const Carousel = (props) => {
    const [currentPicture, setCurrentPicture] = useState(0);
    const updatePicture = (newPicture) => {
        setCurrentPicture(newPicture);
    }
    
    return (
        <div className={styles.carousel}>
            <div>   
                <div className={styles.container}>
                    <div 
                        className={styles.arrowLeft}
                        onClick={() => setCurrentPicture(currentPicture>0?currentPicture-1:currentPicture)
                        }
                    >
                       <p className='styles.arrowLeftButton'>`&#60`</p>
                    </div>
                    <img 
                        className={styles.bigImage}
                        alt='loading' 
                        src={props.images[currentPicture]}
                        onClick={() => setCurrentPicture(currentPicture<props.images.length-1?currentPicture+1:currentPicture)}
                    />
                </div>
            </div> 
            <Thumbnails
                images={props.images} 
                current={currentPicture}
                onChange={updatePicture}/>
        </div>
    )
}
export default Carousel