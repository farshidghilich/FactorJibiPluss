import axios from "axios";
import {
  INSERT_PRODUCT_FAILED,
  INSERT_PRODUCT_REQUEST,
  INSERT_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILED,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILED,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILED,
  INSERT_CUSTOMER_REQUEST,
  INSERT_CUSTOMER_SUCCESS,
  INSERT_CUSTOMER_FAILED,
  GET_CUSTOMERS_LIST_REQEST,
  GET_CUSTOMERS_LIST_SUCCESS,
  GET_CUSTOMERS_LIST_FAILED,
  GET_CUSTOMER_DETAILS_REQUEST,
  GET_CUSTOMER_DETAILS_SUCCESS,
  GET_CUSTOMER_DETAILS_FAILED,
  UPDATE_CUSTOMER_REQUEST,
  UPDATE_CUSTOMER_FAILED,
  UPDATE_CUSTOMER_SUCCESS,
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_SUCCESS,
  SINGLE_PRODUCT_FAILED,
  SHOP_LIST_REQUEST,
  SHOP_LIST_SUCCESS,
  SHOP_LIST_FAILED,
  INSERT_SHOP_REQUEST,
  INSERT_SHOP_SUCCESS,
  INSERT_SHOP_FAILED,
  INSERT_OWNER_REQUEST,
  INSERT_OWNER_SUCCESS,
  INSERT_OWNER_FAILED,
} from "../constance/AllConstance";
export const insertProductAction =
  (title, price, typeId) => async (dispatch) => {
    try {
      console.log("redux is working");
      dispatch({ type: INSERT_PRODUCT_REQUEST });
      const { data } = await axios.post(
        "http://192.168.0.109:55412/product/insert",
        { title, price, typeId }
      );
      dispatch({ type: INSERT_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: INSERT_PRODUCT_FAILED, payload: error });
    }
  };
export const productListAction = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("http://192.168.0.109:55412/product/list");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAILED, payload: error });
  }
};

export const updateProductAction = (edit) => async (dispatch) => {
  try {
    console.log("redux is working");
    dispatch({ type: UPDATE_PRODUCT_REQUEST });
    const { data } = await axios.put(
      `http://192.168.0.109:55412/product/update`,
      edit
    );
    dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_PRODUCT_FAILED, payload: error });
  }
};
export const deleteProductAction = (del) => async (dispatch) => {
  try {
    console.log("redux is working");
    dispatch({ type: DELETE_PRODUCT_REQUEST });
    const { data } = await axios.put(
      `http://192.168.0.109:55412/product/update`,
      del
    );
    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELETE_PRODUCT_FAILED, payload: error });
  }
};
export const insertCustomerAction = (fields) => async (dispatch) => {
  try {
    dispatch({ type: INSERT_CUSTOMER_REQUEST });
    const { data } = await axios.post(
      "http://192.168.0.109:55412/Customer/Insert",
      fields
    );
    dispatch({ type: INSERT_CUSTOMER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: INSERT_CUSTOMER_FAILED, payload: error });
  }
};
export const getCustomerListAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CUSTOMERS_LIST_REQEST });
    const { data } = await axios.get(
      "http://192.168.0.109:55412/Customer/List"
    );
    console.log(data);
    dispatch({ type: GET_CUSTOMERS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_CUSTOMERS_LIST_FAILED, payload: error });
  }
};
export const getCustomerDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_CUSTOMER_DETAILS_REQUEST });
    const { data } = await axios.get(
      `http://192.168.0.109:55412/customer/Detail/${id}`
    );
    console.log(data);
    dispatch({ type: GET_CUSTOMER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_CUSTOMER_DETAILS_FAILED, payload: error });
  }
};
export const updateCustomerAction = (fields) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CUSTOMER_REQUEST });
    const { data } = await axios.put(
      `http://192.168.0.109:55412/Customer/Update`,
      fields
    );
    console.log(data);
    dispatch({ type: UPDATE_CUSTOMER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_CUSTOMER_FAILED, payload: error });
  }
};
export const singleProductAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_PRODUCT_REQUEST });
    const { data } = await axios.get(
      `http://192.168.0.109:55412/Product/Detail/${id}`
    );
    console.log(data);
    dispatch({ type: SINGLE_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SINGLE_PRODUCT_FAILED, payload: error });
  }
};
export const shopListAction = () => async (dispatch) => {
  try {
    dispatch({ type: SHOP_LIST_REQUEST });
    const { data } = await axios.get(`http://192.168.0.109:55412/Shop/list`);
    console.log(data);
    dispatch({ type: SHOP_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SHOP_LIST_FAILED, payload: error });
  }
};
export const insertShopAction = (fields) => async (dispatch) => {
  try {
    dispatch({ type: INSERT_SHOP_REQUEST });
    const { data } = await axios.post(
      "http://192.168.0.109:55412/Shop/Insert",
      fields
    );
    console.log(data);
    dispatch({ type: INSERT_SHOP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: INSERT_SHOP_FAILED, payload: error });
  }
};
export const insertOwnerAction = (fields) => async (dispatch) => {
  try {
    dispatch({ type: INSERT_OWNER_REQUEST });
    const { data } = await axios.post(
      "http://192.168.0.109:55412/Owner/Insert",
      fields
    );
    console.log(data);
    dispatch({ type: INSERT_OWNER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: INSERT_OWNER_FAILED, payload: error });
  }
};
