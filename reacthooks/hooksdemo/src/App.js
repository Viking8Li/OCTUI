import logo from './logo.svg';
import './App.css';
import HookCounter from './components/HookCounter';
import ClassCounter from './components/ClassCounter';
import HookCounterTwo from './components/HookCounterTwo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <ClassCounter></ClassCounter> 
       <HookCounter></HookCounter> */}

       <HookCounterTwo></HookCounterTwo>

      </header>
    </div>
  );
}

export default App;
