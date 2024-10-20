import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import { Button, Flex, Grid } from "@chakra-ui/react";
import { getProductList } from "../../api";
import { useInfiniteQuery } from "@tanstack/react-query";

function Products() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(["getProductList"], getProductList, {
    getNextPageParam: (lastGroup, allGroups) => {
      const morePagesExist = lastGroup?.length === 12;
      if (!morePagesExist) {
        return;
      }
      return allGroups.length + 1;
    },
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>ERR [Products Page]: {error.message}</div>;
  }
  console.log("data : " + JSON.stringify(data, null, 2));

  return (
    <div>
      <Navbar />
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
          xl: "repeat(5,1fr)",
        }}
        gap={6}
        padding="20px 40px"
      >
        {data?.pages.map((group, i) => {
          console.log(group);
          return (
            <React.Fragment key={i}>
              {group.map((product) => {
                return <Card product={product} key={product._id} />;
              })}
            </React.Fragment>
          );
        })}
      </Grid>
      <Flex justify="center">
        {hasNextPage && (
          <Button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            isLoading={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading more..." : "Load More"}
          </Button>
        )}
      </Flex>
    </div>
  );
}

export default Products;
