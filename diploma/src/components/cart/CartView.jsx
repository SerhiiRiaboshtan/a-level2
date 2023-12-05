import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { useState } from "react";

import { cartSlice } from "../redux/reducers/cartReducer";
import { store } from "../redux";
import styles from "./cart.module.css";


const CartView = ({cart}) => {
    const dispatch = useDispatch();
    console.log("cart in CartView->", cart);
    let arrCart=[];
    for(const key in cart){
        arrCart.push(cart[key]);
    }
    return (
        <>
            <h1>
               Корзина:
            </h1>
            {arrCart.map((item, index)=> 
                <OneString item={item} index={index} />
            )}
            <button onClick={()=>dispatch(cartSlice.actions.cartClear())}>Очистить корзину</button>
            <button>Создать заказ</button>
        </>
    )
}

const OneString = ({item, index}) =>{
    const dispatch = useDispatch();
    const [value, setValue] = useState(item.count);
    return (
    <div key={index} className={styles.cartItems}>
        <div>Наименование: {item.good.name}</div>
        <div>Цена: {item.good.price}</div>
        <input 
            type="number" 
            value= {value}
            onChange={(e) =>{
                setValue(e.target.value)
                // console.log("item count->", item)
                dispatch(cartSlice.actions.cartSet({"count":Number(e.target.value), 'good':item.good}))
            }}
        />
        <button onClick={()=>{dispatch(cartSlice.actions.cartAdd({count:1, 'good':item.good}));}}>+</button>
        <button onClick={()=>{dispatch(cartSlice.actions.cartSub({count:1, 'good':item.good}));}}>-</button>
        <button onClick={()=>{dispatch(cartSlice.actions.cartDel({'good':item.good}));}}>Удалить</button>
    </div>)
            
}

const mapStateToPropsCartView = () => {
    const cart = {...store.getState().cart};
    delete cart._persist;
    // console.log("mapStateToPropsCartView->", cart);
    return {'cart':cart};
}

export const CartViewOnScreen = connect(mapStateToPropsCartView)(CartView);
