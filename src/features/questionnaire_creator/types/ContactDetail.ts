import { z } from "zod";
import { stringSchema } from "@/features/questionnaire_creator/types/dataTypes";
import { contactPointSchema } from "@/features/questionnaire_creator/types/ContactPoint";

export const contactDetailSchema = z.object({
  name: stringSchema.optional(),
  telecom: z.array(contactPointSchema).optional(),
});

export type ContactDetail = z.infer<typeof contactDetailSchema>;
