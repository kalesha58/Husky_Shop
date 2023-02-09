import axios from "axios";

import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SCCESS,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SCCESS,
} from "../Constants/productContstants";
// {=====================================================GET-PRODUCT=========================}
export const getProduct = () => async (dispatch) => {
  try {
    dispatch({type:ALL_PRODUCT_REQUEST});
    const {data}=await axios.get("https://drab-cyan-squid-wrap.cyclic.app/api/v1/products")
    dispatch({
        type:ALL_PRODUCT_SCCESS,
        payload:data
    })
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};
// {=====================================================GET-PRODUCT-DETAILS===============================}
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({type:PRODUCT_DETAILS_REQUEST});
    const {data}=await axios.get(`https://drab-cyan-squid-wrap.cyclic.app/api/v1/product/${id}`)
    dispatch({
        type:PRODUCT_DETAILS_SCCESS,
        payload:data.product
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
//=================================== CLEAR ERRORS=================
export const clearErrors = () => async (dispatch) => {
dispatch({type:CLEAR_ERRORS});
}
