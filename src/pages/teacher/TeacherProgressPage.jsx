import { studentProgress } from "../../data/teacher.js";

export default function TeacherProgressPage() {
  return (
    <div className="mx-auto w-full max-w-container-max space-y-xl">
      <header>
        <p className="mb-xs font-label-md text-secondary">Seguimiento</p>
        <h1 className="font-headline-xl text-primary">
          Progreso de estudiantes
        </h1>
        <p className="mt-sm text-on-surface-variant">
          Consulta el avance y rendimiento de cada estudiante.
        </p>
      </header>

      <section className="overflow-x-auto rounded-xl bg-surface-container-lowest">
        <table className="w-full min-w-[720px] text-left">
          <thead className="border-b border-outline-variant">
            <tr>
              <th className="px-md py-sm font-bold text-primary" scope="col">
                Estudiante
              </th>
              <th className="px-md py-sm font-bold text-primary" scope="col">
                Lecciones
              </th>
              <th className="px-md py-sm font-bold text-primary" scope="col">
                Promedio
              </th>
              <th className="px-md py-sm font-bold text-primary" scope="col">
                Última actividad
              </th>
            </tr>
          </thead>
          <tbody>
            {studentProgress.map((student) => (
              <tr
                className="border-b border-outline-variant last:border-b-0"
                key={student.id}
              >
                <td className="px-md py-md font-bold text-primary">
                  {student.name}
                </td>
                <td className="px-md py-md text-on-surface-variant">
                  {student.completed}/{student.total}
                </td>
                <td className="px-md py-md font-bold text-secondary">
                  {student.average}
                </td>
                <td className="px-md py-md text-on-surface-variant">
                  {student.lastActivity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}