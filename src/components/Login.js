import React from "react";
import { GoogleOutlined } from "@ant-design/icons";
import { auth } from "../firebase";
import firebase from "firebase/app";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to MyChatApp</h2>
        <p>
          please log in with your Google account & communicate with your friend.
          Dont worry its completly safe and secure because Firebase security is
          added which is authorized by Google.
        </p>
        <br></br>
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Sign In with Google
        </div>
        {/* <div
          className="login-button facebook"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }
        >
          <FacebookOutlined /> Sign In with Facebook
        </div> */}
      </div>
    </div>
  );
};

export default Login;
