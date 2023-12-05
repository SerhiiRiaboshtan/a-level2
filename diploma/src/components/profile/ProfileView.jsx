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
    console.log("user in ProfileView->", user);
    return (
        <div>
            <h1>
                Профиль пользователя:
            </h1>
            <Card 
                sx={{ width: 345, minHeight: 600, margin: 1 }}
                style={{display: 'flex', flexDirection: 'column' }}
            >
                <CardContent style={{height: "300", flex:1}}>
                <Typography gutterBottom variant="h5" component="div">
                    Login: {user?.payload?.sub?.login}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    Nick: {user?.payload?.sub?.nick?user.payload.sub.nick:"Ника нет пока"}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    Avatar: {user?.payload?.sub?.avatar?"Аватар есть":"Аватара  нет пока"}
                </Typography>
                </CardContent>
            </Card>
        </div>
        
        
    )
}

const mapStateToPropsProfileView = () => {
    const user = store.getState().auth;
    console.log("user in mapStateToPropsProfileView", user);
    return {'user':user}
}

export const ProfileViewOnScreen = connect (mapStateToPropsProfileView)(ProfileView);