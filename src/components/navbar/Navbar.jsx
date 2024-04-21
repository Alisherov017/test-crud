import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.products}>
        <NavLink to={"/"}>Products</NavLink>
      </div>
      <div className={styles.add}>
        <NavLink to={"/add"}>Add product</NavLink>
      </div>
      <div className={styles.register}>
        <NavLink to={"/register"}>Register</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
