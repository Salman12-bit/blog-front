import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
const ProtectedComp = () => {

  let auth = localStorage.getItem("key")

  return (
    <div>
      {auth ? <Outlet /> : <Navigate to="/login" />}
    </div>
  )
}

export default ProtectedComp;
