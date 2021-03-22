import "./App.css";
import Login from "./Login/Login";
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
          <Route exact component={Login} path="/">
            <Header />
            <Login />
          </Route>
          <Route path="/mainpage" component={Mainpage}>
            <Mainpage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
