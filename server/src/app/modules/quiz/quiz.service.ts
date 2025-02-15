import httpStatus from "http-status";
import prisma from "../../../shared/prisma";
import AppError from "../../errors/AppError";
import { IQuiz } from "./quiz.interface";

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
    }
  });

  return result;
};

export const QuizServices = {
  createQuiz,
  getTeacherQuizzes,
};
