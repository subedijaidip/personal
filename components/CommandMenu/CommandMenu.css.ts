import { style, globalStyle } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

globalStyle("[cmdk-overlay]", {
  position: "fixed",
  inset: 0,
  backgroundColor: themeVars.color.overlay,
  backdropFilter: "blur(4px)",
});

globalStyle("[cmdk-input]", {
  backgroundColor: themeVars.color.page,
  border: "none",
  width: "100%",
  padding: tokens.sizing.md,
  outline: "none",
  borderBottom: "1px solid",
  borderColor: themeVars.color.border,
  borderRadius: 0,
});

globalStyle("[cmdk-list]", {
  minHeight: 300,
  backgroundColor: themeVars.color.page,
  height: "var(--cmdk-list-height)",
  maxHeight: 500,
  transition: "height 100ms ease",
  overflow: "auto",
  paddingBlock: tokens.sizing.lg,
  scrollPaddingBlock: tokens.sizing.lg,
});

globalStyle("*:not([hidden]) + [cmdk-group]", {
  marginTop: tokens.sizing.sm,
});

globalStyle("[cmdk-group-heading]", {
  marginBottom: tokens.sizing.sm,
  fontSize: tokens.fontSize.xs,
  paddingInline: tokens.sizing.md,
  color: themeVars.color.foregroundNeutral,
});

globalStyle("[cmdk-item]", {
  position: "relative",
  contentVisibility: "auto",
  cursor: "pointer",
  borderRadius: tokens.radius.sm,
  fontSize: tokens.fontSize.sm,
  padding: tokens.sizing.md,
  userSelect: "none",
});

globalStyle("[cmdk-item] + [cmdk-item]", {
  marginTop: tokens.sizing.sm,
});

globalStyle('[cmdk-item][aria-selected="true"]', {
  backgroundColor: themeVars.color.surface,
});

export const root = style({
  position: "fixed",
  inset: 0,
});
