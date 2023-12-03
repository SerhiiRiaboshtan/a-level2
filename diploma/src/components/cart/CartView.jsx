import { useDispatch } from "react-redux";
import { connect } from "react-redux";

import { cartSlice } from "../redux/reducers/cartReducer";
import { store } from "../redux";

export const CartView = ({cart}) => {
    const dispatch = useDispatch();
    let arrCart=[];
    for(const key in cart){
        arrCart.push(cart[key]);
    }
    console.log("cart in CartView->", arrCart);

    return (
        <>
            <div>
               Корзина на основном экране
            </div>
            {arrCart.map((item)=> 
                <div >
                    <div>{item.good.name}</div>
                    <div>{item.good.price}</div>
                    <div>{item.count}</div>
                    
                    
                </div>
            )}
            <button onClick={()=>dispatch(cartSlice.actions.cartClear())}>Очистить корзину</button>
            <button>Создать заказ</button>
        </>
    )
}

const mapStateToPropsCartView = () => {
    const cart = {...store.getState().cart};
    delete cart._persist;
    // console.log("mapStateToPropsCartView->", cart);
    return {'cart':cart};
}

export const CartViewOnScreen = connect(mapStateToPropsCartView)(CartView);
