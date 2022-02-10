import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const auth = useSelector(state => state.user.isAuth)
    return window.localStorage.getItem('auth') ? children : <Navigate to='/login'/> 
}

export default PrivateRoute