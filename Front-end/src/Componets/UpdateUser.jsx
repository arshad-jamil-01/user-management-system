import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import axios from 'axios'

const UpdateUser = () => {

  const {id} = useParams();
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Age, setAge] = useState();
  const navigate = useNavigate();


  useEffect(() => {

    console.log("id", id)

    axios.get('http://localhost:3000/getUser/'+id)
    .then((result)=>{
      console.log(result.data);
      const user = result.data.users;
      setName(user.name);
      setEmail(user.email);
      setAge(user.age);
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [])
  

  const update =  (e)=>{
    e.preventDefault()
     axios.put("http://localhost:3000/UpdateUser/"+id, {
      name: Name,
      email: Email,
      age: Age

    }).then((result)=>{
      console.log(result.data)
      navigate("/")

    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div>
       <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={update} className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Update User</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
          <input
          onChange={(e)=>setName(e.target.value)}
          value={Name}
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
          <input
          onChange={(e)=>setEmail(e.target.value)}
          value={Email}
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="Age">Age</label>
          <input
          onChange={(e)=>setAge(e.target.value)}
          value={Age}
            type="number"
            id="Age"
            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your Age"
          />
        </div>

        <button
          className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition cursor-pointer"
        >
          Update
        </button>
      </form>
    </div>
    </div>
    </div>
  )
}

export default UpdateUser
