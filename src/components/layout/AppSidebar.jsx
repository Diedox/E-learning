import { NavLink } from "react-router-dom";

const navigationByRole = {
  student: [
    { to: "/student/dashboard", label: "Panel", icon: "dashboard" },
    { to: "/student/lesson", label: "Mis lecciones", icon: "auto_stories" },
    { to: "/student/results", label: "Resultados", icon: "quiz" },
  ],
  teacher: [
    { to: "/teacher/dashboard", label: "Panel docente", icon: "dashboard" },
    { to: "/teacher/lessons/new", label: "Editor de lecciones", icon: "edit_document" },
    { to: "/teacher/questions", label: "Preguntas", icon: "quiz" },
    { to: "/teacher/progress", label: "Progreso", icon: "monitoring" },
  ],
};

export default function AppSidebar({ role, className = "" }) {
  const navigation = navigationByRole[role] ?? [];

  return (
    <aside className={`flex w-full flex-col border-b border-outline-variant bg-surface-container-low p-md md:min-h-screen md:w-sidebar-width md:border-b-0 md:border-r ${className}`}>
      <div className="mb-lg">
        <p className="font-headline-md text-headline-md font-bold text-primary">LinguaStep A1</p>
        <p className="font-body-md text-sm text-on-surface-variant">
          {role === "teacher" ? "Portal docente" : "Portal estudiante"}
        </p>
      </div>
      <nav aria-label="Navegación principal" className="flex flex-wrap gap-xs md:flex-col">
        {navigation.map((item) => (
          <NavLink
            className={({ isActive }) =>
              `inline-flex items-center gap-sm rounded-lg px-md py-sm font-label-md text-label-md transition-colors ${isActive ? "bg-secondary-container font-bold text-on-secondary-container" : "text-on-surface-variant hover:bg-surface-container-high"}`
            }
            key={item.to}
            to={item.to}
          >
            <span aria-hidden="true" className="material-symbols-outlined">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-md md:mt-auto">
        <NavLink
          className="inline-flex items-center gap-sm rounded-lg px-md py-sm font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high"
          to="/login"
        >
          <span aria-hidden="true" className="material-symbols-outlined">logout</span>
          Cerrar sesión
        </NavLink>
      </div>
    </aside>
  );
}