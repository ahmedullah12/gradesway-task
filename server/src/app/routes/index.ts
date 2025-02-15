import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { QuizRoutes } from "../modules/quiz/quiz.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/",
    route: AuthRoutes,
  },
  {
    path: "/quizzes",
    route: QuizRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
