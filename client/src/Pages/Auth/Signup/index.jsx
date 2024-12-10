import React from "react";
import Navbar from "../../../components/Navbar";
import styles from "./style.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

function Signup() {
  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);

  return (
    <div>
      <Navbar />
      <Grid>
        <Flex
          gap={4}
          p="40"
          maxWidth="100vw"
          alignItems="center"
          justifyContent="center"
        >
          <Formik
            initialValues={initialValues}
            onSubmit={(values, props) => {
              console.log("values : ", values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form className={styles.formGroup}>
                <Grid
                  templateColumns={{
                    base: "1fr", // Mobilde tek sütun
                    md: "repeat(2, 1fr)", // Orta ekranlarda 2 sütun
                  }}
                  gap={4}
                >
                  {/* First Name */}
                  <GridItem>
                    <FormControl>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        type="text"
                        name="firstName"
                        placeholder="Enter first name..."
                        onChange={handleChange}
                        backgroundColor="gray.100"
                      />
                      {errors.firstName && (
                        <FormHelperText color="red.500">
                          {errors.firstName}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </GridItem>

                  {/* Last Name */}
                  <GridItem>
                    <FormControl>
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        type="text"
                        name="lastName"
                        placeholder="Enter last name..."
                        onChange={handleChange}
                        backgroundColor="gray.100"
                      />
                      {errors.lastName && (
                        <FormHelperText color="red.500">
                          {errors.lastName}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </GridItem>

                  {/* Phone Number */}
                  <GridItem>
                    <FormControl>
                      <FormLabel>Phone Number</FormLabel>
                      <Input
                        type="text"
                        name="phoneNumber"
                        placeholder="Enter phone number..."
                        onChange={handleChange}
                        backgroundColor="gray.100"
                      />
                      {errors.phoneNumber && (
                        <FormHelperText color="red.500">
                          {errors.phoneNumber}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </GridItem>

                  {/* Email */}
                  <GridItem>
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input
                        type="text"
                        name="email"
                        placeholder="Enter email..."
                        onChange={handleChange}
                        backgroundColor="gray.100"
                      />
                      {errors.email && (
                        <FormHelperText color="red.500">
                          {errors.email}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </GridItem>

                  {/* Password */}
                  <GridItem>
                    <FormControl>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="Enter password..."
                          onChange={handleChange}
                          backgroundColor="gray.100"
                        />
                        <InputRightElement width="4.5rem">
                          <Button
                            h="1.75rem"
                            size="sm"
                            onClick={() => setShowPassword(!showPassword)}
                            backgroundColor="gray.200"
                            _hover={{ backgroundColor: "gray.300" }}
                          >
                            {showPassword ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                  </GridItem>

                  {/* Confirm Password */}
                  <GridItem>
                    <FormControl>
                      <FormLabel>Confirm Password</FormLabel>
                      <InputGroup>
                        <Input
                          type={showPasswordConfirm ? "text" : "password"}
                          name="confirmPassword"
                          placeholder="Confirm password..."
                          onChange={handleChange}
                          backgroundColor="gray.100"
                        />
                        <InputRightElement width="4.5rem">
                          <Button
                            h="1.75rem"
                            size="sm"
                            onClick={() =>
                              setShowPasswordConfirm(!showPasswordConfirm)
                            }
                            backgroundColor="gray.200"
                            _hover={{ backgroundColor: "gray.300" }}
                          >
                            {showPasswordConfirm ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                  </GridItem>
                </Grid>
                <Button
                  type="submit"
                  backgroundColor="#e3fe55"
                  width="30%"
                  color="black"
                  position="relative"
                  left="520px"
                  mt={4}
                  _hover={{
                    background: "black",
                    color: "#e3fe55",
                    fontSize: "18px",
                  }}
                  disabled={isSubmitting}
                >
                  Register
                </Button>
              </Form>
            )}
          </Formik>
        </Flex>
      </Grid>
    </div>
  );
}

export default Signup;
