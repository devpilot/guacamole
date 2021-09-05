import React, { useContext } from "react";
import { authContext } from "../contexts/AuthContext";

const Header = () => {
  const { setAuthData, auth } = useContext(authContext);
  const onLogOut = () => {
    setAuthData(null);
  } //clearing the context
  return (
    <div style={{ position: 'relative' }}>
      <h2 className="header"> {`Hello, ${auth.data}`} </h2>
      <button className="btn btn-logout" onClick={onLogOut}>Log out</button>
    </div>
  );
};

export default Header;
