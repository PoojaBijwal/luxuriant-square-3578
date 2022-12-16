import { ADD_ITEM_TO_CART_ERROR, ADD_ITEM_TO_CART_LOADING, ADD_ITEM_TO_CART_SUCCESS,
   GET_CART_ITEMS_ERROR, GET_CART_ITEMS_LOADING, GET_CART_ITEMS_SUCCESS,
   REMOVE_CART_ITEMS_SUCCESS } from "./cart.types";


// Note: Do not update/change the initial state
const cartInitalState = {
  getCartItems: {
    loading: false,
    error: false,
  },
  addCartItem: {
    loading: false,
    error: false,
  },
  updateCartItem: {
    loading: false,
    error: false,
  },
  removeCartItem: {
    loading: false,
    error: false,
  },
  data: [],
};
export const cartReducer = (state = cartInitalState,{type,payload}) => {

    switch(type){
      case ADD_ITEM_TO_CART_LOADING:{
        return {
          ...state,
          loading:true
        }
      }
      case ADD_ITEM_TO_CART_ERROR:{
        return{
          ...state,
          loading:false,
          error:true
        }
      }
      case ADD_ITEM_TO_CART_SUCCESS:{
        return{
          ...state,
          loading:false,
          error:false,
         
        }
      }
      case GET_CART_ITEMS_LOADING:{
        return {
          ...state,
          loading:true
        }
      }
      case GET_CART_ITEMS_ERROR:{
        return{
          ...state,
          loading:false,
          error:true
        }
      }
      case GET_CART_ITEMS_SUCCESS:{
        return{
          ...state,
          loading:false,
          error:false,
          data:payload
        }
      }
      case REMOVE_CART_ITEMS_SUCCESS:{
        return  {

        }
      }
      
      default:{
        return state;
    }
    }
};
