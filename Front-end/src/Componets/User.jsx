import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const User = () => {
  const [users, setUsers] = useState([])




  useEffect(() => {
    axios.get("http://localhost:3000")
    .then((result)=>{
       setUsers(result.data.users)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, []);



 const deleteUser = ( id)=>{
     axios.delete("http://localhost:3000/deleteUser/"+id)
     .then((result)=>{
      console.log(result.data)
      // window.location.reload()
       setUsers((prevUsers) => prevUsers.filter(user => user._id !== id));

    }).catch((err)=>{
      console.log(err)
    })

  }

  

  return (
    <div className="p-4 bg-gray-200 w-full h-screen">
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <Link to="/create" className="bg-green-500 text-white px-2 py-1 rounded text-sm cursor-pointer">Add+</Link>
      <table className="w-full table-auto border text-center mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.age}</td>
              <td className="border px-4 py-2 space-x-2">
              <Link to={`/update/${user._id}`} className="bg-green-500 text-white px-2 py-1 rounded text-sm cursor-pointer">Update</Link>
                <button type="button"  onClick={() => deleteUser(user._id)} className="bg-red-500 text-white px-2 py-1 rounded text-sm cursor-pointer">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default User
