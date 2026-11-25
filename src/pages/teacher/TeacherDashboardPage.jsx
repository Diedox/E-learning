import { Link } from "react-router-dom";
import {
  teacherLessons,
  teacherProfile,
  teacherStats,
} from "../../data/teacher.js";

export default function TeacherDashboardPage() {
  return (
    <div className="mx-auto w-full max-w-container-max space-y-xl">
      <header className="flex flex-col gap-md sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-xs font-label-md text-secondary">Portal docente</p>
          <h1 className="font-headline-xl text-primary">
            Hola, {teacherProfile.name}
          </h1>
          <p className="mt-sm text-on-surface-variant">
            Administra tus lecciones y revisa el progreso de tus estudiantes.
          </p>
        </div>

        <Link
          className="rounded-lg bg-secondary px-md py-sm text-center font-bold text-on-secondary"
          to="/teacher/lessons/new"
        >
          Crear lección
        </Link>
      </header>

      <section
        aria-label="Resumen del panel"
        className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-4"
      >
        {teacherStats.map((stat) => (
          <article
            className="rounded-xl bg-surface-container-lowest p-md"
            key={stat.id}
          >
            <p className="text-sm text-on-surface-variant">{stat.label}</p>
            <p className="mt-sm font-headline-xl text-primary">{stat.value}</p>
          </article>
        ))}
      </section>

      <section>
        <div className="mb-md flex items-center justify-between gap-md">
          <h2 className="font-headline-md text-primary">Mis lecciones</h2>
          <Link
            className="font-bold text-secondary"
            to="/teacher/lessons/new"
          >
            Nueva lección
          </Link>
        </div>

        <div className="overflow-x-auto rounded-xl bg-surface-container-lowest">
          <table className="w-full min-w-[640px] text-left">
            <thead className="border-b border-outline-variant">
              <tr>
                <th className="px-md py-sm font-bold text-primary" scope="col">
                  Lección
                </th>
                <th className="px-md py-sm font-bold text-primary" scope="col">
                  Estado
                </th>
                <th className="px-md py-sm font-bold text-primary" scope="col">
                  Estudiantes
                </th>
                <th className="px-md py-sm font-bold text-primary" scope="col">
                  Finalización
                </th>
              </tr>
            </thead>
            <tbody>
              {teacherLessons.map((lesson) => (
                <tr
                  className="border-b border-outline-variant last:border-b-0"
                  key={lesson.id}
                >
                  <td className="px-md py-sm">
                    <p className="font-bold text-primary">{lesson.title}</p>
                    <p className="text-sm text-on-surface-variant">
                      {lesson.unit}
                    </p>
                  </td>
                  <td className="px-md py-sm">
                    <span
                      className={
                        lesson.status === "Published"
                          ? "font-bold text-secondary"
                          : "font-bold text-on-surface-variant"
                      }
                    >
                      {lesson.status === "Published" ? "Publicada" : "Borrador"}
                    </span>
                  </td>
                  <td className="px-md py-sm text-on-surface-variant">
                    {lesson.students}
                  </td>
                  <td className="px-md py-sm font-bold text-primary">
                    {lesson.completion}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}