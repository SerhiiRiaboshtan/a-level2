import { gql } from "@apollo/client";
// import { useEffect } from "react";
import { client } from "../../gql";
// import { GET_USER_INFO } from "../../gql";
import { store } from "../..";

const LoginOk = () => {
    // const [fetchAuth, { data }] = useLazyQuery(GET_USER_INFO);
    // useEffect(() =>{
    //     if (data) {
    //         console.log('User data in LoginOk is Ok:', data)
    //     }
    //     else {
    //         console.log('Data отсутствует :', data)
    //     }
    // }, [data])
    
    
    const handleGetUserData = () => {
        console.log('Пытаемся получить данные пользователя: ', store.getState().user.login);
        // fetchAuth({
        //     variables: {testUser: store.getState().user.login},
        //     context: {
        //         headers: `bearer ${store.getState().user.token}`,
        //     },
        // });
        const customHeaders = {
            Authorization: `Bearer ${store.getState().user.token}`,
          };
       
        client.query({
          query: gql`
          query userFind($testUser: String) {
              UserFindOne(query: $testUser) {
                _id
                createdAt
                login
                nick
                acl
              }
          }`,
          variables: {testUser: store.getState().user.login},
          context: {
            headers: customHeaders,
          },
        })
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log('Error GET_USER_INFO', error)
        });
    }

    return (
        <div>
            <h1>Залогинились!</h1>
            <div style={{display: 'flex', flexDirection: 'column'}}>
               <p>Login:{store.getState().user.login}</p> 
               <p>Token:{store.getState().user.token}</p> 
            </div>
            <button onClick={handleGetUserData}>Данные</button>
        </div>
    )
}


export default LoginOk;