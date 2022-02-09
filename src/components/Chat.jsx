import React from 'react'
import ChatField from './ChatField'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'

const Chat = () => {
  return (
      <div className='flex flex-col h-full'>
          <ChatHeader userName={'Oleg Gaev'} lastSeen={'15 minut nazad'}></ChatHeader>
          <ChatField></ChatField>
          <ChatInput></ChatInput>
      </div>
  )
}

export default Chat