import { connect } from "react-redux";
import { useEffect } from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { store } from "../redux";

export const ProfileView = ({user}) => {

    return (
        <div>
            <div>
                Профиль пользователя на основном экране
            </div>
            <Card 
                sx={{ width: 345, minHeight: 600, margin: 1 }}
                style={{display: 'flex', flexDirection: 'column' }}
            >
                <CardContent style={{height: "300", flex:1}}>
                <Typography gutterBottom variant="h5" component="div">
                    Login
                </Typography>
                </CardContent>
            </Card>
        </div>
        
        
    )
}

const mapStateToPropsProfileView = () => {
    // const user = store.getState(). 
}

export const ProfileViewOnScreen = connect (mapStateToPropsProfileView)(ProfileView);