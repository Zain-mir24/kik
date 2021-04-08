import React from 'react'
const headstyling={
    borderRadius:"15px",
    backgroundColor:"#3d5afe"
}
function Title({room}) {
    return (
        <div>
            <div>
                <h3>{room}</h3>
            </div>
            <h1 style={headstyling}>Kik Instant Chat app</h1>
        </div>
    )
}

export default Title
