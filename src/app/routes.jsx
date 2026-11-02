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

function page(title, description) {
  return <RoutePlaceholder title={title} description={description} />;
}

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
      { path: "/teacher/dashboard", element: page("Panel docente", "Resumen de lecciones y actividad.") },
      { path: "/teacher/lessons/new", element: page("Editor de lecciones", "Crea y publica contenido.") },
      { path: "/teacher/questions", element: page("Gestión de preguntas", "Administra el banco de preguntas.") },
      { path: "/teacher/progress", element: page("Progreso de estudiantes", "Consulta el avance de tus estudiantes.") },
    ],
  },
  {
    path: "*",
    element: <RoutePlaceholder title="Página no encontrada" description="La ruta solicitada no existe." />,
  },
]);