import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    // primary: {
    //   main: "#B6A2D1",
    // },
    // secondary: {
    // main: "#19857b",
    // },
    background: {
      default: "#292929",
    },
    text: {
      primary: "#B6A2D1",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: "#B6A2D1",
          textDecoration: "none",
        },
      },
    },
  },
});

export default theme;
