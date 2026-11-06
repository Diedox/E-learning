import { useState } from "react";
import { initialQuestions } from "../../data/teacher.js";

export default function QuestionsPage() {
  const [questions, setQuestions] = useState(initialQuestions);
  const [prompt, setPrompt] = useState("");
  const [lesson, setLesson] = useState("Numbers 1-10");

  function addQuestion(event) {
    event.preventDefault();

    if (!prompt.trim()) {
      return;
    }

    setQuestions((currentQuestions) => [
      ...currentQuestions,
      {
        id: `question-${currentQuestions.length + 1}`,
        prompt: prompt.trim(),
        lesson,
        type: "Multiple choice",
      },
    ]);
    setPrompt("");
  }

  return (
    <div className="mx-auto w-full max-w-container-max space-y-xl">
      <header>
        <p className="mb-xs font-label-md text-secondary">Contenido</p>
        <h1 className="font-headline-xl text-primary">
          Gestión de preguntas
        </h1>
        <p className="mt-sm text-on-surface-variant">
          Administra las preguntas disponibles para las evaluaciones.
        </p>
      </header>

      <form
        className="space-y-md rounded-xl bg-surface-container-lowest p-lg"
        onSubmit={addQuestion}
      >
        <h2 className="font-headline-md text-primary">Agregar pregunta</h2>

        <div>
          <label className="font-bold text-primary" htmlFor="question-prompt">
            Pregunta
          </label>
          <textarea
            className="mt-sm block min-h-24 w-full rounded-lg border-outline-variant"
            id="question-prompt"
            onChange={(event) => setPrompt(event.target.value)}
            required
            value={prompt}
          />
        </div>

        <div>
          <label className="font-bold text-primary" htmlFor="question-lesson">
            Lección
          </label>
          <select
            className="mt-sm block w-full rounded-lg border-outline-variant"
            id="question-lesson"
            onChange={(event) => setLesson(event.target.value)}
            value={lesson}
          >
            <option>Numbers 1-10</option>
            <option>Greetings</option>
            <option>Introducing yourself</option>
          </select>
        </div>

        <button
          className="rounded-lg bg-secondary px-md py-sm font-bold text-on-secondary"
          type="submit"
        >
          Agregar pregunta
        </button>
      </form>

      <section>
        <h2 className="mb-md font-headline-md text-primary">
          Preguntas existentes
        </h2>

        <div className="space-y-sm">
          {questions.map((question, index) => (
            <article
              className="rounded-xl bg-surface-container-lowest p-md"
              key={question.id}
            >
              <div className="flex flex-col gap-sm sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-bold text-primary">
                    {index + 1}. {question.prompt}
                  </p>
                  <p className="mt-xs text-sm text-on-surface-variant">
                    {question.lesson}
                  </p>
                </div>
                <span className="text-sm font-bold text-secondary">
                  {question.type}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}