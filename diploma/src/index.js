import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloProvider} from '@apollo/client';
import { Provider } from 'react-redux';
import getStore from './components/redux'
import { client } from './components/gql';
export const store = getStore()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>   
    </ApolloProvider>
  // </React.StrictMode>
);

