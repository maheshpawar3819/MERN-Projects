const { z } = require("zod");

//Ceating object schema

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atlest 3 chars" })
    .max(255, { message: "Name not be more than 255 chars" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(3, { message: "email must be atlest 3 chars" })
    .max(255, { message: "email not be more than 255 chars" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least of 10 characters" })
    .max(20, { message: "Phone must not be more than 20 characters" }),
  password: z
    .string({ required_error: "Passwrod is required" })
    .trim()
    .min(7, { message: "Passwrod must have at least 6 characters" })
    .max(1024, { message: "Password cant be greater than 1024 characters" }),
});

module.exports=signupSchema;