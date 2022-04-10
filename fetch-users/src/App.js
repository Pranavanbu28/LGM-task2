import React, {useState} from "react";



function App(){

    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);
    async function fetchUsers(){
        const userData = await fetch("https://reqres.in/api/users?page=1");
        const userDataObj = await userData.json();
       setUsers(userDataObj.data);
       setCount(userDataObj.data.length)
    }
   
    return (
        <div className="wrapper">
            <div className="container">
                <h1>Users = {count}</h1>
                <ul>
                   {users.map(({id,email,first_name,last_name,avatar})=>
                        (<li id={id}>
                        <img src = {avatar} alt="profile pic"></img>
                        <p><span>Email: </span>{email}</p>
                        <p><span>First_name: </span>{first_name}</p>
                        <p><span>Last_name: </span>{last_name}</p>
                        
                       </li>)
                   )}
                    
                </ul>

                <button onClick={fetchUsers}>Fetch</button>
            </div>
        </div>
    );
}

export default App;