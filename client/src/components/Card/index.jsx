import React from "react";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
function Card({ product }) {
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      p="3"
      display="flex"
      flexDirection="column"
    >
      <Carousel axis="horizontal">
        {product?.photos?.map((item, i) => {
          return (
            <div>
              <Image
                src={item}
                key={i}
                display="flex"
                h="250px"
                w="200px"
              ></Image>
            </div>
          );
        })}
      </Carousel>
      <Link to={`/products/${product?._id}`}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          width="100%"
          marginLeft={1}
          gap={2}
        >
          <Box d="flex" align="baseline">
            {dateFormat(product?.createdAt, "dd/mm/yyyy")}
          </Box>
          <Box fontWeight="semibold" as="h2" lineHeight="tight" fontSize={20}>
            {product?.title}
          </Box>
          <Box>{product?.price} TL</Box>
        </Box>
      </Link>
      <Button
        mt={4}
        color={"black"}
        background="#e3fe55"
        w="100%"
        transition="300ms all"
        _hover={{ boxShadow: "1px 1px 1px 0px rgba(0, 0, 0, 0.2)" }}
      >
        Add to Basket
      </Button>
    </Box>
  );
}

export default Card;
