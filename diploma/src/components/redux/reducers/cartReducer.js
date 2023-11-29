import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {},
    reducers: {
        cartAdd: (state,{payload: {count, goodID, goodName}}) =>{
            if(count>0){    
                if (!state[goodID]) {
                    return {...state, ...{[goodID]:{'count':count, name:goodName}}};// 
                }
                else {
                    state[goodID] = {...state[goodID], 'count': state[goodID].count+=count};
                }
            }
        },
        cartSub: (state,{payload: {count, goodID}}) =>{
            if(count>0 && (state[goodID].count-count)){
                state[goodID] = {...state[goodID], 'count': state[goodID].count-=count};
            }
            else {
                delete state[goodID];
            }
        },
        cartDel: (state,{payload: {goodID}}) =>{
            if(state[goodID]){
                delete state[goodID];
            }
        },
        cartClear: (state) => {
            state={};
        }
    }
})