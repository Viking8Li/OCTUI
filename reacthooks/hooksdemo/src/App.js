import logo from './logo.svg';
import './App.css';
import HookCounter from './components/HookCounter';
import ClassCounter from './components/ClassCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <ClassCounter></ClassCounter> 
       <HookCounter></HookCounter> */}

       {/* <HookCounterTwo></HookCounterTwo> */}

       {/* <HookCounterThree></HookCounterThree> */}

       {/* <ClassCounterOne></ClassCounterOne> */}

       <HookCounterOne></HookCounterOne>

      </header>
    </div>
  );
}

export default App;
