import logo from './logo.svg';
import './App.css';
import HookCounter from './components/HookCounter';
import ClassCounter from './components/ClassCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <ClassCounter></ClassCounter> 
       <HookCounter></HookCounter> */}

       {/* <HookCounterTwo></HookCounterTwo> */}

       <HookCounterThree></HookCounterThree>

      </header>
    </div>
  );
}

export default App;
