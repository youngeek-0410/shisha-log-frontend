import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#292929",
        color: "#FFF9C4",
      },
      html: {
        height: "100%",
      },
    },
  },
});
