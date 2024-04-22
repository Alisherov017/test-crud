import React, { createContext, useState } from "react";
import axios from "axios";
const API = "http://localhost:8000/users";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const register = async (userData) => {
    const { username, email, password, confirm } = userData;

    if (!username || !email || !password || !confirm) {
      alert("Some inputs are empty!");
      return;
    }

    if (password.length < 8) {
      alert("Your password is too short!");
      return;
    }

    if (password !== confirm) {
      alert("Password and its confirmation don't match!");
      return;
    }

    try {
      const response = await axios.get(`${API}?email=${email}`);
      if (response.data.length > 0) {
        alert("This email already exists!");
        return;
      }

      await axios.post(API, { username, email, password });
      alert("User registered successfully!");
    } catch (error) {}
  };

  const values = {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    confirm,
    setConfirm,
    register,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export { AuthProvider, authContext };
