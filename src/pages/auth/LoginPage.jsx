import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../../components/auth/AuthForm.jsx";
import { getDashboardPath } from "../../data/auth.js";

const tabs = [
  { id: "login", label: "Iniciar sesión" },
  { id: "register", label: "Registrarse" },
];

function BrandLink({ className = "" }) {
  return (
    <Link className={`flex items-center gap-xs text-primary ${className}`} to="/">
      <span aria-hidden="true" className="material-symbols-outlined text-headline-md">school</span>
      <span className="font-headline-md text-headline-md font-bold">LinguaStep A1</span>
    </Link>
  );
}

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("login");
  const navigate = useNavigate();

  function handleSubmit() {
    navigate(getDashboardPath());
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface p-md text-on-surface md:p-lg">
      <div className="card-shadow flex w-full max-w-container-max flex-col overflow-hidden rounded-xl bg-surface-container-lowest md:min-h-[700px] md:flex-row">
        <div className="relative hidden flex-col items-center justify-center bg-surface-container-low p-xl md:flex md:w-1/2">
          <BrandLink className="absolute left-md top-md" />
          <div className="relative mb-lg flex aspect-square w-full max-w-[400px] items-center justify-center overflow-hidden rounded-full bg-secondary-container/20">
            <img
              alt="Estudiante practicando con tarjetas de vocabulario"
              className="h-full w-full object-cover p-md"
              src="/assets/img/home-hero.webp"
            />
          </div>
          <div className="max-w-md text-center">
            <h1 className="mb-md font-headline-lg text-headline-lg text-primary">Bridge the gap to fluency.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Aprende inglés paso a paso, con lecciones pensadas para principiantes absolutos. Empieza hoy.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col justify-center bg-surface-container-lowest p-lg md:w-1/2 md:p-xl">
          <BrandLink className="mb-xl justify-center md:hidden" />

          <div
            aria-label="Acceso a la cuenta"
            className="mx-auto mb-xl flex w-full max-w-sm border-b border-outline-variant"
            role="tablist"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  aria-controls="auth-panel"
                  aria-selected={isActive}
                  className={`-mb-px flex-1 border-b-2 py-sm font-label-md text-label-md transition-colors ${isActive ? "border-secondary font-bold text-secondary" : "border-transparent text-on-surface-variant hover:text-secondary"}`}
                  id={`tab-${tab.id}`}
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  role="tab"
                  type="button"
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div aria-labelledby={`tab-${activeTab}`} id="auth-panel" role="tabpanel">
            <AuthForm key={activeTab} mode={activeTab} onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
