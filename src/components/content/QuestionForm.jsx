import { useEffect, useState } from "react";
import Button from "../ui/Button.jsx";
import FormInput from "../ui/FormInput.jsx";

const emptyForm = {
  prompt: "",
  options: ["", "", "", ""],
  correctOption: "0",
  explanation: "",
};

export default function QuestionForm({
  editingQuestion,
  onSave,
  onCancelEdit,
}) {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");
  const isEditing = Boolean(editingQuestion);

  useEffect(() => {
    setForm(
      editingQuestion
        ? {
            prompt: editingQuestion.prompt,
            options: [...editingQuestion.options],
            correctOption: String(editingQuestion.correctOption),
            explanation: editingQuestion.explanation ?? "",
          }
        : emptyForm
    );

    setError("");
  }, [editingQuestion]);

  function updateOption(index, value) {
    setForm((current) => ({
      ...current,
      options: current.options.map((option, optionIndex) =>
        optionIndex === index ? value : option
      ),
    }));
  }

  function clearForm() {
    setForm(emptyForm);
    setError("");
    onCancelEdit?.();
  }

  function submitForm(event) {
    event.preventDefault();

    if (
      !form.prompt.trim() ||
      form.options.some((option) => !option.trim())
    ) {
      setError("Escribe el enunciado y completa las cuatro opciones.");
      return;
    }

    onSave({
      ...form,
      prompt: form.prompt.trim(),
      options: form.options.map((option) => option.trim()),
      correctOption: Number(form.correctOption),
    });

    setForm(emptyForm);
    setError("");
  }

  return (
    <section className="rounded-2xl border border-surface-container-highest bg-surface-container-lowest p-lg shadow-[0px_4px_20px_rgba(18,48,74,0.05)]">
      <h2 className="mb-md flex items-center gap-sm font-headline-md text-headline-md text-primary">
        <span
          aria-hidden="true"
          className="material-symbols-outlined text-secondary"
        >
          add_circle
        </span>

        {isEditing ? "Editar pregunta" : "Nueva pregunta"}
      </h2>

      <form className="space-y-md" onSubmit={submitForm}>
        <FormInput
          as="textarea"
          className="resize-y"
          id="question-prompt"
          label="Enunciado (prompt)"
          onChange={(event) =>
            setForm((current) => ({
              ...current,
              prompt: event.target.value,
            }))
          }
          placeholder="e.g., How do you say 'Hello' in formal settings?"
          required
          rows={3}
          value={form.prompt}
        />

        <fieldset className="space-y-sm">
          <legend className="mb-sm font-label-md text-label-md text-on-surface">
            Opciones y respuesta correcta
          </legend>

          {form.options.map((option, index) => (
            <div className="flex items-center gap-sm" key={index}>
              <input
                aria-label={`Marcar opción ${String.fromCharCode(
                  65 + index
                )} como correcta`}
                checked={form.correctOption === String(index)}
                className="h-5 w-5 border-outline-variant text-secondary focus:ring-secondary"
                name="correct-option"
                onChange={() =>
                  setForm((current) => ({
                    ...current,
                    correctOption: String(index),
                  }))
                }
                type="radio"
              />

              <input
                aria-label={`Opción ${String.fromCharCode(65 + index)}`}
                className="form-input flex-1"
                onChange={(event) =>
                  updateOption(index, event.target.value)
                }
                placeholder={`Opción ${String.fromCharCode(65 + index)}`}
                required
                value={option}
              />
            </div>
          ))}
        </fieldset>

        <FormInput
          as="textarea"
          className="resize-y"
          id="question-explanation"
          label="Explicación"
          onChange={(event) =>
            setForm((current) => ({
              ...current,
              explanation: event.target.value,
            }))
          }
          placeholder="Explica por qué la respuesta es correcta..."
          rows={2}
          value={form.explanation}
        />

        {error && (
          <p className="font-body-md text-sm text-error" role="alert">
            {error}
          </p>
        )}

        <div className="flex justify-end gap-sm pt-sm">
          <Button onClick={clearForm} variant="secondary">
            Limpiar
          </Button>

          <Button type="submit">
            {isEditing ? "Guardar cambios" : "Guardar pregunta"}
          </Button>
        </div>
      </form>
    </section>
  );
}
