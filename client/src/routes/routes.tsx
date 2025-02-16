import DashboardLayout from "@/layout/DashboardLayout";
import Login from "@/pages/Login";
import Quizzes from "@/pages/Quizzes";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Quizzes />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
