import { z } from "zod";
export const schema = z.object({
  labName: z.string().trim().min(1),
  clientName: z.string().trim().min(1),
  clientHostName: z.string().trim().min(1),
  hostPort: z.string().trim().min(1),
  adminPassword: z.string().trim().min(1),
  adminUsername: z.string().trim().min(1),
});