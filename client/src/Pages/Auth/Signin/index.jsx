import React, { useContext } from "react";
import Navbar from "../../../components/Navbar";
import styles from "./style.module.css";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import { AuthContext, useAuth } from "../../../context/Auth";
import { validations } from "./validations";
import { loginUser } from "../../../api";
import { Alert, AlertIcon } from "@chakra-ui/react";

function Signin() {
  const { login } = useAuth();
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const onSubmit = async (values, props) => {
    try {
      const response = await loginUser(values.email, values.password);
      if (response.status === 200) {
        login(response.data);
        setTimeout(() => {
          props.resetForm();
        }, 2000);
      }
    } catch (err) {
      props.setErrors({ general: err.response.data.message });
    }
    /*  setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000); */
  };

  return (
    <div>
      <Navbar />
      <Grid sm={12} md={6} height="80vh">
        <Flex
          p="10"
          maxWidth="100vw"
          alignItems="center"
          justifyContent="center"
        >
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validations}
          >
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
                  {errors.general ? (
                    <Box>
                      <Alert status="error">
                        <AlertIcon />
                        {errors.general}
                      </Alert>
                    </Box>
                  ) : (
                    ""
                  )}
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        error={touched.email && Boolean(errors.email)}
                      />
                      {touched.email && errors.email && (
                        <ErrorMessage
                          name="email"
                          className={styles.error}
                          component="span"
                        />
                      )}
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
                        onChange={handleChange}
                        value={values.password}
                        errors={errors.password}
                        helpertext={errors.password}
                      />
                      {touched.password && errors.password && (
                        <ErrorMessage
                          name="password"
                          component="span"
                          className={styles.error}
                        />
                      )}
                    </FormControl>
                    <FormControl>
                      <Checkbox
                        value={values.rememberMe}
                        variant="solid"
                        color="white"
                        fontSize="18"
                      >
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
                        background: "black",
                        color: "#e3fe55",
                        fontSize: "18px",
                      }}
                      disabled={isSubmitting}
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
