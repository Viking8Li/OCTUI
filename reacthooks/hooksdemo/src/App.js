import logo from './logo.svg';
import './App.css';
import HookCounter from './components/HookCounter';
import ClassCounter from './components/ClassCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import React from 'react';
import CounterOne from './components/CounterOne';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <ClassCounter></ClassCounter> 
       <HookCounter></HookCounter> */}

       {/* <HookCounterTwo></HookCounterTwo> */}

       {/* <HookCounterThree></HookCounterThree> */}

       {/* <ClassCounterOne></ClassCounterOne> */}

       {/* <HookCounterOne></HookCounterOne> */}

       {/* <ClassMouse></ClassMouse> */}

       {/* <HookMouse></HookMouse> */}

       {/* <MouseContainer></MouseContainer> */}

       {/* <DataFetching></DataFetching> */}
{/* 
       <UserContext.Provider value={"John"} >
         <ChannelContext.Provider value={"Channel Context"}>
          <ComponentC />
         </ChannelContext.Provider>  
       </UserContext.Provider> */}
      

      <CounterOne></CounterOne>

      </header>
    </div>
  );
}

export default App;
