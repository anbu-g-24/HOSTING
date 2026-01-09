// import React, { useEffect } from 'react'

// function Followers() {

//     useEffect(()=>{
//         const fetchFollwers = async()=>{
//             try{
//                 const respone = await fetch('https://api.github.com/users/arun-cloud-dev/followers')
//                 const data = await respone.json()
            
//             }
//         }
//     })
//   return (
//     <div>
//         <h2>Follwers</h2>
//         <ul>
//             {Followers.map((Follower)=>{
//                 <li>

//                 </li>

//             })}
//         </ul>
//     </div>
//   )
// }

// export default Followers



import React, { useEffect, useState } from "react";

function Followers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>Follower List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Followers;
