import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import ApplicationViews from "./components/views/ApplicationViews";
import { onLoginStatusChange, getUserDetails } from "./modules/authManager";
import firebase from "firebase";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(null),
    [role, setRole] = useState("");

  const [currentUser, setCurrentUser] = useState(0);

  useEffect(() => {
    onLoginStatusChange(setIsLoggedIn);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      getUserDetails(firebase.auth().currentUser.uid)
        .then(userObject => {
          setCurrentUser(userObject.id)
          setRole(userObject.userType.name)
        })
    } else {
      setCurrentUser(null);
    }
  }, [isLoggedIn]);

  if (isLoggedIn === null) {
    return <p>LOADING...</p>
  }

  return (
    <div className="App">
      <Router>
        <NavBar isLoggedIn={isLoggedIn} currentUser={currentUser} />
        <ApplicationViews isLoggedIn={isLoggedIn} currentUser={currentUser} role={role} />
      </Router>
    </div>
  );
};

export default App;