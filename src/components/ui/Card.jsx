export default function Card({ as: Component = "section", className = "", children, ...props }) {
  return (
    <Component
      className={`rounded-xl border border-surface-container bg-surface-container-lowest shadow-[0px_4px_20px_rgba(18,48,74,0.05)] ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
