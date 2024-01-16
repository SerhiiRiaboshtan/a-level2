import { gql } from '@apollo/client'
import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';

const GQL_SERVER_URL='http://shop-roles.node.ed.asmer.org.ua/graphql'
const httpLink = new HttpLink({
    uri: GQL_SERVER_URL,
  });


export const client = new ApolloClient({
    link: from ([httpLink]),
    cache: new InMemoryCache(),
});


export const GET_TOKEN = gql`
    query getToken($login: String!, $password: String!) {
        login(login: $login, password: $password)
    }
`;

export const GET_USER_INFO = gql`
    query userFind($testUser: String) {
        UserFindOne(query: $testUser) {
          _id
          createdAt
          login
          nick
          acl
        }
    },
`;
      