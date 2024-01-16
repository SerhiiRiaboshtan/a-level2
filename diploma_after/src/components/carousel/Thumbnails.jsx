import styles from './carousel.module.css'

const Thumbnails = (props) => {
    const handleButtonClick = (i) => {
        props.onChange(i);
    }
    const localStyles = {
        border: '3px solid black'
    }
    // console.log('Thumbnails->',props.images );
    return(
        <div className={styles.smallPictures}>
            {props.images.map((image, index) => {
                return (
                    <div key={index} style={index===props.current?{...localStyles}:{}}>
                        <img 
                            className={styles.oneSmallPicture} 
                            key={index} 
                            alt='loading' 
                            src={`http://shop-roles.node.ed.asmer.org.ua/${image.url}`}
                            onClick={() => handleButtonClick(index)}
                        />
                    </div>
                )
            })  }
        </div>
    )
}

export default Thumbnails