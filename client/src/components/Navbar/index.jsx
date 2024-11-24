import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import { useAuth } from "../../context/Auth";
function Navbar() {
  const { user, loggedIn } = useAuth();
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Link className={styles.logo} to="/">
          Logoo
        </Link>
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
        {loggedIn && user ? (
          <Button>
            <Link to="/profile">Profile</Link>
          </Button>
        ) : (
          <Stack
            spacing={4}
            direction={{ base: "column", sm: "column", lg: "row" }}
            align="center"
          >
            <Button
              background="cyan.400"
              color={"white"}
              size={{
                base: "xs",
                sm: "sm",
                md: "md",
                lg: "lg",
              }}
            >
              <Link to="/signin"> Login </Link>
            </Button>
            <Button
              background="cyan.400"
              color={"white"}
              size={{
                base: "xs",
                sm: "sm",
                md: "md",
                lg: "lg",
              }}
            >
              <Link to="/signup">Register</Link>
            </Button>
          </Stack>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
