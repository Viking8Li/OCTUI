import './App.css';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import Listrendering from './components/Listrendering';
import Message from './components/Message';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import Welcome from './components/Welcome';
import WelcomeClass from './components/WelcomeClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        {/* <Welcome name="Bruce" heroName="Batman">
          <h2>This is 1st children props</h2>
          <h2>This is 2nd children props</h2>
        </Welcome>
        <Welcome name="Clark" heroName="Superman">
          <button>CLICK</button>
        </Welcome>
        <Welcome name="Diana" heroName="Wonder Women"></Welcome> */}
        {/* <WelcomeClass name="Clark" heroName="Superman"></WelcomeClass> */}

        {/* <Message></Message> */}

        {/* <Counter></Counter> */}

        {/* <EventBind></EventBind> */}

        {/* <ParentComponent></ParentComponent> */}

        {/* <UserGreeting></UserGreeting> */}
        
        <Listrendering></Listrendering>
      </header>
    </div>
  );
}

export default App;
