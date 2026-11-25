import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout.jsx";
import StudentLayout from "../layouts/StudentLayout.jsx";
import TeacherLayout from "../layouts/TeacherLayout.jsx";
import RoutePlaceholder from "../pages/RoutePlaceholder.jsx";
import LandingPage from "../pages/public/LandingPage.jsx";
import LoginPage from "../pages/auth/LoginPage.jsx";
import StudentDashboardPage from "../pages/student/StudentDashboardPage.jsx";
import LessonPage from "../pages/student/LessonPage.jsx";
import QuizResultsPage from "../pages/student/QuizResultsPage.jsx";
import TeacherDashboardPage from "../pages/teacher/TeacherDashboardPage.jsx";
import LessonEditorPage from "../pages/teacher/LessonEditorPage.jsx";
import QuestionsPage from "../pages/teacher/QuestionsPage.jsx";
import TeacherProgressPage from "../pages/teacher/TeacherProgressPage.jsx";


export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <StudentLayout />,
    children: [
      { path: "/student/dashboard", element: <StudentDashboardPage /> },
      { path: "/student/lesson", element: <LessonPage /> },
      { path: "/student/results", element: <QuizResultsPage /> },
    ],
  },
  {
    element: <TeacherLayout />,
    children: [
      {
        path: "/teacher/dashboard",
        element: <TeacherDashboardPage />,
      },
      {
        path: "/teacher/lessons/new",
        element: <LessonEditorPage />,
      },
      {
        path: "/teacher/questions",
        element: <QuestionsPage />,
      },
      {
        path: "/teacher/progress",
        element: <TeacherProgressPage />,
      },
    ],
  },
  {
    path: "*",
    element: <RoutePlaceholder title="Página no encontrada" description="La ruta solicitada no existe." />,
  },
]);