import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import BookContainer from './reduxContainer/BookContainer';
import store from './reduxContainer./Store';

function App() {
  
  return (
   <Provider store={store}>
    <div className="App">
    <h1>Hello</h1>
      <BookContainer/>
    </div>
     </Provider>
  );
}

export default App;
