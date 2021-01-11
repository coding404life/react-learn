
const userInput = (props) => {
    const style = {
        border: '1px solid blue',
        margin: '1em auto',
        padding: '.4em 1em'
    }

    return <input style={style} onChange={props.changed} type={props.type} />
}
export default userInput;