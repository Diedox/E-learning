import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary px-md py-xl text-on-primary md:px-lg">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary via-primary to-primary opacity-10"
      />
      <div className="relative z-10 mx-auto grid max-w-container-max grid-cols-1 items-center gap-xl md:grid-cols-2">
        <div className="space-y-lg">
          <h1 className="font-headline-xl text-headline-xl font-bold tracking-tight text-surface-container-lowest md:text-[56px] md:leading-[64px]">
            Aprende inglés
            <br />
            desde cero
          </h1>
          <p className="max-w-md font-body-lg text-body-lg text-primary-fixed-dim">
            Da el primer paso hacia la fluidez con lecciones estructuradas, accesibles y diseñadas para
            principiantes absolutos. Tu viaje comienza aquí.
          </p>
          <div className="pt-sm">
            <Link
              className="inline-flex items-center justify-center rounded-xl bg-secondary px-lg py-md font-label-md text-label-md font-bold text-on-secondary shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              to="/login"
            >
              Comenzar curso
            </Link>
          </div>
        </div>
        <div className="relative h-[300px] w-full overflow-hidden rounded-2xl shadow-2xl md:h-[400px]">
          <img
            alt="Estudiante aprendiendo inglés"
            className="absolute inset-0 h-full w-full object-cover"
            src="/assets/img/login-hero.webp"
          />
        </div>
      </div>
    </section>
  );
}
