export default function AnswerOption({ questionId, option, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center gap-sm rounded-lg border border-outline-variant p-md hover:bg-surface-container-low">
      <input
        checked={checked}
        className="text-secondary focus:ring-secondary"
        name={questionId}
        onChange={onChange}
        type="radio"
        value={option.id}
      />
      <span className="text-on-surface">{option.label}</span>
    </label>
  );
}
