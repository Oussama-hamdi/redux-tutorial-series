import "./App.css";
import { useSelector, useDispatch } from "react-redux";
// import { withdrawMoney, depositMoney } from "./store/actions/bankActions";
import { withdraw, deposit } from "./reduxToolkit/slices/bankSlice";
import Products from "./components/Products";

function App() {
  const state = useSelector((state) => state.bank.balance);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello there!</h1>
      <h2>You have ${state} in your account.</h2>
      <button onClick={() => dispatch(withdraw(100))}>
        Withdraw Money (100)
      </button>
      <button onClick={() => dispatch(deposit(100))}>
        Deposit Money (100)
      </button>
      <Products />
    </div>
  );
}

export default App;
