import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import Layout from './components/layout';
import ErrorPage from './screens/errorPage';
import MainPage from './screens/mainPage';
import ContactsPage from './screens/contacts';
import ThirdComponent from './screens/third';
import FourthComponent from './screens/fourth';
import FifthComponent from './screens/fifth';

const router = createBrowserRouter(createRoutesFromElements(
  <Route element = {<Layout/>} errorElement = {<ErrorPage/>}>
      <Route path="/" element = {<MainPage/>}/>
      <Route path="/contacts">  
        <Route path=":contactID" element = {<ContactsPage/>}/>
        <Route path="" element = {<ContactsPage/>}/>
       </Route>
      <Route path="/third" element = {<ThirdComponent/>}/>
      <Route path="/fourth" element = {<FourthComponent/>}/>
      <Route path="/fifth" element = {<FifthComponent/>}/>

  </Route>
))
const App = () =><RouterProvider router={router}/>

export default App;
