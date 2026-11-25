import { useEffect } from "react";

export default function Modal({ open, title, onClose, children, className = "" }) {
  useEffect(() => {
    if (!open) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose?.();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/50 p-md"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose?.();
      }}
    >
      <section
        aria-labelledby="modal-title"
        aria-modal="true"
        className={`w-full max-w-lg rounded-xl bg-surface-container-lowest p-lg shadow-2xl ${className}`}
        role="dialog"
      >
        <div className="mb-md flex items-start justify-between gap-md">
          <h2 className="font-headline-md text-headline-md text-primary" id="modal-title">
            {title}
          </h2>
          <button
            aria-label="Cerrar ventana"
            className="rounded-full p-xs text-on-surface-variant hover:bg-surface-container-high"
            onClick={onClose}
            type="button"
          >
            <span aria-hidden="true" className="material-symbols-outlined">close</span>
          </button>
        </div>
        {children}
      </section>
    </div>
  );
}
