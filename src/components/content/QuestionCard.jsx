import Card from "../ui/Card.jsx";

export default function QuestionCard({
  question,
  index,
  onEdit,
  onDelete,
}) {
  return (
    <Card className="group border-surface-container-highest p-md transition-colors hover:border-secondary">
      <div className="flex items-start justify-between gap-md">
        <div className="min-w-0 flex-1">
          <div className="mb-xs flex items-center gap-xs">
            <span className="rounded bg-surface-container-high px-xs py-1 text-[12px] font-bold text-on-surface-variant">
              Q{index + 1}
            </span>

            <span className="text-[12px] font-bold text-secondary">
              Multiple Choice
            </span>
          </div>

          <h3 className="mb-sm font-headline-md text-[20px] leading-tight text-primary">
            {question.prompt}
          </h3>

          <ol className="grid grid-cols-1 gap-sm sm:grid-cols-2">
            {question.options.map((option, optionIndex) => {
              const isCorrect = optionIndex === question.correctOption;

              return (
                <li
                  className={`flex items-center justify-between gap-sm rounded px-sm py-xs text-sm ${
                    isCorrect
                      ? "border border-secondary bg-secondary-container/30 text-on-surface"
                      : "bg-surface-container-low text-on-surface-variant"
                  }`}
                  key={`${question.id}-${optionIndex}`}
                >
                  <span>
                    {String.fromCharCode(65 + optionIndex)}) {option}
                  </span>

                  {isCorrect && (
                    <span
                      aria-label="Respuesta correcta"
                      className="material-symbols-outlined text-sm text-secondary"
                    >
                      check_circle
                    </span>
                  )}
                </li>
              );
            })}
          </ol>

          {question.explanation && (
            <p className="mt-sm font-body-md text-sm text-on-surface-variant">
              {question.explanation}
            </p>
          )}
        </div>

        <div className="flex gap-xs">
          <button
            aria-label={`Editar pregunta: ${question.prompt}`}
            className="rounded-full bg-surface-container p-sm text-primary transition hover:bg-surface-container-high"
            onClick={onEdit}
            type="button"
          >
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-base"
            >
              edit
            </span>
          </button>

          <button
            aria-label={`Eliminar pregunta: ${question.prompt}`}
            className="rounded-full bg-error-container/40 p-sm text-error transition hover:bg-error-container"
            onClick={onDelete}
            type="button"
          >
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-base"
            >
              delete
            </span>
          </button>
        </div>
      </div>
    </Card>
  );
}
