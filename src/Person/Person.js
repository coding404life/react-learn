import './Person.css'

const person = (props) => {
    return (
        <div className='person'>
            <h3 onClick={props.click}>hello {props.name} your age is {props.age} years old {props.text}</h3>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    )
};

export default person;