
const tailwindConfig = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#001b31",
        "on-primary": "#ffffff",
        "primary-container": "#12304a",
        "on-primary-container": "#7d98b7",
        "primary-fixed": "#cfe5ff",
        "primary-fixed-dim": "#adc9ea",
        "on-primary-fixed": "#001d34",
        "on-primary-fixed-variant": "#2d4964",
        "inverse-primary": "#adc9ea",

        "secondary": "#006b5f",
        "on-secondary": "#ffffff",
        "secondary-container": "#71f8e4",
        "on-secondary-container": "#007165",
        "secondary-fixed": "#71f8e4",
        "secondary-fixed-dim": "#50dbc8",
        "on-secondary-fixed": "#00201c",
        "on-secondary-fixed-variant": "#005048",

        "tertiary": "#241700",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#3e2a00",
        "on-tertiary-container": "#c28c11",
        "tertiary-fixed": "#ffdea8",
        "tertiary-fixed-dim": "#f9bc45",
        "on-tertiary-fixed": "#271900",
        "on-tertiary-fixed-variant": "#5e4200",

        "surface": "#faf9f7",
        "surface-bright": "#faf9f7",
        "surface-dim": "#dadad8",
        "surface-variant": "#e3e2e0",
        "surface-tint": "#46617d",
        "on-surface": "#1a1c1b",
        "on-surface-variant": "#43474d",
        "inverse-surface": "#2f3130",
        "inverse-on-surface": "#f1f1ef",

        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f4f3f1",
        "surface-container": "#efeeec",
        "surface-container-high": "#e9e8e6",
        "surface-container-highest": "#e3e2e0",

        "background": "#faf9f7",
        "on-background": "#1a1c1b",

        "outline": "#73777e",
        "outline-variant": "#c3c7ce",

        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px"
      },
      spacing: {
        "container-max": "1200px",
        "sidebar-width": "280px",
        "xs": "4px",
        "base": "8px",
        "sm": "12px",
        "md": "24px",
        "lg": "40px",
        "xl": "64px",
        "2xl": "96px"
      },
      fontFamily: {
        "body-lg": ["Atkinson Hyperlegible Next", "sans-serif"],
        "body-md": ["Atkinson Hyperlegible Next", "sans-serif"],
        "label-md": ["Atkinson Hyperlegible Next", "sans-serif"],
        "headline-xl": ["Plus Jakarta Sans", "sans-serif"],
        "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
        "headline-lg-mobile": ["Plus Jakarta Sans", "sans-serif"],
        "headline-md": ["Plus Jakarta Sans", "sans-serif"]
      },
      fontSize: {
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "headline-lg-mobile": ["28px", { lineHeight: "36px", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "headline-xl": ["40px", { lineHeight: "48px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "800" }]
      }
    }
  }
};
if (typeof tailwind !== 'undefined') {
  tailwind.config = tailwindConfig;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = tailwindConfig;
}
