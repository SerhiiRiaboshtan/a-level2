import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { Grid, Paper, TextField, Button, Typography } from "@mui/material";

import styles from "./authorization.module.css";
import { actionFullRegistration } from "../redux/reducers/authReducer";

const RegistrationForm = () => {
  const [inputValue, setInputValue] = useState({login:'', password:'', nickName:''});
  const dispatch = useDispatch();
  const handleChangeLogin = event => {
    setInputValue({...inputValue, login:event.target.value});
  }

  const handleChangePassword = event => {
    setInputValue({...inputValue, password:event.target.value});
  }

  const handleChangeNickname = event => {
    setInputValue({...inputValue, nickName:event.target.value});
  }

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(actionFullRegistration({'login': inputValue.login, 'password': inputValue.password}));
  }

  return (
    <>
      <Grid 
        container 
        direction="column"
        alignContent="center"
      >
        <Paper elevation={10} className={styles.item}>
          <Typography variant="h5">Регистрация</Typography>
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
            <TextField
              label="Ник"
              variant="outlined"
              margin="normal"
              fullWidth
              // required
              onChange={handleChangeNickname}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className={styles.submit}
              // onClick={()=>{alert('Тут запускается регистрация')}}
            >
              Зарегистрироваться
            </Button>
          </form>
        </Paper>
      </Grid>
    </>
  );
}

export default RegistrationForm;