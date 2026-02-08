import { z } from "zod";

export const messageSchema = z.object({
  email: z.string().email(),
  content: z.string().min(1),
});

export type Message = z.infer<typeof messageSchema>;
