import React from "react";
import Navbar from "../../../components/Navbar";
import styles from "./style.module.css";
function Signin() {
  return (
    <div>
      <Navbar />
      <div className={styles.signin}> Signin</div>
    </div>
  );
}

export default Signin;
