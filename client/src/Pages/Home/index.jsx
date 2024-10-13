import React from "react";
import Navbar from "../../components/Navbar/index";
import styles from "./style.module.css";
function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.home}>Home</div>
    </div>
  );
}

export default Home;
