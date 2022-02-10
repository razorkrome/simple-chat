import React from 'react'
import { useNavigate } from 'react-router-dom'

const classes = 'flex flex-row text-white bg-blue-600 w-full py-4 px-2 mb-px grow-0'

const ChatHeader = ({userName, lastSeen}) => {
    const navigate = useNavigate()
  return (
    <div className={classes}>
        <button className='text-5xl ml-2' onClick={() => navigate('/')}><img src={process.env.PUBLIC_URL + '/assets/back-arrow.png'}/></button>
        <div className='ml-4'>
            <p>{userName}</p>
            <p>Last seen: {lastSeen}</p>
        </div>
    </div>
  )
}

export default ChatHeader