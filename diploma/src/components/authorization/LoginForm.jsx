import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Grid, Paper, TextField, Button, Typography } from "@mui/material";
import styles from "./authorization.module.css";

import { actionFullLogin } from "../redux/reducers/authReducer";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({login:'', password:''});
  
  const handleChangeLogin = event => {
    setInputValue({...inputValue, login:event.target.value});
  }

  const handleChangePassword = event => {
    setInputValue({...inputValue, password:event.target.value});
  }

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(actionFullLogin({'login': inputValue.login, 'password': inputValue.password}));
    
            navigate('/user/profile')
  }

  return (
    <>
      <Grid 
        container 
        direction="column"
        alignContent="center"
      >
        <Paper elevation={10} className={styles.item}>
          <Typography variant="h5">Вход</Typography>
          <form className={styles.form} onSubmit={handleSubmit}>
            <TextField
              label="Логин"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              onChange={handleChangeLogin}
            />
            <TextField
              label="Пароль"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              onChange={handleChangePassword}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className={styles.submit}
            >
              Войти
            </Button>
          </form>
        </Paper>
        <Paper elevation={10} className={styles.item}>
          <Typography variant="h5">Ещё нет аккаунта?</Typography>
          <form className={styles.form}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className={styles.submit}
              onClick={()=>navigate('/registration')}
            >
              Перейти к регистрации
            </Button>
          </form>
        </Paper>
      </Grid>
    </>
  );
}

export default LoginForm;
