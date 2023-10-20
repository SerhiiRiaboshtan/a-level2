import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import Login from './login';
import Contacts from './contacts';
import Navigation from './components/navigation';
import StopWatch from './components/StopWatch';
import ErrorPage from './components/errorPage';

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <>
//       <p>Test</p>
//       <Login/>
//     </>,
//   },
//   {
//     path: "/contacts",
//     element: <Contacts/>
//   },
//   {
//     path: "/stopWatch",
//     element: <>
//       <Stopwatch/>
//       <a href="/"> Login</a><br/>
//       <a href="/contacts"> Contacts</a>
//     </>,
//   },
// ]);

const Layout = () => {
  return (
    <div className='container'>
      <Navigation/>
      <div style={{borderWidth:2}}>
        <Outlet/>
      </div>
    </div>
  )}

const router = createBrowserRouter(createRoutesFromElements(
  <Route element = {<Layout/>} errorElement = {<ErrorPage/>}>
      <Route path="/" element = {<Login/>}/>
      <Route path="/contacts">  
        <Route path=":contactID" element = {<Contacts/>}/>
        <Route path="" element = {<Contacts/>}/>
      </Route>
      <Route path="/stopwatch" element = {<StopWatch/>}/>
  </Route>
))
const App = () =><RouterProvider router={router}/>

export default App;
