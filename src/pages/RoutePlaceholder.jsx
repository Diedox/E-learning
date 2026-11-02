export default function RoutePlaceholder({ title, description }) {
  return (
    <section className="mx-auto w-full max-w-container-max rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-sm">
      <p className="mb-xs font-label-md text-label-md uppercase tracking-wide text-secondary">
        LinguaStep A1
      </p>
      <h1 className="font-headline-lg text-headline-lg text-primary">{title}</h1>
      <p className="mt-sm max-w-2xl font-body-md text-body-md text-on-surface-variant">
        {description}
      </p>
      <p className="mt-lg rounded-lg bg-surface-container-low p-md font-body-md text-body-md text-on-surface-variant">
        Esta pantalla se migrará en la rama de su módulo.
      </p>
    </section>
  );
}