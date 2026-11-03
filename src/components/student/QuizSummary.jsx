export default function QuizSummary({ result }) {
  return (
    <section className="rounded-xl bg-surface-container-lowest p-lg">
      <h2 className="font-headline-md text-primary">
        Resumen
      </h2>

      <p className="mt-md text-on-surface-variant">
        {result.correctCount}/{result.total} correctas
      </p>

      <div className="mt-lg text-5xl font-bold text-secondary">
        {result.percentage}%
      </div>
    </section>
  );
}