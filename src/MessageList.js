import React from "react";
const stylingchatList = {
  height: "800px",
  width: "100%",
  backgroundColor: "#03a9f4",
};
const stylingSidebar = {
  backgroundColor: "#3d5afe",
  padding: "25px",
  width: "10%",
  height: "90%",
  float: "left",
};
const messagedialogue={
   width:"20%",
  
}
function MessageList() {
  return (
    <div style={stylingchatList}>
      <div className="SideBar" style={stylingSidebar}>
        <h3>Our Room</h3>
        <h4>our users</h4>
        <ul>
          <li>users</li>
        </ul>
      </div>
      <div className="message" style={messagedialogue}>
        <p>
          <span className="message__name">username</span>
        </p>
        <p>message</p>
      </div>
    </div>
  );
}

export default MessageList;
