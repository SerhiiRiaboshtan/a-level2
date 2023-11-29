import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { store } from "../redux";

const CartTopView = ({amount}) =>{
    const navigate = useNavigate();
    return (
        <div onClick={()=> navigate('/user/cart')}>
            Корзина {amount}
        </div>
    )
}

const mapStateToPropsCartTopView = (state) => {
    let amount=0;
    const tempData=store.getState().cart;
    if(Object.keys(tempData).length){
        for( const property in tempData) amount+=tempData[property].count;
    }
    return {'amount':amount}
}

export const CartTopViewOnScreen = connect(mapStateToPropsCartTopView)(CartTopView)
