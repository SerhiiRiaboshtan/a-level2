import styles from './carousel.module.css'

const Thumbnails = (props) => {
    const handleButtonClick = (i) => {
        props.onChange(i);
    }
    const localStyles = {
        border: '3px solid black'
    }

    return(
        <div className={styles.smallPictures}>
                {props.images.map((image, index) => {
                    console.log(index===props.current?{localStyles}:{});
                    return (
                        <div style={index===props.current?{...localStyles}:{}}>
                            <img 
                                className={styles.oneSmallPicture} 
                                key={index} 
                                alt='loading' 
                                src={image}
                                onClick={() => handleButtonClick(index)}
                            />
                        </div>
                    )
                })}
        </div>
    )
}

export default Thumbnails