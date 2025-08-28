export default defineAppConfig({
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    colors: {
      primary: "primary",
      neutral: "neutral",
    },
    button: {
      defaultVariants: {
        // Set default button color to neutral
        // color: 'neutral'
      },
    },
    notifications: {
      position: "top-0 bottom-[unset]",
    },
  },
});
