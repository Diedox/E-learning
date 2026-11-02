import { useState } from "react";
import Button from "../ui/Button.jsx";
import FormInput from "../ui/FormInput.jsx";

const MIN_PASSWORD_LENGTH = 8;

const copyByMode = {
  login: {
    title: "Bienvenido de nuevo",
    description: "Por favor, ingresa tus datos para continuar.",
    submitLabel: "Ingresar",
  },
  register: {
    title: "Crear cuenta",
    description: "Comienza tu viaje de aprendizaje hoy mismo.",
    submitLabel: "Registrarse",
  },
};

function validate(mode, values) {
  const errors = {};

  if (mode === "register") {
    if (!values.fullName?.trim()) {
      errors.fullName = "Ingresa tu nombre completo.";
    }
    if (values.password.length < MIN_PASSWORD_LENGTH) {
      errors.password = `La contraseña debe tener al menos ${MIN_PASSWORD_LENGTH} caracteres.`;
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Las contraseñas no coinciden.";
    }
  }

  return errors;
}

export default function AuthForm({ mode = "login", onSubmit }) {
  const [errors, setErrors] = useState({});
  const isRegister = mode === "register";
  const copy = copyByMode[mode] ?? copyByMode.login;

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());
    const validationErrors = validate(mode, values);

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    onSubmit?.(values);
  }

  return (
    <div className="mx-auto w-full max-w-sm">
      <h2 className="mb-sm font-headline-md text-headline-md text-primary">{copy.title}</h2>
      <p className="mb-lg font-body-md text-body-md text-on-surface-variant">{copy.description}</p>

      <form className="space-y-md" onSubmit={handleSubmit}>
        {isRegister && (
          <FormInput
            autoComplete="name"
            error={errors.fullName}
            id={`${mode}-full-name`}
            label="Nombre completo"
            name="fullName"
            placeholder="Tu nombre"
            required
            type="text"
          />
        )}
        <FormInput
          autoComplete="email"
          id={`${mode}-email`}
          label="Correo electrónico"
          name="email"
          placeholder="ejemplo@correo.com"
          required
          type="email"
        />
        <div>
          <FormInput
            autoComplete={isRegister ? "new-password" : "current-password"}
            error={errors.password}
            id={`${mode}-password`}
            label="Contraseña"
            name="password"
            placeholder={isRegister ? `Mínimo ${MIN_PASSWORD_LENGTH} caracteres` : "••••••••"}
            required
            type="password"
          />
          {!isRegister && (
            <a className="mt-xs inline-block font-label-md text-label-md text-secondary hover:underline" href="#">
              ¿Olvidaste tu contraseña?
            </a>
          )}
        </div>
        {isRegister && (
          <FormInput
            autoComplete="new-password"
            error={errors.confirmPassword}
            id={`${mode}-confirm-password`}
            label="Confirmar contraseña"
            name="confirmPassword"
            placeholder="Repite la contraseña"
            required
            type="password"
          />
        )}

        <Button className="w-full" type="submit">
          {copy.submitLabel}
          {!isRegister && (
            <span aria-hidden="true" className="material-symbols-outlined text-sm">arrow_forward</span>
          )}
        </Button>

        {isRegister && (
          <p className="text-center font-body-md text-sm text-on-surface-variant">
            Al registrarte, aceptas nuestros{" "}
            <a className="text-secondary hover:underline" href="#">Términos</a> y{" "}
            <a className="text-secondary hover:underline" href="#">Privacidad</a>.
          </p>
        )}
      </form>
    </div>
  );
}
