import React from 'react'
import { useActions } from '../hooks/useActions'


const ChatInput = () => {
    const { addMessage } = useActions()

    const keyPressHandler = (event) => {
        if(event.key === 'Enter') {
            event.preventDefault()
            if (event.target.value) {
                addMessage(event.target.value)
                event.target.value = ''
            }
            
        }
    }

    return (
        <div className='p-4 border-2 mt-1'>
            <textarea 
                className='resize-none outline-none w-full' 
                placeholder='Введите сообщение'
                onKeyPress={keyPressHandler}
            />
        </div>
    )
}

export default ChatInput