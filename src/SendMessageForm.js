
import React from 'react'

import {Link } from 'react-router-dom'
const styleinput={
    width:"200px",
    borderRadius:"20px"
}
const buttonstyle={
    color:"white",
    backgroundColor:"#42a5f5",
    height:"50px",
    width:"100px",
    marginTop:"10px"
}
function SendMessageForm() {
    return (
        <div>
            <input type="text" style={styleinput}/>
            <button>Send message</button>
            <div>
            <Link to="/">   <button style={buttonstyle}>Exit the app</button> </Link> 
            </div>
        </div>
    )
}

export default SendMessageForm
