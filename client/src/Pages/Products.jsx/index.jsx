import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./style.module.css";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import { Grid, GridItem } from "@chakra-ui/react";
function Products() {
  const [products, setProducts] = useState([]);
  const getProductList = async () => {
    try {
      const response = await axios.get("http://localhost:4000/product");
      setProducts(response.data);
    } catch (err) {
      alert("ERR [Get Products List] : " + err.message);
    }
  };
  useEffect(() => {
    getProductList();
  }, []);
  console.log("Product", products);

  return (
    <div>
      <Navbar />
      <Grid templateColumns="repeat(4, 1fr)" gap={6} padding="20px 40px">
        {products?.map((product, i) => {
          return <Card product={product} key={product._id} />;
        })}
      </Grid>
    </div>
  );
}

export default Products;
