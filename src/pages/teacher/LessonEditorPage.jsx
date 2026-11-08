import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LessonForm from "../../components/content/LessonForm.jsx";
import Button from "../../components/ui/Button.jsx";
import Card from "../../components/ui/Card.jsx";
import Toast from "../../components/ui/Toast.jsx";

const emptyLesson = {
  title: "",
  summary: "",
  explanation: "",
  example: "",
  mediaType: "",
  mediaUrl: "",
  unitId: "",
  order: "1",
  published: false,
};

export default function LessonEditorPage() {
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(emptyLesson);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  function validateLesson() {
    const nextErrors = {};

    if (!lesson.title.trim()) {
      nextErrors.title = "El título es obligatorio.";
    }

    if (!lesson.explanation.trim()) {
      nextErrors.explanation = "La explicación es obligatoria.";
    }

    if (!lesson.unitId) {
      nextErrors.unitId = "Selecciona una unidad.";
    }

    if (
      !Number.isInteger(Number(lesson.order)) ||
      Number(lesson.order) < 1
    ) {
      nextErrors.order = "El orden debe ser un número mayor que cero.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function saveLesson(publish = false) {
    if (!validateLesson()) {
      setToast({
        message: "Revisa los campos obligatorios antes de guardar.",
        variant: "error",
      });
      return;
    }

    const savedLesson = {
      ...lesson,
      published: publish || lesson.published,
      order: Number(lesson.order),
    };

    const savedLessons = JSON.parse(
      localStorage.getItem("linguastep-lessons") ?? "[]"
    );

    localStorage.setItem(
      "linguastep-lessons",
      JSON.stringify([...savedLessons, savedLesson])
    );

    setLesson(savedLesson);

    setToast({
      message: publish
        ? "Lección publicada correctamente."
        : "Borrador guardado correctamente.",
      variant: "success",
    });
  }

  function cancelEditing() {
    setLesson(emptyLesson);
    setErrors({});
    setToast(null);
    navigate("/teacher/dashboard");
  }

  return (
    <div className="mx-auto w-full max-w-container-max">
      <header className="mb-lg flex flex-col items-start justify-between gap-md md:flex-row md:items-center">
        <div>
          <Link
            className="mb-xs inline-flex items-center gap-xs font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
            to="/teacher/dashboard"
          >
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-lg"
            >
              arrow_back
            </span>
            Volver al panel
          </Link>

          <h1 className="font-headline-lg text-headline-lg text-primary">
            Editor de lecciones
          </h1>

          <p className="mt-xs font-body-md text-body-md text-on-surface-variant">
            Crea o modifica el contenido de una lección.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-sm">
          <Button onClick={cancelEditing} variant="secondary">
            Cancelar
          </Button>

          <Button onClick={() => saveLesson(false)} variant="neutral">
            Guardar borrador
          </Button>

          <Button onClick={() => saveLesson(true)}>
            Publicar
          </Button>
        </div>
      </header>

      {toast && (
        <Toast
          className="mb-md"
          message={toast.message}
          onClose={() => setToast(null)}
          variant={toast.variant}
        />
      )}

      <LessonForm
        errors={errors}
        lesson={lesson}
        onChange={setLesson}
        onPublishChange={(published) =>
          setLesson((current) => ({
            ...current,
            published,
          }))
        }
      />

      <Card className="mt-md border-outline-variant bg-surface-container-low p-md">
        <p className="font-body-md text-sm text-on-surface-variant">
          El editor guarda el contenido localmente en este prototipo; no se
          envía a un servidor.
        </p>
      </Card>
    </div>
  );
}