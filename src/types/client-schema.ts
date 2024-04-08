import { z } from "zod";
export const schema = z.object({
  labName: z.string().trim().min(1),
  descriptionName: z.string().trim().min(1),
  ethernetIP: z.string().trim().min(1),
  hostPort: z.string().trim().min(1),
  interfaceName: z.string().trim().min(1),
  adminPassword: z.string().trim().min(1),
  adminUsername: z.string().trim().min(1),
});