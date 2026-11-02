import { useState } from "react";
import HeroSection from "../../components/public/HeroSection.jsx";
import CourseUnitCard from "../../components/public/CourseUnitCard.jsx";
import Button from "../../components/ui/Button.jsx";
import FormInput from "../../components/ui/FormInput.jsx";
import Toast from "../../components/ui/Toast.jsx";

const courseUnits = [
  {
    title: "Greetings and Introductions",
    description: "Aprende a saludar, presentarte y tener tus primeras conversaciones básicas con confianza.",
    icon: "waving_hand",
    wide: true,
  },
  {
    title: "Classroom Objects",
    description: "Aprende números, colores y vocabulario esencial del entorno.",
    icon: "school",
    iconClassName: "bg-primary-fixed text-on-primary-fixed",
  },
  {
    title: "Family & Info",
    description: "Describe a tu familia y comparte información personal clave.",
    icon: "family_restroom",
    iconClassName: "bg-tertiary-fixed text-on-tertiary-fixed",
  },
  {
    title: "Daily Routines",
    description: "Habla sobre tu día a día y expresa hábitos en presente simple.",
    icon: "routine",
    iconClassName: "bg-surface-variant text-on-surface-variant",
    image: "/assets/img/daily-routine.webp",
    wide: true,
  },
];

const methodologyItems = [
  {
    title: "Audio Nativo",
    description: "Escucha la pronunciación correcta.",
    icon: "volume_up",
    iconClassName: "bg-primary text-on-primary",
  },
  {
    title: "Lecciones en Video",
    description: "Contexto visual para cada concepto.",
    icon: "play_circle",
    iconClassName: "bg-secondary text-on-secondary",
  },
  {
    title: "Ejercicios Interactivos",
    description: "Practica lo que aprendes al instante.",
    icon: "edit_note",
    iconClassName: "bg-tertiary text-on-tertiary",
  },
];

export default function LandingPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    setSent(true);
  }

  return (
    <>
      <HeroSection />

      <section className="mx-auto max-w-container-max scroll-mt-xl px-md py-xl md:px-lg" id="programa">
        <div className="mb-xl text-center">
          <h2 className="mb-sm font-headline-lg text-headline-lg text-primary">Explora el Programa</h2>
          <p className="mx-auto max-w-2xl font-body-md text-body-md text-on-surface-variant">
            Bloques de conocimiento diseñados para reducir la carga cognitiva y asegurar el progreso continuo.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-md md:grid-cols-3">
          {courseUnits.map((unit) => (
            <CourseUnitCard key={unit.title} unit={unit} />
          ))}
        </div>
      </section>

      <section className="scroll-mt-xl bg-surface-container-low px-md py-xl md:px-lg" id="metodologia">
        <div className="mx-auto max-w-container-max">
          <div className="mb-xl text-center">
            <h2 className="mb-sm font-headline-lg text-headline-lg text-primary">Aprende con todos los sentidos</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Visual, auditivo e interactivo.</p>
          </div>
          <div className="grid grid-cols-1 gap-md md:grid-cols-3">
            {methodologyItems.map((item) => (
              <article
                className="flex items-center gap-md rounded-xl border border-outline-variant bg-surface-container-lowest p-md shadow-sm"
                key={item.title}
              >
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-lg ${item.iconClassName}`}>
                  <span aria-hidden="true" className="material-symbols-outlined text-[32px]">
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-label-md text-label-md text-primary">{item.title}</h3>
                  <p className="font-body-md text-sm text-on-surface-variant">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-container-max scroll-mt-xl px-md py-xl md:px-lg" id="contacto">
        <div className="card-shadow flex flex-col overflow-hidden rounded-2xl border border-surface-container bg-surface-container-lowest md:flex-row">
          <div className="flex flex-col justify-center bg-primary p-lg text-on-primary md:w-2/5">
            <h2 className="mb-md font-headline-lg text-headline-lg">¿Dudas? Contáctanos</h2>
            <p className="mb-lg font-body-md text-body-md text-primary-fixed-dim">
              Estamos aquí para ayudarte a dar tu primer paso. Escríbenos y nuestro equipo te responderá en breve.
            </p>
            <a className="flex items-center gap-sm text-primary-fixed hover:underline" href="mailto:soporte@linguastep.com">
              <span aria-hidden="true" className="material-symbols-outlined text-sm">mail</span>
              <span className="font-body-md text-body-md">soporte@linguastep.com</span>
            </a>
          </div>
          <div className="p-lg md:w-3/5">
            <form className="space-y-md" onSubmit={handleSubmit}>
              <FormInput id="contact-name" label="Nombre" name="name" placeholder="Tu nombre" required type="text" />
              <FormInput
                autoComplete="email"
                id="contact-email"
                label="Correo electrónico"
                name="email"
                placeholder="tu@correo.com"
                required
                type="email"
              />
              <FormInput
                as="textarea"
                className="resize-none"
                id="contact-message"
                label="Mensaje"
                name="message"
                placeholder="¿En qué podemos ayudarte?"
                required
                rows={4}
              />
              <Button className="w-full px-lg py-md md:w-auto" type="submit">
                Enviar mensaje
              </Button>
              <Toast
                message={sent ? "¡Mensaje enviado! Te responderemos pronto." : ""}
                onClose={() => setSent(false)}
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
