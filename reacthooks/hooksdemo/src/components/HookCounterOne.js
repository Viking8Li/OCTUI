import React, {useState, useEffect} from 'react';

function HookCounterOne() {

 const [count, setCount] = useState(0)
 const [name, setName] = useState('')

 //componentDidMount + componentDidUpdate
 useEffect(()=>{
     console.log('useEffect-Updating the document title');
     document.title =  `You clicked ${count} times`
 }, [count])

  return <>
      <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
      <button onClick={()=>setCount(count + 1)}>Click {count} times</button>
  </>;
}

export default HookCounterOne;
