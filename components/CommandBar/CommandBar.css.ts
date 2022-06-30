import { themeVars } from "@/styles/theme.css";
import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const overlay = style({
  position: "fixed",
  inset: 0,
  backdropFilter: "blur(4px)",
  ":after": {
    content: "",
    position: "absolute",
    inset: 0,
    backgroundColor: themeVars.color.page,
    opacity: 0.75,
  },
});

export const dialog = style({
  width: "100%",
  maxWidth: tokens.contentWidth.standard,
  backgroundColor: themeVars.color.page,
  border: "1px solid",
  borderColor: themeVars.color.border,
  borderRadius: tokens.radius.sm,
  overflow: "hidden",
  zIndex: 1,
});

export const searchInput = style({
  padding: tokens.sizing.lg,
  width: "100%",
  borderBottom: `1px solid ${themeVars.color.border}`,
});

export const resultHeading = style({
  padding: `${tokens.sizing.md} ${tokens.sizing.lg}`,
  color: themeVars.color.foregroundHighlight,
});

export const result = style({
  padding: `${tokens.sizing.md} ${tokens.sizing.lg}`,
  display: "flex",
  alignItems: "center",
  gap: tokens.sizing.md,
  cursor: "pointer",
});

export const active = style({
  backgroundColor: themeVars.color.surfaceHover,
  color: themeVars.color.foregroundHighlight,
});