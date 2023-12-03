import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { actionLogout } from "../redux/reducers/authReducer";
import { actionGetUserOrders } from "../redux/reducers/categoryReducer";
import { store } from "../redux/index";

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20
  }
});

function UserIsAuthorized({ userName, userAdmin }) {
  // console.log('userName->', userName, '  userAdmin->', userAdmin)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = [
    {
      icon: <ShoppingCartIcon />,
      label: "Корзина",
      callBack:()=>navigate('/user/cart')
    },
    {
      icon: <WorkHistoryIcon />,
      label: "История заказов",
      callBack:()=>{
        navigate('/user/ordershistory');
        if(store.getState().auth.token){
          dispatch(actionGetUserOrders());
        }    
      }
    },
    { 
      icon: <ManageAccountsIcon />,
      label: "Профиль",
      callBack:()=>navigate('/user/profile') 
    },
    { 
      icon: <LogoutIcon />,
      label: "Выйти",
      callBack:()=>dispatch(actionLogout()) 
    },
    
  ];
  userAdmin && data.push({ 
      icon: <SupervisorAccountIcon />,
      label: "Администрирование",
      callBack:()=>alert('Типа входим в админку') 
    });
  const [open, setOpen] = React.useState(false);
 
  return (
    <Box sx={{ display: "flex"}}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true
              }
            }
          },
          palette: {
            mode: "dark",
            primary: { main: "rgb(102, 157, 246)" },
            background: { paper: "rgb(5, 30, 52)" }
          }
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: 256 }}>
          <FireNav component="nav" disablePadding>
            <Divider />
            <Box
              sx={{
                bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
                pb: open ? 2 : 0
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                  "&:hover, &:focus": { "& svg": { opacity: open ? 1 : 0 } }
                }}
              >
                <ListItemText
                  primary={userName}
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: "medium",
                    lineHeight: "20px",
                    maxHeight: "20px",
                    mb: "2px"
                  }}
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: "16px",
                    color: open ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)"
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    transform: open ? "rotate(-180deg)" : "rotate(0)",
                    transition: "0.2s"
                  }}
                />
              </ListItemButton>
              <Divider />
              {open &&
                data.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: "rgba(255,255,255,.8)" }}
                    onClick={() => { setOpen(false); item.callBack()}}
                  >
                    <ListItemIcon sx={{ color: "inherit" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium"
                      }}
                    />
                  </ListItemButton>
                ))}
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}

export default UserIsAuthorized