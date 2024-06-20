import { z } from "zod";
export const schema = z.object({
  labName: z.string().trim().min(1),
  descriptionName: z.string().trim().min(1),
  ethernetIP: z.string().ip().trim().min(1),
  hostPort: z.coerce.number().int().positive(),
  interfaceName: z.string().trim().min(1),
  adminPassword: z.string().trim().min(1),
  adminUsername: z.string().trim().min(1),
  // id: z.string().trim(),
});
export const idSchema = z.object({
  id: z.number().int().positive(),
});
export const emptySchema = z.object({
});
export const loginSchema = z.object({
  emailLogin: z.string().email(),
  passwordLogin: z.string().min(6),
});
export const signupSchema = z.object({
  emailLogin: z.string().email(),
  passwordLogin: z.string().min(6),
  full_name: z.string().min(1),
});