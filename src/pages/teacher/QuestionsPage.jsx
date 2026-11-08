import { useEffect, useMemo, useState } from "react";
import ConfirmModal from "../../components/content/ConfirmModal.jsx";
import QuestionCard from "../../components/content/QuestionCard.jsx";
import QuestionForm from "../../components/content/QuestionForm.jsx";
import Toast from "../../components/ui/Toast.jsx";
import {
  initialQuestions,
  questionLessons,
} from "../../data/questions.js";

function readQuestionBank() {
  try {
    const savedQuestions = localStorage.getItem(
      "linguastep-question-bank"
    );

    return savedQuestions
      ? JSON.parse(savedQuestions)
      : initialQuestions;
  } catch {
    return initialQuestions;
  }
}

export default function QuestionsPage() {
  const [questions, setQuestions] = useState(readQuestionBank);
  const [lessonId, setLessonId] = useState(questionLessons[0].id);
  const [search, setSearch] = useState("");
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [questionToDelete, setQuestionToDelete] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem(
      "linguastep-question-bank",
      JSON.stringify(questions)
    );
  }, [questions]);

  const lessonQuestions = useMemo(
    () =>
      questions
        .filter((question) => question.lessonId === lessonId)
        .filter((question) =>
          question.prompt
            .toLowerCase()
            .includes(search.trim().toLowerCase())
        ),
    [questions, lessonId, search]
  );

  function saveQuestion(questionData) {
    if (editingQuestion) {
      setQuestions((current) =>
        current.map((question) =>
          question.id === editingQuestion.id
            ? { ...question, ...questionData }
            : question
        )
      );

      setToast({
        message: "Pregunta actualizada correctamente.",
        variant: "success",
      });
    } else {
      setQuestions((current) => [
        ...current,
        {
          ...questionData,
          id: `question-${Date.now()}`,
          lessonId,
        },
      ]);

      setToast({
        message: "Pregunta creada correctamente.",
        variant: "success",
      });
    }

    setEditingQuestion(null);
  }

  function confirmDelete() {
    if (!questionToDelete) return;

    setQuestions((current) =>
      current.filter(
        (question) => question.id !== questionToDelete.id
      )
    );

    setToast({
      message: "Pregunta eliminada correctamente.",
      variant: "success",
    });

    setQuestionToDelete(null);

    if (editingQuestion?.id === questionToDelete.id) {
      setEditingQuestion(null);
    }
  }

  return (
    <div className="mx-auto w-full max-w-container-max space-y-xl">
      <header className="flex flex-col items-start justify-between gap-md md:flex-row md:items-end">
        <div>
          <h1 className="font-headline-xl text-headline-xl text-primary">
            Gestión de preguntas
          </h1>

          <p className="mt-xs font-body-md text-body-md text-on-surface-variant">
            Crea y organiza preguntas de práctica para las lecciones.
          </p>
        </div>

        <label
          className="w-full font-label-md text-label-md text-on-surface md:w-72"
          htmlFor="question-lesson-context"
        >
          Lección

          <select
            className="brand-input mt-xs w-full rounded-lg border bg-surface-container-lowest py-sm pl-md pr-xl font-body-md text-body-md text-on-surface"
            id="question-lesson-context"
            onChange={(event) => {
              setLessonId(event.target.value);
              setEditingQuestion(null);
            }}
            value={lessonId}
          >
            {questionLessons.map((lesson) => (
              <option key={lesson.id} value={lesson.id}>
                {lesson.label}
              </option>
            ))}
          </select>
        </label>
      </header>

      {toast && (
        <Toast
          message={toast.message}
          onClose={() => setToast(null)}
          variant={toast.variant}
        />
      )}

      <div className="grid grid-cols-1 items-start gap-md xl:grid-cols-12 xl:gap-lg">
        <div className="xl:col-span-5">
          <QuestionForm
            editingQuestion={editingQuestion}
            key={editingQuestion?.id ?? "new-question"}
            onCancelEdit={() => setEditingQuestion(null)}
            onSave={saveQuestion}
          />
        </div>

        <section
          aria-label="Preguntas existentes"
          className="space-y-sm xl:col-span-7"
        >
          <div className="flex flex-col items-stretch justify-between gap-sm rounded-lg border border-surface-container-highest bg-surface-container-lowest p-sm shadow-sm sm:flex-row sm:items-center">
            <label
              className="relative block w-full max-w-sm"
              htmlFor="question-search"
            >
              <span
                aria-hidden="true"
                className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant"
              >
                search
              </span>

              <input
                className="w-full rounded-lg border-0 bg-transparent py-sm pl-xl pr-md font-body-md text-body-md text-on-surface focus:ring-1 focus:ring-secondary"
                id="question-search"
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Buscar preguntas..."
                type="search"
                value={search}
              />
            </label>

            <span className="px-md font-label-md text-label-md text-on-surface-variant">
              {lessonQuestions.length} preguntas
            </span>
          </div>

          {lessonQuestions.length ? (
            lessonQuestions.map((question, index) => (
              <QuestionCard
                index={index}
                key={question.id}
                onDelete={() => setQuestionToDelete(question)}
                onEdit={() => setEditingQuestion(question)}
                question={question}
              />
            ))
          ) : (
            <div className="rounded-xl border border-dashed border-outline-variant bg-surface-container-lowest p-lg text-center font-body-md text-body-md text-on-surface-variant">
              No hay preguntas para mostrar. Crea una nueva o cambia la
              búsqueda.
            </div>
          )}
        </section>
      </div>

      <ConfirmModal
        itemName={questionToDelete?.prompt}
        onCancel={() => setQuestionToDelete(null)}
        onConfirm={confirmDelete}
        open={Boolean(questionToDelete)}
      />
    </div>
  );
}