import "./App.css";
import Login from "./Login/Login";
import Header from "./Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Chat from "./chat/chat";
import React from "react";


function App() {
  
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
          <Route exact component={Login} path="/">
            <Header />
            <Login />
          </Route>
          <Route path="/mainpage" component={Chat}>
            <Chat />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
