import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./style.module.css";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import { Grid, GridItem } from "@chakra-ui/react";
import { getProductList } from "../../api";
import { useQuery } from "@tanstack/react-query";
function Products() {
  const { status, isLoading, error, data } = useQuery(
    ["getProductList"], // query key
    getProductList // query function
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return alert("ERR [Products Page] : " + error.message);
  }

  return (
    <div>
      <Navbar />
      <Grid templateColumns="repeat(4, 10fr)" gap={6} padding="20px 40px">
        {data?.map((product, i) => {
          return <Card product={product} key={product._id} />;
        })}
      </Grid>
    </div>
  );
}

export default Products;
