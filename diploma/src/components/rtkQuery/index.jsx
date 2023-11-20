import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { useState } from 'react';

export const api = createApi({
    baseQuery: graphqlRequestBaseQuery({
        url: 'http://shop-roles.node.ed.asmer.org.ua/graphql',
    }),
    endpoints: (builder) => ({
        getRootCats:builder.query({
            query: () => ({
                document: `query {
                                CategoryFind(query: "[{\\"parent\\": null}]"){
                                    _id name
                                }
                            }`
            }),
        }),
        login: builder.mutation({
            query: ({login, password}) => ({
                document: `
                    query login($login: String, $password: String) {
                        login(login: $login, password: $password) 
                    }
                    `,
                variables: {login, password}})
        }),
    })
})

export const LoginForm = () => {
    const [loginMutation,{isLoading, data}] = api.useLoginMutation()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    console.log('LOGIN FORM isLoading->', isLoading);
    console.log('LOGIN FORM', data?data: 'No data');
    return (
        <div>
            <input value={login} onChange={e => setLogin(e.target.value)}/>
            <input value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={() => loginMutation({login, password})} >
                Login...
            </button>
        </div>
    )
}