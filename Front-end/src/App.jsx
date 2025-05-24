import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import User from './Componets/User'
import CreateUser from './Componets/CreateUser'
import UpdateUser from './Componets/UpdateUser'

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<User/>}></Route>
        <Route path="/create" element={<CreateUser/>}/>
        <Route path="/update/:id" element={<UpdateUser/>}/>
    
      </Routes>
      </Router>
    </div>
  )
}

export default App
