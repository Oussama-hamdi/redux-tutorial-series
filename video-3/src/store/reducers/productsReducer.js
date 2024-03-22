import {
  ADD_PRODUCT,
  GET_PRODUCTS,
  REMOVE_PRODUCT,
} from "../actions/productsActions";

const productsReducer = (
  state = [{ id: 1, name: "Macbook", price: 999 }],
  action
) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products;
    case ADD_PRODUCT:
      return [...state, action.product];
    case REMOVE_PRODUCT:
      return state.filter((product) => product.id !== action.id);
    default:
      return state;
  }
};

export default productsReducer;
