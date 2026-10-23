const variants = {
  primary: "bg-secondary text-on-secondary hover:bg-on-secondary-container",
  secondary: "border border-secondary text-secondary hover:bg-surface-container-low",
  neutral: "bg-surface-container-high text-on-surface hover:bg-surface-container-highest",
  danger: "bg-error text-on-error hover:opacity-90",
};

export default function Button({
  children,
  className = "",
  variant = "primary",
  type = "button",
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-xs rounded-lg px-md py-sm font-label-md text-label-md font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
