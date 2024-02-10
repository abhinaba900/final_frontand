import React from 'react'
import { Link } from 'react-router-dom';
function AllLinks() {
  return (
    <div>
      <Link to="/Login">Login</Link>
      <br />
      <Link to="/Register">Register</Link>
      <br />
      <Link to="/CteatePosts">CteatePosts</Link>
      <br />
      <Link to="/Bloges">Bloges</Link>
    </div>
  )
}

export default AllLinks
