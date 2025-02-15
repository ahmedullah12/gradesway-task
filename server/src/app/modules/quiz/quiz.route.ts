import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { QuizValidations } from "./quiz.validations";
import { QuizController } from "./quiz.controller";

const router = Router();

router.post(
  "/",
  validateRequest(QuizValidations.createQuizValidationSchema),
  QuizController.createQuiz
);
router.get("/", QuizController.getTeacherQuizzes);
router.get("/:id", QuizController.getSingleQuiz);
router.put(
  "/:id",
  validateRequest(QuizValidations.updateQuizValidationSchema),
  QuizController.updateQuiz
);

export const QuizRoutes = router;
