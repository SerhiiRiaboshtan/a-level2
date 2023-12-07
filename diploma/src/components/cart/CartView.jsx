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
               Корзина
            </h1>
            {arrCart.length?
                <div className={styles.containerHeader}>            
                <div className={styles.picture}> </div>
                <div className={styles.name}>Наименование</div>
                <div className={styles.price}>Цена</div>
                <div className={styles.count}>Количество</div>
            </div>
            :<div></div>}
            <div className={styles.container}>
                {arrCart.map((item, index)=> 
                    <OneString key={index} item={item} index={index} />
                )}
            </div>
                {arrCart.length?
                    <div>
                        <button onClick={()=>dispatch(cartSlice.actions.cartClear())}>Очистить корзину</button>
                        <button onClick={()=>{
                                            store.getState().auth.token?dispatch(actionSetOrder()):alert("Авторизуйтесь, чтобы сделать заказ, пожалуйста!")
                                        }}>Создать заказ
                        </button>
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
        <div className={styles.oneRow}>
        <img className={styles.picture} alt="" src={item.good.images.length?`http://shop-roles.node.ed.asmer.org.ua/${item.good.images[0].url}`:{}}/>
            <div className={styles.name}>{item.good.name}</div>
            <div className={styles.price}>{item.good.price}</div>
            <div className={styles.count} >
                <button className={styles.btn} onClick={()=>{dispatch(cartSlice.actions.cartSub({count:1, 'good':item.good}));}}>-</button>
                <input 
                    className={styles.countSet}
                    type="number" 
                    value = {item.count}
                    onChange={(e) =>{
                        if(Number(e.target.value)>0){
                            dispatch(cartSlice.actions.cartSet({"count":Number(e.target.value), 'good':item.good}));
                        }
                    }}
                />
                <button className={styles.btn} onClick={()=>{dispatch(cartSlice.actions.cartAdd({count:1, 'good':item.good}));}}>+</button>
            </div>
            <button onClick={()=>{dispatch(cartSlice.actions.cartDel({'good':item.good}));}}>Удалить</button>
        </div>
    </div>)
            
}

const mapStateToPropsCartView = () => {
    const cart = {...store.getState().cart};
    delete cart._persist;
    return {'cart':cart};
}

export const CartViewOnScreen = connect(mapStateToPropsCartView)(CartView);
