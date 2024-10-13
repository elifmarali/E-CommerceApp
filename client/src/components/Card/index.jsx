import React from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Card() {
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      p="3"
      display="flex"
      flexDirection="column"
      gap="4px"
      alignItems="center"
    >
      <Link to="" display="flex" flexDirection="column" alignItems="center">
        <Image src="https://picsum.photos/250/300" display="flex"></Image>
        <Box d="flex" alignItems="flex-start">
          <Box d="flex" alignItems="baseline">
            13/12/2002
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            Macbook Pro
          </Box>
          <Box>100 TL</Box>
        </Box>
      </Link>
      <Button colorScheme="pink" w="79%">
        Add to Basket
      </Button>
    </Box>
  );
}

export default Card;
