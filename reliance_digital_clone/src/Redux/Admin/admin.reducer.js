// Bhavik Dholu fw20_0582
import {ADD_PRODUCT,GET_PRODUCT,REMOVE_PRODUCT,GET_ORDER_PRODUCT,CHANGE_STATUS,ORDER_CHECKOUT, ADMIN_LOGIN} from "./admin.types";

const AdminInit = {
    Adminlogin : false,
    cancel:0,
    pending:0,
    process:0,
    delivered:0,
    total:0,
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
        case GET_ORDER_PRODUCT : {
            let pending_val=0;
            let cancel_val=0;
            let process_val=0;
            let delivered_val=0;
            let val=0;
            payload.forEach((product)=>{
                if(product.status==="pending"){
                    pending_val=pending_val+1;
                }else if(product.status==="cancel"){
                    cancel_val=cancel_val+1;
                }else if(product.status==="process"){
                    process_val=process_val+1;
                }else{
                    delivered_val=delivered_val+1;
                }
                val=val+product.total
            })
            return {
                ...state,cancel:cancel_val,pending:pending_val,process:process_val,delivered:delivered_val,data:payload,total:val
            }
        }
        case CHANGE_STATUS : {
            let updatedOrder = state.data.map((item)=>{
                if(item.id===payload.id){
                  return {...payload}
                }
                return item;
              })

            return {
                ...state,data:updatedOrder
            }
        }
        case ORDER_CHECKOUT :{
            return {
                ...state,data:[...state.data,payload]
            }
        }
        case ADMIN_LOGIN : {
            return{
                ...state,Adminlogin:payload
            }
        }
        default:{
            return state;
        }
    }

}