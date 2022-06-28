import { gray, grayDark } from "@radix-ui/colors";
import { createGlobalTheme } from "@vanilla-extract/css";

export const tokens = createGlobalTheme(":root", {
  font: {
    sans: "Inter, sans-serif",
  },
  color: {
    gray: {
      light: {
        ...gray,
      },
      dark: {
        ...grayDark,
      },
    },
  },
  radius: {
    sm: "0.125rem",
    md: "0.25rem",
    full: "9999px",
  },
});
