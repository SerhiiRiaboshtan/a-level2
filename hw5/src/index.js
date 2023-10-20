import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const GQL_SERVER_URL='https://shop-roles.node.ed.asmer.org.ua/graphql'

const client = new ApolloClient({
  uri: GQL_SERVER_URL,
  cache: new InMemoryCache(),
});

client.query({
    query: gql`
      query GetToken {
        login(login: "admin", password: "123123") 
      }
    `,
  }).then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
