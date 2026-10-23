import { Link, Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-surface">
      <header className="sticky top-0 z-40 w-full bg-surface shadow-sm">
        <nav aria-label="Navegación pública" className="mx-auto flex w-full max-w-container-max items-center justify-between gap-md px-md py-sm md:px-lg">
          <Link className="font-headline-md text-headline-md font-bold text-primary" to="/">
            LinguaStep A1
          </Link>
          <div className="flex items-center gap-md">
            <Link className="font-label-md text-label-md font-bold text-primary hover:text-secondary" to="/login">
              Iniciar sesión
            </Link>
            <Link className="rounded-lg bg-secondary px-md py-sm font-label-md text-label-md font-bold text-on-secondary hover:opacity-90" to="/login">
              Comenzar
            </Link>
          </div>
        </nav>
      </header>
      <main className="w-full flex-1 px-md py-lg md:px-lg">
        <Outlet />
      </main>
      <footer className="mt-auto bg-primary px-md py-lg text-on-primary md:px-lg">
        <div className="mx-auto flex max-w-container-max flex-col justify-between gap-sm md:flex-row md:items-center">
          <span className="font-headline-md text-headline-md font-bold">LinguaStep A1</span>
          <span className="font-body-md text-sm text-primary-fixed-dim">© 2026 LinguaStep A1</span>
        </div>
      </footer>
    </div>
  );
}