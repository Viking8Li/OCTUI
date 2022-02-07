import './App.css';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import ErrorBoundary from './components/ErrorBoundary';
import EventBind from './components/EventBind';
import FocusInput from './components/FocusInput';
import Formhnadling from './components/Formhnadling';
import FRParetnInput from './components/FRParetnInput';
import Hero from './components/Hero';
import HoverCounter from './components/HoverCounter';
import Lifecycle from './components/Lifecycle';
import Listrendering from './components/Listrendering';
import Message from './components/Message';
import ParentComp from './components/ParentComp';
import ParentComponent from './components/ParentComponent';
import PortalDemo from './components/PortalDemo';
import PureComp from './components/PureComp';
import RefsDemo from './components/RefsDemo';
import User from './components/User';
import UserGreeting from './components/UserGreeting';
import Welcome from './components/Welcome';
import WelcomeClass from './components/WelcomeClass';
import HoverCounterTwo from './components/HoverCounterTwo';
import ClickCounterTwo from './components/ClickCounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';
import PostList from './components/PostList';


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

        {/* <Listrendering></Listrendering> */}

        {/* <Formhnadling></Formhnadling> */}

        {/* <Lifecycle></Lifecycle> */}

        {/* <ParentComp></ParentComp> */}

        {/* <RefsDemo></RefsDemo> */}

        {/* <FocusInput></FocusInput> */}

        {/* <FRParetnInput></FRParetnInput> */}

       
        {/* <ErrorBoundary>
          <Hero heroName="Batman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker"></Hero>
        </ErrorBoundary> */}

        {/* <PortalDemo></PortalDemo> */}

        {/* <ClickCounter></ClickCounter>
        <HoverCounter></HoverCounter> */}

        {/* <ClickCounterTwo></ClickCounterTwo>
        <HoverCounterTwo></HoverCounterTwo>

        <User render={(isLoggedIn) => isLoggedIn ? "John" : "Guest"} /> */}

        {/* <Counter render={(count, incrementCount)=>(
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
        />

        <Counter render={(count, incrementCount)=>(
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
        /> */}


        {/* <UserProvider value="John">
          <ComponentC />
        </UserProvider>
        */}

        <PostList></PostList>
      </header>
    </div>
  );
}

export default App;
