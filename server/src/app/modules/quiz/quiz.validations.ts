import { z } from "zod";

const createQuizValidationSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required!",
    }),
    description: z.string({ required_error: "Description is required!" }),
    teacher_id: z.string({ required_error: "Teacher id is required!" }),
  }),
});

export const QuizValidations = {
    createQuizValidationSchema,
}