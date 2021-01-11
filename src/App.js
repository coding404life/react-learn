import React, { Component } from 'react';
import './App.css';
import UserInput from './userInput/Userinput';
import UserOutPut from './userOutPut/Useroutput';

class App extends Component {
  state = {
    person: [
      { name: 'yahya', age: 24 },
    ],
    username: 'yahya mohamed',
    job: 'Front End React Developer',
    showPerson: false,
    name: 'new name',
    age: 24
  }

  nameChangeHandler = (e) => {
    this.setState(
      {
        name: e.target.value
      }
    )
  }
  ageChangeHandler = (e) => {
    this.setState({
      age: e.target.value
    })
  }

  togglePersonHandler = () => {
    const doseShow = this.state.showPerson;
    this.setState({ showPerson: !doseShow })
  }

  deletePersonHandler = (personIndex) => {
    // const person = this.state.person.slice();
    const person = [ ...this.state.person ]
    person.splice(personIndex, 1);
    this.setState({ person: person })
    console.log(person);
  }

  addPersonHandler = () => {
    const persons = [ ...this.state.person ]
    const newName = { name: this.state.name, age: this.state.age }
    persons.push(newName)
    this.setState({
      person: persons
    })
  }

  render() {
    let person = null;

    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.person.map((cur, index) => {
            return <UserOutPut
              click={() => this.deletePersonHandler(index)}
              name={cur.name}
              age={cur.age}
              key={index}
              id={index} />
          })}
        </div>
      )
    }

    return (
      <div className='App' >
        <h1>hello</h1>
        <UserInput changed={this.nameChangeHandler} type={'text'} />
        <UserInput changed={this.ageChangeHandler} type={'number'} />
        <br />
        <button onClick={this.togglePersonHandler}>toggole Person</button>
        <button onClick={this.addPersonHandler}>add new person</button>
        {person}
      </div>
    )
  }
}


export default App;