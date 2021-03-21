import "./App.css";
import Login from "./Login";
import Header from "./Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Mainpage from "./mainpage";
import React from "react";


function App() {
  const [message, Setmessage] = React.useState("");
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <Login />
          </Route>
          <Route path="/mainpage">
            <Mainpage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
