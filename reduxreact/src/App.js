import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <HooksCakeContainer></HooksCakeContainer>
          <CakeContainer/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
