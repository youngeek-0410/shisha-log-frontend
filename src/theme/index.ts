import { createTheme } from "@mui/material/styles";

const black = "#292929";
const purple = "#B6A2D1";
const gray = "#cecece";

const theme = createTheme({
  palette: {
    primary: {
      main: purple,
    },
    // secondary: {
    // main: "#19857b",
    // },
    background: {
      default: black,
    },
    text: {
      primary: purple,
      secondary: gray,
      disabled: gray,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: purple,
          textDecoration: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            color: gray,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: purple,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: black,
        },
      },
    },
  },
});

export default theme;
