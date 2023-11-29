import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import { catSlice } from '../redux/reducers/categoryReducer';
import { cartSlice } from '../redux/reducers/cartReducer';
import noPhoto from '../../img/noPhoto.jpg';

export const GoodCard = ({good}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <Card 
            sx={{ width: 345, minHeight: 600, margin: 1 }}
            style={{display: 'flex', flexDirection: 'column' }}
            >
            <CardMedia
                component="img"
                alt="good foto"
                height="140"
                image={good.images.length?`http://shop-roles.node.ed.asmer.org.ua/${good.images[0].url}`:{noPhoto}}
                style={{objectFit: 'contain',}}
                onClick={() => {
                    dispatch(catSlice.actions.saveOneGood(good));
                    navigate("/good");
                }} 
            />
            {!good.images.length && <img src={noPhoto} alt="qq" />}
            <CardContent style={{height: "300", flex:1}}
                onClick={() => {
                    dispatch(catSlice.actions.saveOneGood(good));
                    navigate("/good");
                }} 
            >
                <Typography gutterBottom variant="h5" component="div">
                    {good.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {good.description}
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center', flexDirection: 'column' }}>
                <Typography gutterBottom variant="h5" component="div">
                    Цена:{good.price}
                </Typography>
                <Button 
                    size="small" 
                    onClick={() => {dispatch(cartSlice.actions.cartAdd({count:1, 'goodID':good._id, 'goodName':good.name}));}}
                >
                    Добавить в корзину
                </Button>
            </CardActions>
        </Card>
    );
}
