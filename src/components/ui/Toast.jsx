const variants = {
  success: "border-[#34a853] bg-[#e6f4ea] text-[#137333]",
  error: "border-error bg-error-container text-on-error-container",
  info: "border-primary-fixed-dim bg-primary-fixed text-on-primary-fixed",
};

export default function Toast({ message, variant = "success", onClose, className = "" }) {
  if (!message) return null;

  return (
    <div
      className={`flex items-center justify-between gap-md rounded-lg border px-md py-sm shadow-sm ${variants[variant]} ${className}`}
      role={variant === "error" ? "alert" : "status"}
    >
      <p className="font-label-md text-label-md">{message}</p>
      {onClose && (
        <button aria-label="Cerrar notificación" onClick={onClose} type="button">
          <span aria-hidden="true" className="material-symbols-outlined">close</span>
        </button>
      )}
    </div>
  );
}
