module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: {
      uniformColorPallete: true,
      extendedFontSizeScale: true,
      applyComplexClasses: true,
  },
  purge: {
      // needs to be set if we want to purge all unused
      // @tailwind/typography styles
      mode: "all",
      content: ["./src/**/*.svelte", "./src/**/*.html"],
  },
  theme: {
    extend: {},
    typography: {
        default: {
            css: {
                color: "#333",
            }
        }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
}
