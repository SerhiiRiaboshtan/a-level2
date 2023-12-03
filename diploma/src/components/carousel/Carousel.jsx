import { useState } from 'react';

import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CardMedia from '@mui/material/CardMedia';

import styles from "./carousel.module.css";
import Thumbnails from './Thumbnails';

export const Carousel = (props) => {
    const { images } = props; 
    const updatePicture = (newPicture) => setCurrentPicture(newPicture)
    const [currentPicture, setCurrentPicture] = useState(0);
    return (
        <div className={styles.carousel}>
            <div className={styles.container}>
                {images.length>1 &&<div 
                    className={styles.arrowClass}
                    onClick={() => {
                            setCurrentPicture(currentPicture>0?(currentPicture-1):(images.length-1))
                            }
                    }
                >
                        <ListItemIcon sx={{ color: "inherit" }}>
                            <ArrowBackIosNewOutlinedIcon/>
                        </ListItemIcon>
                </div>}
                <div>
                    <CardMedia
                        component="img"
                        alt="good foto"
                        height="250"
                        image={`http://shop-roles.node.ed.asmer.org.ua/${images[currentPicture].url}`}
                        style={{objectFit: 'contain'}}
                    />
                </div>
                {images.length>1 &&<div
                    className={styles.arrowClass}
                    onClick={
                        () => setCurrentPicture(currentPicture<(images.length-1)?(currentPicture+1):(0))

                    }
                >
                        <ListItemIcon sx={{ color: "inherit" }} >
                            <ArrowForwardIosOutlinedIcon/>
                        </ListItemIcon>
                </div>}
            </div>
            {images.length>1 && <Thumbnails
                images={images} 
                current={currentPicture}
                onChange={updatePicture}/>
            } 
        </div>
    )
}
