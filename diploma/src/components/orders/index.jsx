import { connect } from "react-redux";

import { store } from "../redux/index";
import { recallDate } from "../../utils";
import styles from "./orders.module.css"

export const OrdersView = (props) => {
    const {orders} = props;
    console.log("Orders in OrdersView->", orders);
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
                            <div key={Math.random()}>   
                                {item.orderGoods && item.orderGoods.map((item1) =>
                                    <div key={Math.random()}> 
                                        Наименование:{ item1.good?item1.good.name: "-"},
                                        количество: { item1.count },
                                        цена: { item1.price },
                                        итого: { item1.total }
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