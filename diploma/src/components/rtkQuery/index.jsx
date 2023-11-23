import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';

// import { store } from '../redux'

export const api = createApi({
    baseQuery: graphqlRequestBaseQuery({
        url: 'http://shop-roles.node.ed.asmer.org.ua/graphql',
        prepareHeaders(headers, {getState}){
            const { token } = getState().auth
            //console.log('getState().auth from createApi->', getState().auth)
            if (token){
                headers.set('Authorization', "Bearer " + token)
            }
            // console.log('getState from createApi->',getState().auth)
            return headers
        }
    }),
    endpoints: (builder) => ({
        getRootCats:builder.query({ // Получение списка корневых категорий
            query: () => ({
                document: `query {
                                CategoryFind(query: "[{\\"parent\\": null}]"){
                                    _id name
                                }
                            }`
            }),
        }),
        login: builder.mutation({   // получение токена пользователем по login и password
            query: ({login, password}) => ({
                document: `
                    query login($login: String, $password: String) {
                        login(login: $login, password: $password) 
                    }
                    `,
                variables: {login, password}})
        }),
        getUserById: builder.query({ //Получение данных пользователя по _id 
            query: ({_id}) => ({
                document: `query oneUser($userID: String){
                    UserFindOne(query: $userID){
                        _id login nick avatar{ url }
                    }
                }`,
                variables: {userID: JSON.stringify([{_id}])}
            }),
            providesTags: (result, error, {_id}) => { 
                return ([{ type: 'User', id: _id}])
            }
        }),
    })
})

console.log("api->", api);