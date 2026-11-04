import { useState } from "react";

const initialForm = {
  title: "",
  unit: "Unit 1: Fundamentals",
  explanation: "",
  pronunciationTip: "",
};

export default function LessonEditorPage() {
  const [form, setForm] = useState(initialForm);
  const [saved, setSaved] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setSaved(false);
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSaved(true);
  }

  return (
    <div className="mx-auto w-full max-w-container-max">
      <header className="mb-xl">
        <p className="mb-xs font-label-md text-secondary">Contenido</p>
        <h1 className="font-headline-xl text-primary">Editor de lecciones</h1>
        <p className="mt-sm text-on-surface-variant">
          Crea el contenido que verán tus estudiantes.
        </p>
      </header>

      <form
        className="space-y-lg rounded-xl bg-surface-container-lowest p-lg"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="font-bold text-primary" htmlFor="title">
            Título de la lección
          </label>
          <input
            className="mt-sm block w-full rounded-lg border-outline-variant"
            id="title"
            name="title"
            onChange={handleChange}
            required
            value={form.title}
          />
        </div>

        <div>
          <label className="font-bold text-primary" htmlFor="unit">
            Unidad
          </label>
          <select
            className="mt-sm block w-full rounded-lg border-outline-variant"
            id="unit"
            name="unit"
            onChange={handleChange}
            value={form.unit}
          >
            <option>Unit 1: Fundamentals</option>
            <option>Unit 2: Conversations</option>
            <option>Unit 3: People and places</option>
            <option>Unit 4: Next steps</option>
          </select>
        </div>

        <div>
          <label className="font-bold text-primary" htmlFor="explanation">
            Explicación
          </label>
          <textarea
            className="mt-sm block min-h-32 w-full rounded-lg border-outline-variant"
            id="explanation"
            name="explanation"
            onChange={handleChange}
            required
            value={form.explanation}
          />
        </div>

        <div>
          <label className="font-bold text-primary" htmlFor="pronunciationTip">
            Consejo de pronunciación
          </label>
          <textarea
            className="mt-sm block min-h-24 w-full rounded-lg border-outline-variant"
            id="pronunciationTip"
            name="pronunciationTip"
            onChange={handleChange}
            value={form.pronunciationTip}
          />
        </div>

        {saved && (
          <p className="font-bold text-secondary" role="status">
            Borrador guardado correctamente.
          </p>
        )}

        <div className="flex flex-col gap-sm sm:flex-row">
          <button
            className="rounded-lg bg-secondary px-md py-sm font-bold text-on-secondary"
            type="submit"
          >
            Guardar borrador
          </button>
          <button
            className="rounded-lg bg-surface-container-high px-md py-sm font-bold text-primary"
            onClick={() => setSaved(false)}
            type="button"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}