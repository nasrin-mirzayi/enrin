import { z } from "zod";

export const contactSchema = z.object({

name: z.string()
.min(2,"Name is required"),

email: z.string()
.email("Invalid email"),

message: z.string()
.min(10,"Message is too short")

});


export type ContactData =
z.infer<typeof contactSchema>;