import {
  INSERT_PRODUCT_FAILED,
  INSERT_PRODUCT_REQUEST,
  INSERT_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILED,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  PRODUCT_LIST_FAILED,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILED,
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
  UPDATE_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_FAILED,
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

export const insertProductReducer = (state = {}, action) => {
  switch (action.type) {
    case INSERT_PRODUCT_REQUEST:
      return { loading: true };
    case INSERT_PRODUCT_SUCCESS:
      return { loading: false, insertProduct: action.payload };
    case INSERT_PRODUCT_FAILED:
      return { loading: false, errror: action.payload };
    case UPDATE_PRODUCT_REQUEST:
      return { loading: true };
    case UPDATE_PRODUCT_SUCCESS:
      return { loading: false, insertProduct: action.payload };
    case UPDATE_PRODUCT_FAILED:
      return { loading: false, errror: action.payload };

    default:
      return state;
  }
};
export const productListReducer = (state = { list: {} }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, success: true, list: action.payload };

    case PRODUCT_LIST_FAILED:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const deleteProductReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ITEM_REQUEST:
      return { deletLoading: true };
    case DELETE_ITEM_SUCCESS:
      return { deletLoading: false, deletedItem: action.payload };
    case DELETE_ITEM_FAILED:
      return { deletLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const insertCustomerReducer = (state = {}, action) => {
  switch (action.type) {
    case INSERT_CUSTOMER_REQUEST:
      return { Loading: true };
    case INSERT_CUSTOMER_SUCCESS:
      return { Loading: false, success: true, customerToken: action.payload };
    case INSERT_CUSTOMER_FAILED:
      return { Loading: false, error: action.payload };
    case UPDATE_CUSTOMER_REQUEST:
      return { Loading: true };
    case UPDATE_CUSTOMER_SUCCESS:
      return { Loading: false, customerToken: action.payload };
    case UPDATE_CUSTOMER_FAILED:
      return { Loading: false, error: action.payload };
    default:
      return state;
  }
};
export const getCustomersList = (state = {}, action) => {
  switch (action.type) {
    case GET_CUSTOMERS_LIST_REQEST:
      return { Loading: true };
    case GET_CUSTOMERS_LIST_SUCCESS:
      return { Loading: false, customers: action.payload };
    case GET_CUSTOMERS_LIST_FAILED:
      return { Loading: false, error: action.payload };

    default:
      return state;
  }
};
export const getCustomersDetails = (state = {}, action) => {
  switch (action.type) {
    case GET_CUSTOMER_DETAILS_REQUEST:
      return { Loading: true };
    case GET_CUSTOMER_DETAILS_SUCCESS:
      return { Loading: false, customerDetails: action.payload };
    case GET_CUSTOMER_DETAILS_FAILED:
      return { Loading: false, error: action.payload };

    default:
      return state;
  }
};
export const productDetail = (state = {}, action) => {
  switch (action.type) {
    case SINGLE_PRODUCT_REQUEST:
      return { Loading: true };
    case SINGLE_PRODUCT_SUCCESS:
      return { Loading: false, success: true, product: action.payload };
    case SINGLE_PRODUCT_FAILED:
      return { Loading: false, error: action.payload };

    default:
      return state;
  }
};
export const shopList = (state = {}, action) => {
  switch (action.type) {
    case SHOP_LIST_REQUEST:
      return { Loading: true };
    case SHOP_LIST_SUCCESS:
      return { Loading: false, shopList: action.payload };
    case SHOP_LIST_FAILED:
      return { Loading: false, error: action.payload };

    default:
      return state;
  }
};
export const insertShop = (state = {}, action) => {
  switch (action.type) {
    case INSERT_SHOP_REQUEST:
      return { Loading: true };
    case INSERT_SHOP_SUCCESS:
      return { Loading: false, shop: action.payload };
    case INSERT_SHOP_FAILED:
      return { Loading: false, error: action.payload };

    default:
      return state;
  }
};
export const insertOwner = (state = {}, action) => {
  switch (action.type) {
    case INSERT_OWNER_REQUEST:
      return { Loading: true };
    case INSERT_OWNER_SUCCESS:
      return { Loading: false, success: true, owner: action.payload };
    case INSERT_OWNER_FAILED:
      return { Loading: false, error: action.payload };

    default:
      return state;
  }
};
