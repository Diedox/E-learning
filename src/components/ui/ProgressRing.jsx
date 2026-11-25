export default function ProgressRing({ value = 0, size = 72, strokeWidth = 7, label = "Progreso" }) {
  const normalizedValue = Math.min(100, Math.max(0, Number(value) || 0));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (normalizedValue / 100) * circumference;

  return (
    <div
      aria-label={`${label}: ${normalizedValue}%`}
      className="relative inline-flex shrink-0 items-center justify-center"
      role="img"
      style={{ width: size, height: size }}
    >
      <svg aria-hidden="true" className="h-full w-full -rotate-90" viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="text-surface-container-high"
          cx={size / 2}
          cy={size / 2}
          fill="none"
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
        />
        <circle
          className="text-secondary"
          cx={size / 2}
          cy={size / 2}
          fill="none"
          r={radius}
          stroke="currentColor"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
        />
      </svg>
      <span aria-hidden="true" className="absolute font-label-md text-label-md text-primary">
        {normalizedValue}%
      </span>
    </div>
  );
}
