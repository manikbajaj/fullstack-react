import { z } from "zod";

// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
const passwordValidation = new RegExp(
  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
);

const signupSchema = z.object({
  firstName: z
    .string()
    .min(3, {
      // using min makes it a required field
      message: "First name must be at least 3 characters.",
    })
    .max(100, {
      message: "First name cannot be more than 100 characters",
    }),
  lastName: z.string().optional().max(100, {
    message: "Last name cannot be more than 100 characters",
  }),
  email: z.email().min(5, {
    // using min makes it a required field
    message: "Email must be at least 5 characters.",
  }),
  password: z
    .password()
    .min(8, {
      // using min makes it a required field
      message: "Password must be at least 8 characters.",
    })
    .regex(passwordValidation, {
      message:
        "Password must include at least one number, one uppercase letter, one lowercase letter, and one special character.",
    }),
});
