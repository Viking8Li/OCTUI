import React from 'react';
import Perosn from './Perosn';

function Listrendering() {
  const persons = [
      {
          id:1,
          name:'Bruce',
          heroName:'Batman'
      },
      {
        id:2,
        name:'Clark',
        heroName:'Super man'
    },
    {
        id:3,
        name:'Diana',
        heroName:'Wonder Women'
    }
  ]
  const personList = persons.map(person => <Perosn key={person.id} person={person} />)
  return <>{personList}</>;
}

export default Listrendering;
