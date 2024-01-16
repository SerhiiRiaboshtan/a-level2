import { createSlice } from '@reduxjs/toolkit';

import { store } from "../index";
import { api } from '../../rtkQuery';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {},
    reducers: {
        cartAdd: (state,{payload: {count, good}}) =>{
            if(count>0){    
                if (!state[good._id]) {
                    state[good._id] = {count, good};
                }
                else {
                    state[good._id] = {...state[good._id], 'count': state[good._id].count+=count};
                }
            }
        },
        cartSub: (state,{payload: {count, good}}) =>{
            if(count>0){
                if(state[good._id].count>count){
                    state[good._id].count -=count;
                }
                else{
                    delete state[good._id];
                }
            }
            
        },
        cartDel: (state,{payload: {good}}) =>{
            if(state[good._id]){
                delete state[good._id];
            }
        },
        cartClear: (state) => {
            return {}
        },
        cartSet: (state,{payload: {count, good}}) =>{
            if(count>0){
                state[good._id] = {...state[good._id], 'count': count};
            }
            else state[good._id] = {...state[good._id], 'count': 1};
        }
    }
})

export const actionSetOrder = () =>
    async (dispatch, getState)  => {
        const cart = {...store.getState().cart};
        delete cart._persist;
        const arrGoods=[];
        for(const key in cart){
            arrGoods.push({'good':{'_id':cart[key].good._id}, 'count':cart[key].count})
        }
        const res = await dispatch(api.endpoints.setOrder.initiate({'goods': arrGoods}));
        if(Object.hasOwn(res.data.OrderUpsert, '_id')){
            alert("Заказ успешно создан!");
            dispatch(cartSlice.actions.cartClear());
        }
    }
