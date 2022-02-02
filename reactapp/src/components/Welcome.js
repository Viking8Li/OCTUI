import React from 'react';

function Welcome(props) {
    return(
        <div>
            <h1>Hello {props.name} aka {props.heroName}</h1>
            {props.children}
        </div>
    )
//  return React.createElement('div', null, React.createElement('h1',null,'Hello World'))
}

export default Welcome;


