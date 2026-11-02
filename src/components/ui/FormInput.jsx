export default function FormInput({
  id,
  label,
  error,
  className = "",
  as: Component = "input",
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="form-label font-label-md text-label-md" htmlFor={id}>
          {label}
        </label>
      )}
      <Component
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={Boolean(error)}
        className={`form-input ${className}`}
        id={id}
        {...props}
      />
      {error && (
        <p className="mt-xs font-body-md text-sm text-error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}
