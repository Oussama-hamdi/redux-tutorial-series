const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const getProducts = (products) => {
  return {
    type: GET_PRODUCTS,
    products,
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};

const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    id,
  };
};

const fetchProducts = () => {
  return async (dispatch) => {
    const API_URL = "https://fakestoreapi.com/products";
    const response = await fetch(API_URL);
    const data = await response.json();
    dispatch(getProducts(data));
  };
};

export {
  GET_PRODUCTS,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  getProducts,
  addProduct,
  removeProduct,
  fetchProducts,
};
