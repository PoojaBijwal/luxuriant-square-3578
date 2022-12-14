// Cart Actions here

import axios from "axios"
import { ADD_ITEM_TO_CART_ERROR, ADD_ITEM_TO_CART_LOADING, ADD_ITEM_TO_CART_SUCCESS,
     GET_CART_ITEMS_ERROR, GET_CART_ITEMS_LOADING, GET_CART_ITEMS_SUCCESS, REMOVE_CART_ITEMS_ERROR, REMOVE_CART_ITEMS_LOADING, REMOVE_CART_ITEMS_SUCCESS } from "./cart.types"

export const post=(payload) => async(dispatch) => {
    console.log(payload)
    dispatch({type:ADD_ITEM_TO_CART_LOADING})
    try {
        let response=await axios.post("http://localhost:8080/cartItems",payload)
        console.log(response)
        dispatch({type:ADD_ITEM_TO_CART_SUCCESS})
        return response
    } catch (error) {
        dispatch({type:ADD_ITEM_TO_CART_ERROR})
    }
}

export const getCart=()=>async(dispatch)=>{
    console.log("cart called")
    dispatch({type:GET_CART_ITEMS_LOADING})
    try {
        let response=await axios.get("http://localhost:8080/cartItems")
        console.log(response.data)
        dispatch({type:GET_CART_ITEMS_SUCCESS,payload:response.data})
        //  return response.data;
    } catch (e) {
        dispatch({type:GET_CART_ITEMS_ERROR})
    }

}

export const deleteFromCart = (id) => async (dispatch) => {
   console.log("delete from cart")
    dispatch({ type: REMOVE_CART_ITEMS_LOADING})
   try {
      let response = await axios.delete(`http://localhost:8080/cartItems/${id}`)
    //   dispatch({type:GET_CART_ITEMS_SUCCESS, payload:response.data})
      dispatch({ type: REMOVE_CART_ITEMS_SUCCESS})


   } catch (e) {
    console.log(e)
     dispatch({ type:REMOVE_CART_ITEMS_ERROR})
   }

}