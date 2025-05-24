import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const CreateUser = () => {

  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Age, setAge] = useState();
  const navigate = useNavigate();


  const submit = (e) =>{
    e.preventDefault();
    
    axios.post("http://localhost:3000/CreateUser", {
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
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={submit} className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Add User</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
          <input
          onChange={(e)=>setName(e.target.value)}
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
            type="number"
            id="Age"
            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your Age"
          />
        </div>

        <button
          className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  )
}

export default CreateUser
