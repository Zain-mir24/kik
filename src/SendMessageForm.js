import React, { useState } from "react";

import { Link } from "react-router-dom";
const styleinput = {
  width: "200px",
  borderRadius: "20px",
};
const buttonstyle = {
  color: "white",
  backgroundColor: "#42a5f5",
  height: "50px",
  width: "100px",
  marginTop: "10px",
};
function SendMessageForm({message, setMessage,sendMessage}) {
 
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key=='Enter'?sendMessage(e):null}
        style={styleinput}
      />
      <button>Enter</button>
      <div>
        <Link to="/">
          {" "}
          <button style={buttonstyle} onClick={(e)=>sendMessage(e)}>Exit the app</button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default SendMessageForm;
