import *  as types from '../actions/types';

const initialState = {

    hookRefresh: 0,
    message:""
}

const hookReducer = (state=initialState,action)=>{
    switch (action.type){
        case types.REFRESH:
            return{
                ...state,
                hookRefresh: state.hookRefresh + 1 ,
                message:action.payload
            };
        default:
            return state;
    }
}


export default hookReducer;