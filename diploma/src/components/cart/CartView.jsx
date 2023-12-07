import { useDispatch } from "react-redux";
import { connect } from "react-redux";

import { cartSlice } from "../redux/reducers/cartReducer";
import { store } from "../redux";
import styles from "./cart.module.css";
import { actionSetOrder } from "../redux/reducers/cartReducer";

const CartView = ({cart}) => {
    const dispatch = useDispatch();
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
                <OneString key={index} item={item} index={index} />
            )}
            {arrCart.length?
                <div>
                    <button onClick={()=>dispatch(cartSlice.actions.cartClear())}>Очистить корзину</button>
                    <button onClick={()=>dispatch(actionSetOrder())}>Создать заказ</button>
                </div>
                :
                <div>В корзине нет товаров</div>
            }   
        </>
    )
}

const OneString = ({item, index}) =>{
    const dispatch = useDispatch();
    return (
    <div key={index} className={styles.cartItems}>
        <div>Наименование: {item.good.name}</div>
        <div>Цена: {item.good.price}</div>
        <input 
            type="number" 
            value = {item.count}
            onChange={(e) =>{
                if(Number(e.target.value)>0){
                    dispatch(cartSlice.actions.cartSet({"count":Number(e.target.value), 'good':item.good}));
                }
            }}
        />
        <button onClick={()=>{
            dispatch(cartSlice.actions.cartAdd({count:1, 'good':item.good}));
        }}>+</button>
        <button onClick={()=>{dispatch(cartSlice.actions.cartSub({count:1, 'good':item.good}));}}>-</button>
        <button onClick={()=>{dispatch(cartSlice.actions.cartDel({'good':item.good}));}}>Удалить</button>
    </div>)
            
}

const mapStateToPropsCartView = () => {
    const cart = {...store.getState().cart};
    delete cart._persist;
    return {'cart':cart};
}

export const CartViewOnScreen = connect(mapStateToPropsCartView)(CartView);
