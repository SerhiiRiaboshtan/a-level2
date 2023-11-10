// import { useState, useEffect } from "react"
// import { useLazyQuery } from '@apollo/client'
// import { setUserTokenAC } from '../../redux/reducers/userReducer.jsx'
// import { useDispatch } from "react-redux";
// import { GET_TOKEN } from "./index.jsx";



// const login = () => {

//     const [fetchAuth, { data }] = useLazyQuery(GET_TOKEN);
//     const dispatch = useDispatch();
//         if (data) {
//             dispatch(setUserTokenAC(data.login, userInfo.login));
//             if(data.login) {
//                 // console.log('login Ok');
                
//             } 


    
// fetchAuth({
//             variables: {login: userInfo.login, password: userInfo.password},
//         });
//     return (
        
//     )
// }

// export default login