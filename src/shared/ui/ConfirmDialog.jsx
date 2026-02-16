import { Modal } from './Modal';
import { Button } from './Button';

export function ConfirmDialog({ isOpen, title, message, onConfirm, onCancel, isLoading }) {
  return (
    <Modal isOpen={isOpen} title={title} onClose={onCancel}>
      <p className="text-sm text-slate-600">{message}</p>
      <div className="mt-4 flex justify-end gap-3">
        <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button variant="danger" onClick={onConfirm} isLoading={isLoading}>Delete</Button>
      </div>
    </Modal>
  );
}
