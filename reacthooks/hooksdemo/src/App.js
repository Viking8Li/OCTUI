import logo from './logo.svg';
import './App.css';
import HookCounter from '../components/HookCounter';
import ClassCounter from '../components/ClassCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ClassCounter></ClassCounter> 
       <HookCounter></HookCounter>
      </header>
    </div>
  );
}

export default App;
