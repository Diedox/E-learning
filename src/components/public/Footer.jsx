const legalLinks = [
  { href: "#", label: "Privacidad" },
  { href: "#", label: "Términos" },
];

const SUPPORT_EMAIL = "soporte@linguastep.com";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full bg-primary">
      <div className="mx-auto flex w-full max-w-container-max flex-col items-center justify-between gap-md px-md py-xl md:flex-row md:px-lg">
        <span className="font-headline-md text-headline-md font-bold text-secondary-fixed-dim">LinguaStep A1</span>
        <nav aria-label="Enlaces legales" className="flex flex-wrap justify-center gap-md">
          {legalLinks.map((link) => (
            <a
              className="font-body-md text-body-md text-primary-fixed-dim transition-colors hover:text-secondary-fixed"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
          <a
            className="font-body-md text-body-md text-primary-fixed-dim transition-colors hover:text-secondary-fixed"
            href={`mailto:${SUPPORT_EMAIL}`}
          >
            {SUPPORT_EMAIL}
          </a>
        </nav>
        <p className="text-center font-body-md text-sm text-primary-fixed-dim md:text-right">
          © {currentYear} LinguaStep A1
        </p>
      </div>
    </footer>
  );
}
