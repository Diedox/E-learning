import { Link } from "react-router-dom";

const sectionLinks = [
  { href: "#programa", label: "Programa" },
  { href: "#metodologia", label: "Metodología" },
  { href: "#contacto", label: "Contacto" },
];

export default function PublicNavbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-surface shadow-sm">
      <nav aria-label="Navegación pública" className="mx-auto flex w-full max-w-container-max items-center justify-between gap-md px-md py-sm md:px-lg md:py-md">
        <Link className="font-headline-md text-headline-md font-bold text-primary" to="/">
          LinguaStep A1
        </Link>
        <div className="hidden items-center gap-lg md:flex">
          {sectionLinks.map((link) => (
            <a
              className="font-body-md text-body-md font-medium text-on-surface-variant transition-colors duration-200 hover:text-secondary"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-md">
          <Link className="font-label-md text-label-md font-bold text-primary transition-colors hover:text-secondary" to="/login">
            Iniciar sesión
          </Link>
          <Link className="rounded-lg bg-secondary px-md py-sm font-label-md text-label-md font-bold text-on-secondary transition-colors hover:bg-on-secondary-container" to="/login">
            Comenzar
          </Link>
        </div>
      </nav>
    </header>
  );
}
