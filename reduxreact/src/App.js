import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <HooksCakeContainer/>
          <CakeContainer/>
          <IceCreamContainer/>
          <NewCakeContainer/>
          <ItemContainer cake/>
          <ItemContainer />
        </Provider>
      </header>
    </div>
  );
}

export default App;
