import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Bloges from '../Element/Bloges'
import Login from '../Element/Login'
import Register from '../Element/Register'
import CteatePosts from '../Element/CteatePosts'
function AllRoutes() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Bloges/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/createposts' element={<CteatePosts/>}></Route>
          <Route path='/bloges' element={<Bloges/>}></Route>
        </Routes>
      
    </div>
  )
}
export default AllRoutes
