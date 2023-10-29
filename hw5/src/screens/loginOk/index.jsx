import { gql } from "@apollo/client";
// import { useEffect } from "react";
// import { useLazyQuery } from "@apollo/client";
import { client } from "../../gql";
// import { GET_USER_INFO } from "../../gql";
import { store } from "../..";

const LoginOk = () => {
    // const [fetchAuth, { data }] = useLazyQuery(GET_USER_INFO);
    // useEffect(() =>{
    //     if (data) {
    //         console.log('User data in LoginOk is Ok:', data)
    //     }
    //     // else {
    //     //     console.log('Data отсутствует :', data)
    //     // }
    // }, [data])
        
    const handleGetUserData = () => {
        console.log('Пытаемся получить данные пользователя: ', store.getState().user.login);
        // fetchAuth({
        //     variables: {testUser: `${JSON.stringify([{login: store.getState().user.login}])}`},
        //     context: {
        //         headers: {
        //           Authorization: `Bearer ${store.getState().user.token}`,
        //           },
        //      },
        //  });
       
        client.query({
          query: gql`
          query userFind($testUser: String) {
              UserFind(query: $testUser) {
                _id
                createdAt
                login
                nick
                acl
              }
          }`,
          variables: {testUser: `${JSON.stringify([{login: store.getState().user.login}])}`},
          context: {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
            }
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