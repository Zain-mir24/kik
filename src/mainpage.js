import React from 'react'
import Title from './Title'
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'

function mainpage() {
    return (
        <div>
            <Title />
            <MessageList />
            <SendMessageForm />
            
        </div>
    )
}

export default mainpage
