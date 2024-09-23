const { z } = require("zod");

const registerSchema = z.object({
  name: z
    .string({ required_error: "Name is require" })
    .trim()
    .min(3, { message: "Name must be atlest 3 chars" })
    .max(255, { message: "Name not be more than 255 chars" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(3, { message: "email must be atlest 3 chars" })
    .max(255, { message: "email not be more than 255 chars" }),

  password: z
    .string({ required_error: "Passwrod is required" })
    .trim()
    .min(7, { message: "Password must have at least 6 characters" })
    .max(1024, { message: "Password cant be greater than 1024 characters" }),
});

module.exports={registerSchema};