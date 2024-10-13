import React from "react";
import Navbar from "../../../components/Navbar";
import styles from "./style.module.css";
function Signup() {
  return (
    <div>
      <Navbar />
      <div className={styles.signup}> Signup</div>
    </div>
  );
}

export default Signup;
