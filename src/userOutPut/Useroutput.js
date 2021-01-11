import './UserOutPut.css'

const userOutPut = (props) => {
    return (
        <div className='userOutPut' onClick={props.click} id={props.id}>
            <p>{props.name}</p>
            <p>{props.age}</p>
        </div>
    )
}
export default userOutPut;