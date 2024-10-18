import React, { useEffect, useState } from "react";
import "./style.module.css";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Image,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function ProductDetail() {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const getProductItem = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/product/${id}`);
      setProduct(response.data);
    } catch (err) {
      alert("Err [Get Product Item] : " + err.message);
    }
  };

  useEffect(() => {
    getProductItem();
  }, []);

  console.log(product);

  return (
    <div>
      <Navbar />
      <Flex margin="10px 20px" p="10px" justifyContent={"center"} gap="50px">
        <Center w="40%">
          <Carousel axis="horizontal">
            {product?.photos?.map((item, i) => {
              return (
                <div>
                  <img src={item} />
                </div>
              );
            })}
          </Carousel>
        </Center>
        <Flex direction="column" justify="space-around">
          <Box>
            <Box>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                Technologies &bull; Computer
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h2"
              lineHeight="tight"
              noOfLines={1}
              fontSize={30}
              padding="16px 0"
            >
              {product?.title}
            </Box>

            <Box color={"gray.500"} padding="0 0 10px 0">
              {product?.description}
            </Box>

            <Box display="flex" alignItems="center" padding="16px 0">
              <Box as="span" color="gray.600" fontSize="xl">
                {product?.price} TL
              </Box>
            </Box>
          </Box>
          <Button background="#e3fe55" color="black" size="lg">
            Add To Basket
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}

export default ProductDetail;
