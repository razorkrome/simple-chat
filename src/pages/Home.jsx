import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import ChatLayout from '../components/ChatLayout'
import Login from './Login'

const Home = () => {
    return (
        <div className='h-full flex flex-col'>
            <ChatLayout />
            <Outlet/>
        </div>
    )
}

export default Home