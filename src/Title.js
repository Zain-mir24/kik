import React from 'react'
const headstyling={
    borderRadius:"15px",
    backgroundColor:"#3d5afe"
}
function Title({room}) {
    return (
        <div>
         
            <h1 style={headstyling}>Kik Instant Chat app and the room is {room}</h1>
        </div>
    )
}

export default Title
