import Card from "../ui/Card.jsx";

export default function CourseUnitCard({ unit }) {
  const iconClassName = unit.iconClassName ?? "bg-secondary-container text-on-secondary-container";

  return (
    <Card
      as="article"
      className={`tactile-card relative flex min-h-[240px] flex-col justify-center overflow-hidden p-lg md:h-[280px] ${unit.wide ? "md:col-span-2" : ""}`}
    >
      <div className={`relative z-10 ${unit.image ? "sm:w-1/2 sm:pr-lg" : ""}`}>
        <span className={`mb-md inline-flex h-12 w-12 items-center justify-center rounded-full ${iconClassName}`}>
          <span aria-hidden="true" className="material-symbols-outlined fill">
            {unit.icon}
          </span>
        </span>
        <h3 className="mb-xs font-headline-md text-headline-md text-primary">{unit.title}</h3>
        <p className="max-w-sm font-body-md text-body-md text-on-surface-variant">{unit.description}</p>
      </div>
      {unit.image && (
        <div className="absolute inset-y-0 right-0 hidden w-1/2 sm:block">
          <img alt="" className="h-full w-full object-cover" src={unit.image} />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest to-transparent" />
        </div>
      )}
    </Card>
  );
}
