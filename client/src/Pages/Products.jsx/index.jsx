import React from "react";
import styles from "./style.module.css";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import { Grid, GridItem } from "@chakra-ui/react";
function Products() {
  return (
    <div>
      <Navbar />
      <Grid templateColumns="repeat(5, 1fr)" gap={6} padding="20px 40px">
        <Card />
        <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
      </Grid>
    </div>
  );
}

export default Products;
