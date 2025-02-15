import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { QuizServices } from "./quiz.service";

const createQuiz = catchAsync(async (req, res) => {
  const result = await QuizServices.createQuiz(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Quiz created successfully!!",
    data: result,
  });
});

const getTeacherQuizzes = catchAsync(async (req, res) => {
  const result = await QuizServices.getTeacherQuizzes(
    req.headers.authorization as string
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Quizzes fetched successfully!!",
    data: result,
  });
});

export const QuizController = {
  createQuiz,
  getTeacherQuizzes,
};
