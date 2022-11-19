import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ListTasks from "./components/ListTasks";
import NavBar from "./components/NavBar";
import ListUsers from "./components/ListUsers";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <Route exact path={"/"} component={LandingPage} />
      <Route path={"/home"} component={NavBar} />
      <Route exact path={"/home/users"} component={ListUsers} />
      <Route exact path={"/home/users/:id"} component={User} />
      <Route exact path={"/home/tasks"} component={ListTasks} />
    </div>
  );
}

export default App;
