
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  colors: {
    brand: {
      50: "#e3f2ff",
      100: "#b3d4ff",
      200: "#81ff96ff",
      300: "#4f97ff",
      400: "#1d79ff",
      500: "#e60036ff",
      600: "#b4008dff",
      700: "#003482",
      800: "#002252",
      900: "#000f21",
    },
  },
});

export default theme;
