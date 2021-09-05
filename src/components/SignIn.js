import { useContext, useState, useEffect } from 'react';
import { authContext } from "../contexts/AuthContext";
import { useIndexedDB } from 'react-indexed-db';

const SignIn = ({ history }) => {
  const [userName, setuserName] = useState();
  const [password, setPassword] = useState();
  const { setAuthData } = useContext(authContext);
  const { add, getByIndex } = useIndexedDB('people');

  useEffect(() => {
    // set 3 default users
    if(!window.localStorage.getItem('addedDefaultUsers')) {
      addDefaultUsers({ name: 'user1', pass: '123456' });
      addDefaultUsers({ name: 'user2', pass: '123456' });
      addDefaultUsers({ name: 'user3', pass: '123456' });
      window.localStorage.setItem('addedDefaultUsers', true)
    }
  }, []);

  const addDefaultUsers = (obj) => {
    add(obj).then(
      event => {
        console.log('ID Generated: ', event);
      },
      error => {
        console.log(error);
      }
    )
  };

  const onFormSubmit = e => {
    e.preventDefault();
    // fetch and check credentials
    if (userName && password) {
      getByIndex('name', userName).then(userDetails => {
        console.log(userDetails);
        if (userDetails && userDetails.pass === password) {
          setAuthData(userName);
          history.replace('/app');
        } else {
          console.error('Incorrect credectials')
        }
      });
    } else {
      console.error('Empty credectials')
    }
  };
  return (
    <div className="container">
      <div className="add-form">
        <div className="form-control">
          <h1 style={{textAlign: "center"}} >Login</h1>
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
              Sign in
              </button>
          </form>
        </div>
        <a href="#/signup">Register</a>
      </div>
    </div>
  );
};

export default SignIn;
