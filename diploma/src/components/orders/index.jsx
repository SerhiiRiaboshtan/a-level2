import { connect } from "react-redux";

import { store } from "../redux/index";
import { recallDate } from "../../utils";
import styles from "./orders.module.css"
import noPhoto from '../../img/noPhoto.jpg';

export const OrdersView = (props) => {
    const {orders} = props;
    // console.log("Orders in OrdersView->", orders);
    return (
        <div className={styles.ordersContainer}>
            <h1 className={styles.ordersHeader}>
                Заказы пользователя
            </h1>
            {!orders.length && <div>заказов</div>}
            {orders.length && 
                <div className={styles.ordersView}>
                    {orders.map((item)=> 
                        <div key={item._id}>
                            <h5 className={ styles.oneOrderHeader } key={item.createdAt}>
                                Заказ от {recallDate(Number(item.createdAt))}
                            </h5> 
                            <div className={styles.containerHeader}>            
                                <div className={styles.picture}> </div>
                                <div className={styles.name}>Наименование</div>
                                <div className={styles.count}>Количество</div>
                                <div className={styles.price}>Цена</div>
                                <div className={styles.itog}>Итого</div>
                            </div>
                            <div key={Math.random()}>   
                                {item.orderGoods && item.orderGoods.map((item1) =>
                                    <div key={Math.random()} className={styles.container}> 
                                        <img className={styles.picture} alt="" src={item1.good.images.length?`http://shop-roles.node.ed.asmer.org.ua/${item1.good.images[0].url}`:{noPhoto}}/>
                                        <div className={styles.name}>{ item1.good?item1.good.name: "-"}</div>
                                        <div className={styles.count}>{ item1.count }</div>
                                        <div className={styles.price}>{ item1.price }</div>
                                        <div className={styles.itog}>{ item1.total }</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>}
        </div>
    )
}

const mapStateToPropsOrdersView = () => {
    const orders = store.getState().cat.userOrders;
    
    return {'orders':orders};
}

export const OrdersViewOnScreen = connect(mapStateToPropsOrdersView)(OrdersView);