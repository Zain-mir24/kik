import React from "react";
import { Link } from "react-router-dom";
const inputstyling = {
    marginTop: "20px",
    height: "50px",
    borderRadius: "25px",
};
const buttonstyle = {
    borderRadius: "25px",
};

const formstyling = {
    backgroundColor: "#03a9f4",
    marginLeft: "30%",
    marginRight: "30%",
    height: "400px",
};
const headerStyle = {};

function Login() {
    const [name, setname] = React.useState("");
    const [room, setRoom] = React.useState("");

    function handlesubmit(event) {
        event.preventDefault();
    }
    return (
        <div>
            <form style={formstyling} onsubmit={handlesubmit}>
                <h1>Login Form</h1>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                    >
                        <path d="M9 8c1.66 0 2.99-1.34 2.99-3S10.66 2 9 2C7.34 2 6 3.34 6 5s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V16h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                    </svg>
                    <input
                        style={inputstyling}
                        type="username"
                        placeholder="EnterYourusername"
                        onChange={(e) => setname(e.target.value)}
                    />
                    <input
                        style={inputstyling}
                        type="text"
                        placeholder="Enter the room you wanna enter"
                        onChange={(e) => setRoom(e.target.value)}
                    />
                </div>
                <p>Dont have a kik account?</p>
                <Link
                    onClick={(e) => (!name || !room ? e.preventDefault() : null)}
                    to="/mainpage">
                    {" "}
                    <button style={buttonstyle}>Create your Kik Account</button>{" "}
                </Link>
            </form>
        </div>
    );
}

export default Login;
