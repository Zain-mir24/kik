import React from 'react'
const headerStyle={
  
    borderRadius : "20px",
    height:"40px",
    marginBottom : "1px"
    
}
const WordStyle={
    padding:"1px",
    fontSize:"35px",
    backgroundColor:"#03a9f4",
    borderRadius:"20px",
    marginLeft:"30%",
    marginRight:"30%"

}
function Header() {
    return (
        <div>
            <header style={headerStyle}>
             <p style={WordStyle}> Kik </p>
             
            </header>
        </div>
    )
}

export default Header
