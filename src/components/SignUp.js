import React, { useContext, useState } from 'react';
import { authContext } from "../contexts/AuthContext";

const SignUp = ({ history }) => {
  const [userName, setuserName] = useState();
  const [password, setPassword] = useState();
  const { setAuthData } = useContext(authContext);

  const onFormSubmit = e => {
    e.preventDefault();
    // fetch and check credentials
    if (userName === 'admin' && password === 'test123') {
      setAuthData(userName);
      history.replace('/app');
    } else {
      console.error('Incorrect credectials')
    }
  };
  return (
    <div className="container">
      <div className="add-form">
        <div className="form-control">
          <h1  style={{textAlign: "center"}} >Register</h1>
          <form onSubmit={onFormSubmit}>
            <label>Username</label>
            <input type="text" placeholder="Enter Username"
              onChange={e => {
                setuserName(e.target.value);
              }}
            />
            <label>Password</label>
            <input type="password" placeholder="Password"
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit" className="btn btn-success" >
              Sign Up
              </button>
          </form>
        </div>
        <a href="#/signin">Login</a>
      </div>
    </div>
  );
};

export default SignUp;
