import React from "react";
import Navbar from "../../../components/Navbar";
import styles from "./style.module.css";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
} from "@chakra-ui/react";
import { Field, Form, Formik, useFormik } from "formik";
function Signin() {
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const onSubmit = (values, props) => {
    console.log("values : ", values);
    console.log("props : ", props);
  };

  return (
    <div>
      <Navbar />
      <Grid sm={12} md={6} height="80vh">
        <Flex
          gap={4}
          p="10"
          maxWidth="100vw"
          alignItems="center"
          justifyContent="center"
        >
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({
              errors,
              handleBlur,
              handleChange,
              handleReset,
              handleSubmit,
              submitForm,
              values,
              touched,
              status,
              isSubmitting,
            }) => {
              return (
                <Form backgroundColor="black">
                  <Flex
                    display="flex"
                    flexDirection="column"
                    gap={4}
                    p="20"
                    width={{
                      base: "200px",
                      sm: "310px",
                      md: "500px",
                      lg: "600px",
                    }}
                    borderRadius={5}
                    backgroundColor="#8684aa"
                  >
                    <FormControl>
                      <FormLabel color="gray.50" fontSize="18">
                        E-Mail Address
                      </FormLabel>
                      <Field
                        as={Input}
                        name="email"
                        type="email"
                        placeholder="me@example.com"
                        variant="subtle"
                        backgroundColor="gray.100"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel color="gray.50" fontSize="18">
                        Password
                      </FormLabel>
                      <Field
                        as={Input}
                        name="password"
                        type="password"
                        placeholder="************"
                        variant="password"
                        align="center"
                        justify="center"
                        backgroundColor="gray.100"
                      />
                    </FormControl>
                    <FormControl>
                      <Checkbox variant="solid" color="white" fontSize="18">
                        Remember Me
                      </Checkbox>
                    </FormControl>
                    <Button
                      type="submit"
                      backgroundColor="#e3fe55"
                      width="full"
                      color="black"
                      transition="300ms all"
                      _hover={{
                        backgroundColor: "black",
                        color: "#e3fe55",
                        fontSize: "18px",
                      }}
                    >
                      Login
                    </Button>
                  </Flex>
                </Form>
              );
            }}
          </Formik>
        </Flex>
      </Grid>
    </div>
  );
}

export default Signin;
