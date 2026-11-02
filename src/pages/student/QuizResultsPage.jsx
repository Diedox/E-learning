import { useLocation, Link, useNavigate } from "react-router-dom";
import QuizSummary from "../../components/student/QuizSummary.jsx";

export default function QuizResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state ?? {
    percentage: 85,
    correctCount: 17,
    total: 20,
  };

  return (
    <div className="mx-auto w-full max-w-container-max space-y-xl">
      <header className="text-center">
        <h1 className="font-headline-xl text-primary">¡Felicitaciones por completar la lección!</h1>
        <p className="text-on-surface-variant mt-xs">Has superado tu meta de experiencia del día.</p>
      </header>

      <QuizSummary result={result} />

      <div className="flex flex-col sm:flex-row gap-md justify-center">
        <button
          onClick={() => navigate("/student/lesson")}
          type="button"
          className="rounded-lg bg-surface-container-high px-md py-sm font-bold text-primary text-center"
        >
          Reintentar
        </button>
        <Link
          to="/student/dashboard"
          className="rounded-lg bg-secondary px-md py-sm font-bold text-on-secondary text-center"
        >
          Volver al panel
        </Link>
      </div>
    </div>
  );
}