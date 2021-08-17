import { style, styleVariants } from "@vanilla-extract/css";
import  v  from "../theme.css";

/**
 * TODO: .navbar .navbar-nav > a.btn
 */
export const btn = style({
  borderWidth: v.border.thick,
  fontWeight: v.font.weight.normal,
  fontSize: v.font.size.small,
  lineHeight: v.font.lineHeight.default,
  margin: "10px 1px",
  border: "none",
  borderRadius: v.border.radiusSmall,
  padding: `${v.padding.btnVertical} ${v.padding.btnHorizontal}`,
  cursor: "pointer",
  backgroundColor: v.color.defaultColor,
});
