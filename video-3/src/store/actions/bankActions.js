const WITHDRAW_MONEY = "WITHDRAW_MONEY";
const DEPOSIT_MONEY = "DEPOSIT_MONEY";

const withdrawMoney = (payload) => {
  return {
    type: WITHDRAW_MONEY,
    amount: payload,
  };
};

const depositMoney = (payload) => {
  return {
    type: DEPOSIT_MONEY,
    amount: payload,
  };
};

export { WITHDRAW_MONEY, DEPOSIT_MONEY, withdrawMoney, depositMoney };
