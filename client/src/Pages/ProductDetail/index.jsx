import React, { useEffect, useState } from "react";
import "./style.module.css";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
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
import { getProductItem } from "../../api";
import { useQuery } from "@tanstack/react-query";

function ProductDetail() {
  const { id } = useParams();
  const { status, error, isLoading, data } = useQuery(
    ["getProductItem", id],
    () => getProductItem(id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    alert("ERR Product Details Page :", error.message);
  }

  return (
    <div>
      <Navbar />
      <Flex margin="10px 20px" p="10px" justifyContent={"center"} gap="50px">
        <Center w="40%">
          <Carousel axis="horizontal">
            {data?.photos?.map((item, i) => {
              return (
                <div>
                  <img src={item} key={i} />
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
              {data?.title}
            </Box>

            <Box color={"gray.500"} padding="0 0 10px 0">
              {data?.description}
            </Box>

            <Box display="flex" alignItems="center" padding="16px 0">
              <Box as="span" color="gray.600" fontSize="xl">
                {data?.price} TL
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
