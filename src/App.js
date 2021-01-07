import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personState, setPersonState ] = useState({
    person: [
      { name: 'yahya mohamed', age: 24 },
      { name: 'mohamed', age: 21 },
      { name: 'ahmed', age: 22 }
    ],
    otherstate: 'un tuched'
  })

  const switchNameHandler = (yahya) => {
    setPersonState({
      person: [
        { name: yahya, age: 24 },
        { name: 'mohamed mosheneb', age: 21 },
        { name: 'ahmed shaban', age: 24 }
      ]
    });
  }
  const changeNameHandler = (event) => {
    setPersonState({
      person: [
        { name: event.target.value, age: 24 },
        { name: 'mohamed mosheneb', age: 21 },
        { name: 'ahmed shaban', age: 24 }
      ]
    });
  }
  const style = {
    backgroundColor: 'white',
    border: '1px solid blue',
    padding: '.5rem 1rem',
    fontWeight: 'bold'
  }
  return (
    <div className="App">
      <h1>nice head</h1>
      <button style={style} onClick={() => switchNameHandler('yahya')}>switch ass</button>
      <Person
        name={personState.person[ 0 ].name}
        age={personState.person[ 0 ].age}
        change={changeNameHandler}
      />
      <Person
        name={personState.person[ 1 ].name}
        age={personState.person[ 1 ].age}
        click={switchNameHandler}
      >Nani
        </Person>
      <Person
        name={personState.person[ 2 ].name}
        age={personState.person[ 2 ].age}
      />
    </div>
  );

  //  return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'hello nissos'));
}

export default App;

