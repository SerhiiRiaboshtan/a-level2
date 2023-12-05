import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {},
    reducers: {
        cartAdd: (state,{payload: {count, good}}) =>{
            if(count>0){    
                if (!state[good._id]) {
                    // return {...state, ...{[good._id]:{'count':count, "good":good}}};// 
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
            console.log('cartSet->', count, good);
            if(count>0){
                state[good._id] = {...state[good._id], 'count': count};
            }
            else state[good._id] = {...state[good._id], 'count': 1};
        }
    }
})