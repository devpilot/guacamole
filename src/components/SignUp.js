import React, { useState } from 'react';
import { useIndexedDB } from 'react-indexed-db';

const SignUp = ({ history }) => {
  const [userName, setuserName] = useState();
  const [password, setPassword] = useState();
  const { add } = useIndexedDB('people');

  const onFormSubmit = e => {
    e.preventDefault();
    // add credentials
    if (userName && password ) {
      add({ name: userName, pass: password }).then(
        event => {
          console.log('User Added: ', event);
          history.replace('/signin');
        },
        error => {
          console.log(error);
        }
      );      
    } else {
      console.error('Empty credectials')
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
            <button type="submit" className="btn btn-register" >
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
