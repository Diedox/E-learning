import { Link } from "react-router-dom";

export default function LessonCard({ unit }) {
  return (
    <article className="flex h-full flex-col rounded-xl bg-surface-container-lowest p-md">
      <div className="mb-md flex items-start justify-between gap-sm">
        <h3 className="font-headline-md text-primary">{unit.title}</h3>
        <span className="shrink-0 text-sm font-bold text-secondary">
          {unit.progress}%
        </span>
      </div>
      <p className="mb-lg text-on-surface-variant">{unit.description}</p>
      <div
        aria-label={`${unit.progress}% completed`}
        className="mb-lg h-2 overflow-hidden rounded-full bg-surface-container-highest"
        role="progressbar"
        aria-valuemax="100"
        aria-valuemin="0"
        aria-valuenow={unit.progress}
      >
        <div
          className="h-full rounded-full bg-secondary"
          style={{ width: `${unit.progress}%` }}
        />
      </div>
      <p className="mb-md text-sm text-on-surface-variant">
        {unit.lessonCount} lessons
      </p>
      <Link
        className="mt-auto rounded-lg bg-secondary px-md py-sm text-center font-bold text-on-secondary"
        to="/student/lesson"
      >
        {unit.progress > 0 ? "Continue" : "Start lesson"}
      </Link>
    </article>
  );
}
