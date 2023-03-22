import React, { useState, useEffect} from "react";

export default function User(){
  const [users, setUsers] = useState([])
useEffect(() => {
        const periodicallyFetch = setInterval(
           () => fetch("http://localhost:8080/api/users")
                      .then(res => res.json())
                      .then(response => setUsers(response)),
           100);
        return () => clearInterval(periodicallyFetch)
    }, [])

    return(
    <div>
        {users.map(user => (<h1 key={user.user_id}> Welcome {user.userName} to Jac Adventures</h1>))}
    </div>
);
}