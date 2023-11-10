function authReducer(state={}, {type, token}){
    if(type==='AUTH_LOGIN'){
        const payload=(token);//jwtDecode
        if(payload){
            return {token, payload};
        }
    }
    if(type==='AUTH_LOGOUT'){
        return {};
    }
    return state;
}

export default authReducer;

// const actionAuthLogin  = token => ({type: 'AUTH_LOGIN', token});
// const actionAuthLogout = ()    => ({type: 'AUTH_LOGOUT'});

export const actionLogin =(login, password) => ({
    type : 'AUTH_LOGIN',
    payload : {login, password},
});