import { useNavigate } from "react-router-dom";

export const CartTopView = () =>{
    const navigate = useNavigate();
    return (
        <div onClick={()=> navigate('/cart')}>
            Корзина
        </div>
    )
}
