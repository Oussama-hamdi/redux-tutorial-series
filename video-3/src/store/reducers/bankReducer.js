import { WITHDRAW_MONEY, DEPOSIT_MONEY } from "../actions/bankActions";

const bankReducer = (state = 1000, action) => {
  switch (action.type) {
    case WITHDRAW_MONEY:
      return state - action.amount;
    case DEPOSIT_MONEY:
      return state + action.amount;
    default:
      return state;
  }
};

export default bankReducer;
