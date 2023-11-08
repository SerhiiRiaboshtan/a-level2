import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements, 
  Route
} from "react-router-dom";

import Layout from './screens/layout';
import ErrorPage from './screens/errorPage';
import MainPage from './screens/mainPage';
import ContactsPage from './screens/contacts';
import ThirdComponent from './screens/third';
import FourthComponent from './screens/fourth';
import LoginForm from './components/authorization/LoginForm';
import RegistrationForm from './components/authorization/RegistrationForm';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element = {<Layout/>} errorElement = {<ErrorPage/>}>
      <Route path="/mainpage" element = {<MainPage/>}/>
      <Route path="/contacts/*" element = {<ContactsPage/>}/>  
      <Route path="/third" element = {<ThirdComponent/>}/>
      <Route path="/fourth" element = {<FourthComponent/>}/>
      <Route path="/login" element = {<LoginForm/>}/>
      <Route path="/registration" element = {<RegistrationForm/>}/>
  </Route>
))
const App = () =><RouterProvider router={router}/>

export default App;
