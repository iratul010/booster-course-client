import React from "react";
import { createContext } from "react";
export const AuthContext = createContext();
const user = { displayName: "batas ali" };
const authInfo = { user };
const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
