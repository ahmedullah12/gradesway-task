import httpStatus from "http-status";
import prisma from "../../../shared/prisma";
import AppError from "../../errors/AppError";
import { ILoginPayload } from "./auth.interface";

//login service
const login = async (payload: ILoginPayload) => {
  const isUserExists = await prisma.user.findUnique({
    where: {
      username: payload.username,
    },
  });

  if (!isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found!!");
  }

  const isPasswordCorrect = isUserExists.password === payload.password;

  if (!isPasswordCorrect) {
    throw new AppError(httpStatus.FORBIDDEN, "Password isn't correct!!");
  }

  return isUserExists;
};

export const AuthServices = {
    login,
}