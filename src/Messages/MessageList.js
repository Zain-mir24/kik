import React from "react";
import Message from './message/Message'


function MessageList({messages,name}) {
  return (
    
    <div>
     {messages.map((message,i) => <div key={i}>
       <Message message={message} name={name}/>
     </div>)}
    </div>
    
  );
}

export default MessageList;
