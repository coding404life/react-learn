import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personState, setPersonState ] = useState({
    person: [
      { name: 'yahya', age: 24 },
      { name: 'mohamed', age: 21 },
      { name: 'ahmed', age: 22 }
    ],
    otherstate: 'un tuched'
  })

  const switchNameHandler = () => {
    setPersonState({
      person: [
        { name: 'yahya mohamed', age: 24 },
        { name: 'mohamed', age: 21 },
        { name: 'ahmed shaban', age: 24 }
      ]
    });
  }

  return (
    <div className="App">
      <h1>nice head</h1>
      <button onClick={switchNameHandler}>switch ass</button>
      <Person name={personState.person[ 0 ].name} age={personState.person[ 0 ].age} />
      <Person name={personState.person[ 1 ].name} age={personState.person[ 1 ].age} >Nani</Person>
      <Person name={personState.person[ 2 ].name} age={personState.person[ 2 ].age} />
    </div>
  );

  //  return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'hello nissos'));
}

export default App;

