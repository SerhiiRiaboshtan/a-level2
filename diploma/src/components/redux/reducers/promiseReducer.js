const promiseReducer = (state={}, {type, status, payload, error, name})=>{
    if (type === 'PROMISE'){
        return {...state, [name]:{status, payload, error}}
    }
    return {...state}
}

const actionPending   = (name)      => ({type: 'PROMISE', status: 'PENDING', name})
const actionFulfilled = (name, payload)=> ({type: 'PROMISE', status: 'FULFILLED', payload, name})
const actionRejected  = (name, error)   => ({type: 'PROMISE', status: 'REJECTED',  error, name})

export const actionPromise = (name, promise) =>
    async dispatch => { 
        dispatch(actionPending(name))
        try{
            const payload = await promise
            dispatch(actionFulfilled(name, payload))
            return payload
        }
        catch (error){
            dispatch(actionRejected(name, error))
        }
    }
export default promiseReducer;
