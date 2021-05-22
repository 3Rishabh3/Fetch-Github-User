import React, { useState, useContext } from "react";
import UserContext from "../Contexts/UserContext";

import firebase from "firebase/app";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

const SignIn = () => {
  const context = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        context.setUser({ email: res.user.email, uid: res.user.uid });
      })
      .catch((error) => {
        toast(error.message, { type: "error" });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn();
  };

  if (context.user?.uid) {
    return <Redirect to="/" />;
  }

  return (
    <div className="">
      <div
        className="card"
        style={{
          width: "25rem",
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: "5%",
        }}
      >
        <div
          className="card-body"
          style={{ paddingRight: "50px", paddingLeft: "50px" }}
        >
          <h4 className="card-title" style={{ textAlign: "center" }}>
            Sign In Here
          </h4>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label for="username" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
