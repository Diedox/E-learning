import Button from "../ui/Button.jsx";
import Modal from "../ui/Modal.jsx";

export default function ConfirmModal({
  open,
  onCancel,
  onConfirm,
  itemName,
}) {
  return (
    <Modal
      className="max-w-md"
      onClose={onCancel}
      open={open}
      title="Eliminar pregunta"
    >
      <div className="mb-md flex items-center gap-sm text-error">
        <span
          aria-hidden="true"
          className="material-symbols-outlined text-3xl"
        >
          warning
        </span>

        <p className="font-label-md text-label-md">
          Confirma la eliminación
        </p>
      </div>

      <p className="mb-lg font-body-md text-body-md text-on-surface-variant">
        ¿Seguro que deseas eliminar
        {itemName ? ` “${itemName}”` : " esta pregunta"}? Esta acción no se
        puede deshacer.
      </p>

      <div className="flex justify-end gap-sm">
        <Button onClick={onCancel} variant="secondary">
          Cancelar
        </Button>

        <Button onClick={onConfirm} variant="danger">
          Sí, eliminar
        </Button>
      </div>
    </Modal>
  );
}
