import React from 'react'

const classes = 'bg-blue-600 w-full py-4 px-2 mb-px grow-0'

const ChatHeader = ({userName, lastSeen}) => {
  return (
    <div className={classes}>
        <p>{userName}</p>
        <p>Last seen: {lastSeen}</p>
    </div>
  )
}

export default ChatHeader