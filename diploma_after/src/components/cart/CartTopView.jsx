import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { store } from "../redux";
import cart from "../../img/cart.webp"
import styles from "./cart.module.css"

const CartTopView = ({amount}) =>{
    const navigate = useNavigate();
    // console.log("amount->", {amount});
    return (
        <div 
            className={styles.cartTopView}
            onClick={()=> navigate('/user/cart')}
        >
            
            <img className={styles.cartImage} src={cart} alt="Пропала корзина"/>
            
            <div className={styles.amountCart} >
                {amount}
            </div>
        </div>
    )
}

const mapStateToPropsCartTopView = (state) => {
    let amount=0;
    const tempData=store.getState().cart;

    if(Object.keys(tempData).length){
        for( const property in tempData) {
            amount+= property!=='_persist'?tempData[property].count: 0;
        }
    }
    return {'amount':amount}
}

export const CartTopViewOnScreen = connect(mapStateToPropsCartTopView)(CartTopView)
