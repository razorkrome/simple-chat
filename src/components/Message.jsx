import React from 'react'

const Message = ({text, isMy}) => {

    const classes = isMy 
    ?
    'bg-cyan-600 self-end text-white border border-cyan-800 rounded-xl w-max max-w-80 p-2 break-words'
    :
    'bg-purple-600 self-start text-white border border-purple-800 rounded-xl w-max max-w-80 p-2 breakw-words'
    return (
        <div className={classes}>
            {text}
        </div>
    )
}

export default Message