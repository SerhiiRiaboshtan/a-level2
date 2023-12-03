import { createSlice } from '@reduxjs/toolkit';

import { api } from '../../rtkQuery';

export const catSlice = createSlice({
    name: 'cat',
    initialState: {currentCat: null, currentGoods: null, currentGood: null, userOrders:[]},
    reducers: {
        set(state,{payload: id} ){
            if(id){
                state.currentCat = id;
            }
        },
        save(state, {payload: goods}){
            if(goods){
                state.currentGoods = goods;
            }
        },
        saveOneGood (state, {payload: good}){
            if(good){
                state.currentGood = good;
            }
        },
        saveUserOrders (state, {payload: orders}){
            console.log('data in saveUserOrders', orders );
            state.userOrders = orders;
        },
        clear (state) {
            return {currentCat: null, currentGoods: null, currentGood: null, userOrders:[]}
        }
        

    }
})

export const actionSetCurrent = (id) =>
    async dispatch => {
        const res = await dispatch(api.endpoints.getGoodsInOneCategory.initiate({"_id":id}))
        dispatch(catSlice.actions.set(id));
        dispatch(actionSaveCategoriesGoods(res.data.CategoryFindOne.goods));
    }

export const actionSetGoodsFromCat = (id) =>
    async dispatch => {
        const res = await dispatch(api.endpoints.getGoodsInOneCategory.initiate({"_id":id}))
        dispatch(actionSaveCategoriesGoods(res.data.CategoryFindOne.goods));
    }

const actionSaveCategoriesGoods = (goods) => 
    dispatch => {
        dispatch(catSlice.actions.save(goods));
    }

export const actionGetUserOrders = () => 
    async (dispatch, getState) => {
        const {auth} = getState();
        if (auth.payload){
            const {id} = auth.payload.sub;
            const data = await dispatch(api.endpoints.getUserOrder.initiate({_id:id}));
            // console.log('data in actionGetUserOrders', data.data.OrderFind );
            dispatch(catSlice.actions.saveUserOrders(data.data.OrderFind));
        }
    }
