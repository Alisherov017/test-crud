import React, { useState } from "react";

const RegisterPage = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    for (let key in user) {
      if (!user[key].trim()) {
        alert("Some inputs are empty!");
        return;
      }
    }
  }

  return (
    <div>
      <h1>RegisterPage</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={user.name}
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={handleChange}
          value={user.email}
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          value={user.password}
          name="password"
          type="password"
          placeholder="Password"
        />
        <input
          onChange={handleChange}
          value={user.passwordConfirm}
          name="passwordConfirm"
          type="password"
          placeholder="Password confirm"
        />
        <button>Register</button>
      </form>
    </div>
  );
};
export default RegisterPage;
