import { createContext, useContext, useState } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";
const baseUrl = "http://localhost:8000";
const tokenUrl = baseUrl + "/api/token/";

const AuthContext = createContext();

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error("You forgot AuthProvider!");
  return auth;
}

export function AuthProvider(props) {
  const [state, setState] = useState({
    tokens: null,
    user: null,
    login,
    logout,
  });

  async function login(username, password) {
    console.log("tokenUrl", tokenUrl);
    const response = await axios.post(tokenUrl, {
      username,
      password,
    });

    const decodedAccess = jwt.decode(response.data.access);
    console.log("decodedAccess: ", decodedAccess);
    const newState = {
      tokens: response.data,
      user: {
        username: decodedAccess.username,
        email: decodedAccess.email,
        id: decodedAccess.user_id,
      },
    };
    console.log("token", newState.tokens);
    setState((prevState) => ({ ...prevState, ...newState }));
  }

  function logout() {
    const newState = {
      tokens: null,
      user: null,
    };
    setState((prevState) => ({ ...prevState, ...newState }));
  }

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
}