function cartReducer(state={}, {type, count, good}){
    let newState={...state};
    if(type==='CART_ADD' && count>0){
        if(newState[good._id]){
            newState[good._id].count+=count;
        }else{
            newState={...newState, ...{[good._id]:{"count": count, good}}};
        }
        return newState;
    }
    if(type==='CART_SUB' && count>0){
        if(newState[good._id]){
            newState[good._id].count-=count;
            if(newState[good._id].count<1){
                delete newState[good._id];
            }
        }
        return newState;
    }
    if(type==='CART_DEL'){
        if(newState[good._id]){
            delete newState[good._id];
        }
        return newState;
    }
    if(type==='CART_SET'){
        if(newState[good._id] && count>0){
            newState[good._id].count=count;
        }else if(newState[good._id] && count<1){
            delete newState[good._id];
        }else if(count>0){
            newState={...newState, ...{[good._id]:{"count": count, good}}};
        }
        return newState;
    }
    if(type==='CART_CLEAR'){
        localStorage.removeItem('cart');
        return {};
    }
    return state;
}
export const actionCartAdd = (good, count=1) => ({type: 'CART_ADD', count, good});
export const actionCartSub = (good, count=1) => ({type: 'CART_SUB', count, good});
export const actionCartDel = (good) => ({type: 'CART_DEL', good});
export const actionCartSet = (good, count=1) => ({type: 'CART_SET', count, good});
export const actionCartClear = () => ({type: 'CART_CLEAR'});

export default cartReducer