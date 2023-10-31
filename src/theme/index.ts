import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#292929",
        // color: "#FFF9C4",
      },
      html: {
        height: "100%",
      },
    },
  },
  colors: {
    primary: "#B6A2D1",
    secondary: "#FFF9C4",
  },
});
