import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [auth, setAuth] = useState([]);



  return (
    <>
      <AuthContext.Provider
        value={{
          auth,
          setAuth,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
