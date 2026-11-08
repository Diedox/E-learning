export default function ToggleSwitch({ id, checked, onChange, label, description }) {
  return (
    <div className="flex items-center justify-between gap-md">
      <div>
        <label
          className="font-label-md text-label-md text-on-surface"
          htmlFor={id}
        >
          {label}
        </label>

        {description && (
          <p className="mt-1 text-sm text-on-surface-variant">
            {description}
          </p>
        )}
      </div>

      <button
        aria-checked={checked}
        aria-label={label}
        className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ${
          checked
            ? "bg-secondary"
            : "bg-surface-container-highest"
        }`}
        id={id}
        onClick={() => onChange(!checked)}
        role="switch"
        type="button"
      >
        <span
          className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
