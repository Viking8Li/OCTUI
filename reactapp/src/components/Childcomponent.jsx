import React from 'react';

function Childcomponent(props) {
  return <>
    <button onClick={props.greetHandler}>GreetParent</button>
  </>;
}

export default Childcomponent;
