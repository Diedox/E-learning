import Card from "../ui/Card.jsx";
import FormInput from "../ui/FormInput.jsx";
import ToggleSwitch from "./ToggleSwitch.jsx";

const units = [
  { id: "1", name: "Unit 1: Hello" },
  { id: "2", name: "Unit 2: Family" },
  { id: "3", name: "Unit 3: Work" },
];

export default function LessonForm({
  lesson,
  onChange,
  errors,
  onPublishChange,
}) {
  function updateField(event) {
    const { name, value } = event.target;
    onChange((current) => ({ ...current, [name]: value }));
  }

  return (
    <div className="grid grid-cols-1 items-start gap-md lg:grid-cols-3">
      <div className="space-y-md lg:col-span-2">
        <Card className="space-y-md border-surface-container-high p-md md:p-lg">
          <h2 className="border-b border-surface-container pb-sm font-headline-md text-headline-md text-primary">
            Información básica
          </h2>

          <FormInput
            error={errors.title}
            id="lesson-title"
            label="Título *"
            name="title"
            onChange={updateField}
            placeholder="e.g. Greetings and Introductions"
            required
            value={lesson.title}
          />

          <FormInput
            as="textarea"
            className="resize-none"
            id="lesson-summary"
            label="Resumen"
            name="summary"
            onChange={updateField}
            placeholder="Brief overview of the lesson objectives..."
            rows={2}
            value={lesson.summary}
          />

          <FormInput
            as="textarea"
            className="resize-y"
            error={errors.explanation}
            id="lesson-explanation"
            label="Explicación *"
            name="explanation"
            onChange={updateField}
            placeholder="Detailed grammatical or vocabulary explanation..."
            required
            rows={6}
            value={lesson.explanation}
          />
        </Card>

        <Card className="space-y-md border-surface-container-high p-md md:p-lg">
          <h2 className="border-b border-surface-container pb-sm font-headline-md text-headline-md text-primary">
            Contenido y multimedia
          </h2>

          <FormInput
            as="textarea"
            className="resize-none"
            id="lesson-example"
            label="Ejemplo"
            name="example"
            onChange={updateField}
            placeholder="Provide a dialogue or sentence example..."
            rows={3}
            value={lesson.example}
          />

          <div className="grid grid-cols-1 gap-md md:grid-cols-2">
            <FormInput
              as="select"
              id="lesson-media-type"
              label="Tipo de multimedia"
              name="mediaType"
              onChange={updateField}
              value={lesson.mediaType}
            >
              <option value="">Selecciona el tipo</option>
              <option value="audio">Audio</option>
              <option value="video">Video</option>
              <option value="image">Imagen</option>
            </FormInput>

            <FormInput
              id="lesson-media-url"
              label="URL"
              name="mediaUrl"
              onChange={updateField}
              placeholder="https://..."
              type="url"
              value={lesson.mediaUrl}
            />
          </div>
        </Card>
      </div>

      <div className="space-y-md">
        <Card className="space-y-md border-surface-container-high p-md md:p-lg">
          <h2 className="border-b border-surface-container pb-sm font-headline-md text-headline-md text-primary">
            Organización
          </h2>

          <FormInput
            as="select"
            error={errors.unitId}
            id="lesson-unit"
            label="Unidad *"
            name="unitId"
            onChange={updateField}
            required
            value={lesson.unitId}
          >
            <option value="">Selecciona una unidad</option>
            {units.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.name}
              </option>
            ))}
          </FormInput>

          <FormInput
            error={errors.order}
            id="lesson-order"
            label="Posición (orden) *"
            min="1"
            name="order"
            onChange={updateField}
            placeholder="1"
            required
            type="number"
            value={lesson.order}
          />
        </Card>

        <Card className="border-surface-container-high p-md md:p-lg">
          <h2 className="mb-md border-b border-surface-container pb-sm font-headline-md text-headline-md text-primary">
            Visibilidad
          </h2>

          <ToggleSwitch
            checked={lesson.published}
            description="Make visible to students"
            id="lesson-published"
            label="Estado publicado"
            onChange={onPublishChange}
          />
        </Card>

        <aside className="hidden rounded-xl bg-primary-fixed p-md text-center lg:block">
          <span
            aria-hidden="true"
            className="material-symbols-outlined mb-sm text-[48px] text-primary"
          >
            edit_document
          </span>
          <p className="font-label-md text-label-md text-primary">
            Keep lessons concise. Aim for a 5-minute read time.
          </p>
        </aside>
      </div>
    </div>
  );
}
