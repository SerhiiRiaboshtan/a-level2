import { Route, Routes, Outlet } from "react-router-dom";

// import styles from "./userForm.module.css";
import LoginForm from "../../components/authorization/LoginForm";
import RegistrationForm from "../../components/authorization/RegistrationForm";
import { CartViewOnScreen } from "../../components/cart/CartView";
import { OrdersViewOnScreen } from "../../components/orders";
import { ProfileViewOnScreen } from "../../components/profile/ProfileView";

const UserForm = () => {
    return (
        <div>
            <Routes>
                <Route path="login" element={<LoginForm/>}/>
                <Route path="registration" element={<RegistrationForm/>}/>
                <Route path="cart" element={<CartViewOnScreen/>}/>
                <Route path="ordershistory" element={<OrdersViewOnScreen/>}/>
                <Route path="profile" element={<ProfileViewOnScreen/>}/>
            </Routes>
            <Outlet/>
        </div>
    )
} 

export default UserForm;