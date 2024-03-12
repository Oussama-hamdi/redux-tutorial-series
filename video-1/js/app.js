const amount = document.getElementById("amount");
const balance = document.querySelector(".balance");
const withdraw = document.querySelector(".withdraw");
const deposit = document.querySelector(".deposit");

const WITHDRAW_MONEY = "WITHDRAW_MONEY";
const DEPOSIT_MONEY = "DEPOSIT_MONEY";
const ADD_PRODUCT = "ADD_PRODUCT";
const GET_PRODUCTS = "GET_PRODUCTS";

const withdrawMoney = (amount) => {
  return { type: WITHDRAW_MONEY, payload: amount };
};
const depositMoney = (amount) => {
  return { type: DEPOSIT_MONEY, payload: amount };
};

const addProduct = (product) => {
  return { type: ADD_PRODUCT, payload: product };
};
const getProducts = (products) => {
  return { type: GET_PRODUCTS, payload: products };
};

const fetchProducts = () => {
  return async (dispatch) => {
    const API_URL = "https://fakestoreapi.com/products";
    const response = await fetch(API_URL);
    const data = await response.json();
    dispatch(getProducts(data));
  };
};

// Reducer function to update the state
const bankReducer = (state = 1000, { type, payload } = action) => {
  switch (type) {
    case WITHDRAW_MONEY:
      return state - payload;
    case DEPOSIT_MONEY:
      return state + payload;
    default:
      return state;
  }
};

const productReducer = (state = [], { type, payload } = action) => {
  switch (type) {
    case ADD_PRODUCT:
      return [...state, payload];
    case GET_PRODUCTS:
      return [...state, ...payload];
    default:
      return state;
  }
};

const appReducers = Redux.combineReducers({
  bank: bankReducer,
  product: productReducer,
});

const store = Redux.createStore(appReducers, Redux.applyMiddleware(ReduxThunk));

withdraw.addEventListener("click", () => {
  store.dispatch(withdrawMoney(+amount.value));
  balance.textContent = store.getState().bank;
});

deposit.addEventListener("click", () => {
  store.dispatch(depositMoney(+amount.value));
  balance.textContent = store.getState().bank;
});

// Log the current state after every dispatch
store.subscribe(() => {
  balance.textContent = store.getState().bank;
  console.log("Current State:", store.getState());
});

store.dispatch(withdrawMoney(200));
store.dispatch(depositMoney(500));

store.dispatch(addProduct({ id: 33, title: "Laptop", price: 1000 }));
store.dispatch(fetchProducts());
