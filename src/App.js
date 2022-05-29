import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './store';

function App() {

  const account = useSelector(state => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);
  
  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(100)}>Deposit</button>
      <button onClick={() => withdrawMoney(10)}>Withdraw</button>
    </div>
  );
}

export default App;
