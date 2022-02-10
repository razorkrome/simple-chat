import React from 'react'
import { Link } from 'react-router-dom'

const ChatLayout = () => {
  return (
    <div className='w-screen bg-blue-800 p-4'>
        <nav className='ml-auto w-max'>
            <Link className='mr-4 text-white' to='/'>Home</Link>
            <Link className='mr-4 text-white' to='/dialog'>Messages</Link>
        </nav>
    </div>
  )
}

export default ChatLayout