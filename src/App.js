import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { AppContext } from "./context/AppContext";
import AuthService from "./services/auth.service";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser())

  const logOut = () => {
    AuthService.logout()
  }

  const fetchCurrentUser = async () => {
    try {
      const response = await AuthService.getCurrentUser()

      if (response) {
        setCurrentUser(response)
      }
    } catch (error) {
      console.log('Failed to fetch currentUser: ', error)
    }
  }

  useEffect(() => {
    // fetchCurrentUser()
  }, [])

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          currentUser
        }}
      >
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
