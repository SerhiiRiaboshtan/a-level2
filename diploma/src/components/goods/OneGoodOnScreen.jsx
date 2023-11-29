import { connect } from "react-redux";
import { useDispatch } from 'react-redux';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { store } from "../redux";
import { cartSlice } from '../redux/reducers/cartReducer';
import noPhoto from '../../img/noPhoto.jpg';


const OneGood = ({good, amount}) =>{
    const dispatch = useDispatch();

    return (
        <Card 
            sx={{ width: 600, minHeight: 600, margin: 1 }}
            style={{display: 'flex', flexDirection: 'column' }}
            >
            <CardMedia
                component="img"
                alt="good foto"
                height="250"
                image={good.images.length?`http://shop-roles.node.ed.asmer.org.ua/${good.images[0].url}`:"../../img/noPhoto.jpg"}
                style={{objectFit: 'contain',}}
                />
            {!good.images.length && <img src={noPhoto} alt="qq" />}
            <CardContent style={{height: "300", flex:1, justifyContent: 'center'}}>
                <Typography gutterBottom variant="h5" component="div" textAlign="center">
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

const mapStateToPropsCartTopView = (state) => {
    const good = store.getState().cat.currentGood;
    let amount = 0;
    // console.log(``)
    if ( Object.hasOwn(store.getState().cart, good._id) ){
        amount = store.getState().cart[good._id].count;
    }  
    return { 'good': good, 'amount': amount }
}

const OneGoodOnScreen = connect(mapStateToPropsCartTopView)(OneGood);

export default OneGoodOnScreen;