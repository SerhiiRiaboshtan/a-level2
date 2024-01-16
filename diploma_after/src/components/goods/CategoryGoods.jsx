import { connect } from "react-redux";

import { store } from '../redux';
import { GoodCard } from "./GoodCard";
import  styles  from "./goods.module.css"

const CategoryGoods = () =>{
    const data=store.getState().cat.currentGoods;
    
    return (
            <div className={styles.categoryGoods}>
                {   
                  data && data.map((item) => (
                    <GoodCard key={item._id} good={item} />
                  )) 

                }
            </div>
    )
}

const mapStateToPropsCategoryGoods = (state) => {
    const tempData = store.getState().cat.currentCat;
    return { id: tempData };
}

const CategoryGoodsOnScreen = connect(mapStateToPropsCategoryGoods)(CategoryGoods)

export default CategoryGoodsOnScreen;