import { Route, Routes, Outlet } from "react-router-dom";

// import styles from "./userForm.module.css";
import LoginForm from "../../components/authorization/LoginForm";
import RegistrationForm from "../../components/authorization/RegistrationForm";
import { CartView } from "../../components/cart";
import { OrdersView } from "../../components/orders";
import { ProfileView } from "../../components/profile/ProfileView";

const UserForm = () => {
    return (
        <div>
            <Routes>
                    <Route path="login" element={<LoginForm/>}/>
                    <Route path="registration" element={<RegistrationForm/>}/>
                    <Route path="cart" element={<CartView/>}/>
                    <Route path="ordershistory" element={<OrdersView/>}/>
                    <Route path="profile" element={<ProfileView/>}/>
                    
            </Routes>
            <Outlet/>
        </div>
    )
} 

export default UserForm;