import { createGlobalTheme } from "@vanilla-extract/css";

const defaultColor = "#888888 !default";

const borderRadiusLarge = "0.25rem !default";

const v = createGlobalTheme(":root", {
  font: {
    family: "'Montserrat', 'Helvetica Neue',  Arial, sansserif !default",
    size: {
      paragraph: "1.2em !default",
      navbar: "1em !default",
      mini: "0.7142em !default",
      small: "0.8571em !default",
      base: "14px !default",
      large: "1em !default",
      largeNavbar: "20px !default",
      blockquote: "1.1em !default",
    },
    weight: {
      light: "300 !default",
      normal: "400 !default",
      semi: "600 !default",
      bold: "700 !default",
    },
    lineHeight: {
      general: "1.5 !default",
      navLink: "1.625rem !default",
      btnIcon: "2.4em !default",
      default: "1.35em !default",
      lg: "54px !default",
    },
  },
  color: {
    defaultColor: defaultColor,
    defaultStatesColor: `lighten(${defaultColor}, 6%) !default`,
    defaultColorOpacity: "rgba(182, 182, 182, .6) !default",
  },
  bgColor: {
    white: "#FFFFFF !default",
    orange: "#e95e38 !default",
    smoke: "#F5F5F5 !default",
    black: "rgba(30,30,30,.97) !default",
    transparent: "transparent !default",
    darkBackground: "#555555 !default",
  },
  border: {
    none: "0 !default",
    default: `1px solid !default`,
    thin: "1px !default",
    thick: "2px !default",
    radiusExtraSmall: `0.125rem!default`,
    radiusSmall: `0.1875rem !default`,
    radiusLarge: borderRadiusLarge,
    radiusExtreme: `0.875rem!default`,
  },
  padding: {
    btnVertical: `11px !default`,
    btnHorizontal: `22px !default`,

    largeVertical: `15px !default`,
    largeHorizontal: `48px !default`,

    smallVertical: `5px !default`,
    smallHorizontal: `15px !default`,
  },
});

export default v;
