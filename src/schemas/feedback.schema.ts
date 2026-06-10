import { text } from "node:stream/consumers";
import { z } from "zod";

export const createFeedbackSchema = z.object({
    vote: z
        .boolean(),
    featureId: z
        .string()        
});     