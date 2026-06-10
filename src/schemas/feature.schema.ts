import { text } from "node:stream/consumers";
import { z } from "zod";

export const createFeatureSchema = z.object({
    title: z
        .string()
        .min(8,'title must be at least 8 characters')
        .max(30,'max charcter for title is 30'),

    text: z
        .string()
        .min(20, "text must be at least 20 characters")
        .max(80,'max charcter for title is 30'),
});     