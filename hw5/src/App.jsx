// import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Layout from './components/layout';
import ErrorPage from './screens/errorPage';
import MainPage from './screens/mainPage';
import LoginOk from "./screens/loginOk";
import Login from './screens/login';
import Category from "./screens/category";


const router = createBrowserRouter(createRoutesFromElements(
  <Route element = {<Layout/>} errorElement = {<ErrorPage/>}>
      <Route path="/" element = {<MainPage/>}/>
      <Route path="/login" element = {<Login/>}/>  
      <Route path="/loginOk" element = {<LoginOk/>}/>
      <Route path="/category" element = {<Category/>}/>
  </Route>
))


const App = () =><RouterProvider router={router}/>

export default App;
