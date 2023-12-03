import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {},
    reducers: {
        cartAdd: (state,{payload: {count, good}}) =>{
            if(count>0){    
                if (!state[good._id]) {
                    return {...state, ...{[good._id]:{'count':count, "good":good}}};// 
                }
                else {
                    state[good._id] = {...state[good._id], 'count': state[good._id].count+=count};
                }
            }
        },
        cartSub: (state,{payload: {count, good}}) =>{
            if(count>0 && (state[good].count-count)){
                state[good] = {...state[good], 'count': state[good].count-=count};
            }
            else {
                delete state[good];
            }
        },
        cartDel: (state,{payload: {good}}) =>{
            if(state[good]){
                delete state[good];
            }
        },
        cartClear: (state) => {
            return {}
        }
    }
})