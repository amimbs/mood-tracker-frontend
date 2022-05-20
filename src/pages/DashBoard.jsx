
function DashBoard(props) {
    fetch(`http://localhost:3001/dashboard/${props.user_id}`).then(res=>res.json()).then(data => console.log(data));
    return (
        <h1>welcome user</h1>
    )
}

export default DashBoard;