import { connect, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { store } from "../redux";
import { actionSetNick } from "../redux/reducers/authReducer";

export const ProfileView = ({user}) => {
    // console.log("user in ProfileView->", user);
    const dispatch = useDispatch();
    const [nick, setNick] = useState('');
    const [nickIsChange, setNickIsChange] = useState(false);
    useEffect(() =>{
        setNick(store.getState().auth.payload?.sub?.nick || '') 
    },[])
    return (
        <div>
            <h1>
                Профиль пользователя:
            </h1>
            <Card 
                sx={{ width: 600, minHeight: 600, margin: 1 }}
                style={{display: 'flex', flexDirection: 'column' }}
            >
                <CardMedia
                    component="img"
                    alt="no foto"
                    height="140"
                    image={user.payload?.sub?.avatar?`http://shop-roles.node.ed.asmer.org.ua/${user.payload.sub.avatar.url}`:""}
                    style={{objectFit: 'contain',}} 
                />
                <CardContent style={{height: "300", flex:1, padding: 50}}>
                    <Typography gutterBottom variant="h5" component="div">
                        Логин: {user?.payload?.sub?.login}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {/* Ник: {user?.payload?.sub?.nick?user.payload.sub.nick:"Ника нет пока"} */}
                        Ник:
                        <input value={nick} onChange={e => {
                            setNick(e.target.value);
                            setNickIsChange(true);
                        }}/>
                        {nickIsChange && <button onClick={() => {
                                dispatch(actionSetNick({"_id": user.payload.sub.id, nick}));
                                setNickIsChange(false);
                            }
                        }>Сохранить</button>}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Права доступа: {user?.payload?.sub?.acl.includes("admin")?"Администратор":"Простой смертный"}
                    </Typography>
                </CardContent>
            </Card>
        </div>
        
        
    )
}

const mapStateToPropsProfileView = () => {
    const user = store.getState().auth;
    // console.log("user in mapStateToPropsProfileView", user);
    return {'user':user}
}

export const ProfileViewOnScreen = connect (mapStateToPropsProfileView)(ProfileView);