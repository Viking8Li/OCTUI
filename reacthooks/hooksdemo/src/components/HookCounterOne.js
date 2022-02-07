import React, {useState, useEffect} from 'react';

function HookCounterOne() {

 const [count, setCount] = useState(0)

 //componentDidMount + componentDidUpdate
 useEffect(()=>{
     document.title =  `You clicked ${count} times`
 })

  return <>
      <button onClick={()=>setCount(count + 1)}>Click {count} times</button>
  </>;
}

export default HookCounterOne;
