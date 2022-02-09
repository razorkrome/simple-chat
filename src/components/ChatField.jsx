import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Message from './Message'

const ChatField = () => {
    const messages = useSelector((state) => state.message)

    console.log(messages)
    
    return (
        <div className="mt-auto">
            <div className='flex flex-col'>
                {messages && messages.map(({id, body}) => (
                    <Message text={body} key={id} isMy={true} />
                ))}
                {/* <Message text={'Hello world'} isMy={true} />
                <Message text={'Как твои дела'} isMy={false} />
                <Message text={'Скажи как твои дела. Слышь?'} isMy={false} /> */}
            </div>
        </div>
    )
}

export default ChatField