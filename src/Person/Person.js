const person = (props) => {
    return (
        <div>
            <h3>hello {props.name} your age is {props.age} years old {props.text}</h3>
            <p>{props.children}</p>
        </div>
    )
};

export default person;