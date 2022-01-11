import * as Yup from "yup";

export const name = Yup.string()
                    .min(2, "Must be 2 characters atleast")
                    .required("Required")


export const email = Yup.string()
                    .email("Email is invalid")
                    .required("Email is required")

export const phoneNumber = Yup.number()
                            .typeError("That doesn't look like a phone number")
                            .positive("A phone number can't start with a minus")
                            .integer("A phone number can't include a decimal point")
                            // .max(10, "Must be 10 characters")
                            // .min(10, "Must be 10 characters")
                            .required("Required")
                  

export const password = Yup.string()
                        .min(6, "Password must be at least 6 charaters")
                        .required("Password is required")
   
export const confirmPassword = Yup.string()
                                .oneOf([Yup.ref("password"), null], "Password must match")
                                .required("Confirm password is required")