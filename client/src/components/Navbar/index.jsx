import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>Logoo</div>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <Stack spacing={4} direction="row" align="center">
          <Button background="cyan.400" color={"white"} size="md" p="25px 30px">
            <Link to="/signin">Login</Link>
          </Button>
          <Button background="cyan.400" color={"white"} size="md" p="25px 30px">
            <Link to="/signup">Register</Link>
          </Button>
        </Stack>
      </div>
    </nav>
  );
}

export default Navbar;
