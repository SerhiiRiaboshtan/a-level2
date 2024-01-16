import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements, 
  Route, 
} from "react-router-dom";

import Layout from './screens/layout';
// import LayoutAdmin from './screens/layoutAdmin';
import ErrorPage from './screens/errorPage';
import MainPage from './screens/mainPage';
import ContactsPage from './screens/contacts';
import UserForm from './screens/userForm/userForm';
import CategoryGoodsOnScreen from './components/goods/CategoryGoods';
import OneGoodOnScreen from './components/goods/OneGoodOnScreen';

const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/"  element = {<Layout/>} errorElement = {<ErrorPage/>}>
          {/* <Route path="/admin" element = {<LayoutAdmin/>} errorElement = {<ErrorPage/>}/> */}
          <Route path="/mainpage" element = {<MainPage/>}/>
          <Route path="/contacts/*" element = {<ContactsPage/>}/>  
          <Route path="/user/*" element = {<UserForm/>}/>
          <Route path="/category/*" element = {<CategoryGoodsOnScreen/>}/>
          <Route path="/good/*" element = {<OneGoodOnScreen/>}/>
      </Route>

))
const App = () =><RouterProvider router={router}/>

export default App;
