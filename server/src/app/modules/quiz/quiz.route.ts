import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { QuizValidations } from "./quiz.validations";
import { QuizController } from "./quiz.controller";

const router = Router();

router.post(
  "/",
  validateRequest(QuizValidations.createQuizValidationSchema),
  QuizController.createQuiz,
);
router.get("/", QuizController.getTeacherQuizzes)

export const QuizRoutes = router;