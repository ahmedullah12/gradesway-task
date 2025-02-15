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

const getSingleQuiz = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await QuizServices.getSingleQuiz(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Quiz fetched successfully!!",
    data: result,
  });
});

const updateQuiz = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await QuizServices.updateQuiz(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Quiz updated successfully!!",
    data: result,
  });
});

const deleteQuiz = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await QuizServices.deleteQuiz(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Quiz deleted successfully!!",
    data: result,
  });
});


export const QuizController = {
  createQuiz,
  getTeacherQuizzes,
  getSingleQuiz,
  updateQuiz,
  deleteQuiz
};
