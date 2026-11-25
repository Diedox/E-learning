import { Link } from "react-router-dom";
import LessonCard from "../../components/student/LessonCard.jsx";
import ActivityTable from "../../components/student/ActivityTable.jsx";
import {
  recentActivity,
  studentProfile,
  studentUnits,
} from "../../data/student.js";

export default function StudentDashboardPage() {
  return (
    <div className="mx-auto w-full max-w-container-max">
      <header className="mb-xl flex flex-col gap-md md:flex-row md:justify-between">
        <div>
          <h1 className="font-headline-xl text-primary">
            Hello, {studentProfile.name}
          </h1>
          <p className="text-on-surface-variant">
            Ready to continue your English journey?
          </p>
        </div>

        <Link
          className="rounded-lg bg-secondary px-md py-sm font-bold text-on-secondary"
          to="/student/lesson"
        >
          Continuar aprendiendo
        </Link>
      </header>

      <section className="mb-xl rounded-xl bg-surface-container-lowest p-lg">
        <h2 className="font-headline-md text-primary">
          Progreso del curso
        </h2>

        <div
          aria-valuemax="100"
          aria-valuemin="0"
          aria-valuenow={studentProfile.courseProgress}
          className="mt-md h-4 overflow-hidden rounded-full bg-surface-container-highest"
          role="progressbar"
        >
          <div
            className="h-full rounded-full bg-secondary"
            style={{ width: `${studentProfile.courseProgress}%` }}
          />
        </div>
      </section>

      <section className="mb-xl">
        <h2 className="mb-md font-headline-md text-primary">
          Tus unidades
        </h2>

        <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-4">
          {studentUnits.map((unit) => (
            <LessonCard key={unit.id} unit={unit} />
          ))}
        </div>
      </section>

      <ActivityTable activities={recentActivity} />
    </div>
  );
}