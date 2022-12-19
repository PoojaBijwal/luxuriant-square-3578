//Bhavik Dholu fw20_0582
import axios from "axios";
import { ADD_PRODUCT, GET_PRODUCT, REMOVE_PRODUCT ,GET_ORDER_PRODUCT,CHANGE_STATUS,ORDER_CHECKOUT, ADMIN_LOGIN} from "./admin.types";

export const AdminGetProduct = (category) => async (dispatch) => {
  let res = await axios.get(
    `https://verecel-database-api.vercel.app/${category}`
  );
  dispatch({ type: GET_PRODUCT, payload: res.data });
};

export const AdminAddProduct = (category, detail) => async (dispatch) => {
  let res = await fetch(
    `https://verecel-database-api.vercel.app/${category}`,
    {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body : JSON.stringify(detail)
    }
  );

  dispatch({ type: ADD_PRODUCT, payload: res.data });
};

export const AdminRemoveProduct = (category, id) => async (dispatch) => {
  try {
    let res = await fetch(
      `https://verecel-database-api.vercel.app/${category}/${id}`,
      {
        method: "DELETE", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: REMOVE_PRODUCT, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const GetOrder = () => async (dispatch) => {
  let res = await axios.get(
    `https://verecel-database-api.vercel.app/user`
  );
  dispatch({ type: GET_ORDER_PRODUCT, payload: res.data });
};

export const updateStatus = (id,change) => async(dispatch)=>{
  try {
      let res = await axios.patch(`https://verecel-database-api.vercel.app/user/${id}`,{
          ...change
      });
      dispatch({type:CHANGE_STATUS,payload:res.data});
  } catch (error) {
      console.log(error);
  }
};

export const checkoutOrder = (order) => async (dispatch) => {
  let res = await fetch(
    `https://verecel-database-api.vercel.app/user`,
    {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body : JSON.stringify(order)
    }
  );

  dispatch({ type: ORDER_CHECKOUT, payload: res.data });
};

export const adminLogin = ()=>({
  type:ADMIN_LOGIN,
  payload:true
})