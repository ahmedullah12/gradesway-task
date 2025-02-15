import httpStatus from "http-status";
import prisma from "../../../shared/prisma";
import AppError from "../../errors/AppError";
import { IQuiz, IUpdateQuiz } from "./quiz.interface";

//create quiz
const createQuiz = async (payload: IQuiz) => {
  const teacherData = await prisma.user.findUnique({
    where: {
      ID: payload.teacher_id,
    },
  });

  //check if teacher is valid
  if (!teacherData) {
    throw new AppError(httpStatus.NOT_FOUND, "Teacher not found!!");
  }

  const result = await prisma.quiz.create({
    data: payload,
  });

  return result;
};

const getTeacherQuizzes = async (teacher_id: string) => {
  const teacherData = await prisma.user.findUnique({
    where: {
      ID: teacher_id,
    },
  });

  //check if teacher is valid
  if (!teacherData) {
    throw new AppError(httpStatus.NOT_FOUND, "Teacher not found!!");
  }

  const result = await prisma.quiz.findMany({
    where: {
      teacher_id,
    },
  });

  return result;
};

//get single quiz
const getSingleQuiz = async (quizId: string) => {
  const quiz = await prisma.quiz.findUnique({
    where: {
      ID: quizId,
    },
  });

  //check if quiz exists
  if (!quiz) {
    throw new AppError(httpStatus.NOT_FOUND, "Quiz not found");
  }

  return quiz;
};

const updateQuiz = async (quizId: string, payload: IUpdateQuiz) => {
  const quiz = await prisma.quiz.findUnique({
    where: {
      ID: quizId,
    },
  });

  //check if quiz exists
  if (!quiz) {
    throw new AppError(httpStatus.NOT_FOUND, "Quiz not found");
  }

  const result = await prisma.quiz.update({
    where: {
      ID: quiz.ID,
    },
    data: payload,
  });

  return result;
};

export const QuizServices = {
  createQuiz,
  getTeacherQuizzes,
  getSingleQuiz,
  updateQuiz,
};
