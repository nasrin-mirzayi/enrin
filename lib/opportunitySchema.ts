import { z } from "zod";

export const opportunitySchema = z.object({

  title: z.string()
    .min(3, "Title must be at least 3 characters"),

  organization: z.string()
    .min(2, "Organization is required"),

  category: z.string()
    .min(1, "Category is required"),

  location: z.string()
    .min(1, "Location is required"),

  type: z.string()
    .min(1, "Type is required"),

  deadline: z.string()
    .min(1, "Deadline is required"),

  description: z.string()
    .min(10, "Description is too short"),

  requirements: z.string()
    .min(3, "Requirements required"),

  applyLink: z.string()
    .url("Enter a valid URL"),

  tags: z.string()
    .min(2, "Tags required")

});


export type OpportunityFormData =
z.infer<typeof opportunitySchema>;