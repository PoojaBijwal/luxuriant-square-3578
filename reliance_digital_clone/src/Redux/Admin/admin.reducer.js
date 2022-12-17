// Bhavik Dholu fw20_0582
import {ADD_PRODUCT,GET_PRODUCT,REMOVE_PRODUCT} from "./admin.types";

const AdminInit = {
   data : []
};

export const AdminReducer = (state=AdminInit,{type,payload})=>{
   
    switch(type){
        case GET_PRODUCT : {
            return {
                ...state,data:payload
            }
        }
        case ADD_PRODUCT : {
            return {
                ...state,data:[...state.data,payload]
            }
        }
        case REMOVE_PRODUCT : {
            let new_data = state.data.filter((product)=>product.id!==payload);
            return {
                ...state,data:new_data
            }
        }
        default:{
            return state;
        }
    }

}