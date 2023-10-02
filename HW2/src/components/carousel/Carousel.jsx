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
            <div className={styles.container}>   
                <img 
                    className={styles.element}
                    alt='loading' 
                    src={props.images[currentPicture]}
                    onClick={() => setCurrentPicture(currentPicture<props.images.length-1?currentPicture+1:currentPicture)}
                />
                <div 
                    className={styles.testStyle}
                    onClick={() => setCurrentPicture(currentPicture>0?currentPicture-1:currentPicture)
                    }
                >
                   Движение слайда влево 
                </div>
                <div 
                    className={styles.testStyle}
                    onClick={() => setCurrentPicture(currentPicture<props.images.length-1?currentPicture+1:currentPicture)
                    }
                >
                   Движение слайда вправо
                </div>
            </div> 
            <Thumbnails
                images={props.images} 
                current={currentPicture}
                onChange={updatePicture}/>
            {/* <div className={styles.smallPictures}>
                {props.images.map((image, index) => {
                    return (
                        <img 
                            className={styles.oneSmallPicture}
                            key={index} 
                            alt='loading' 
                            src={image}
                            onClick={() => setCurrentPicture(index)}
                        />
                    )
                })}
            </div> */}
        </div>
    )
}
export default Carousel