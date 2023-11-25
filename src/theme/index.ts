import { Theme, createTheme } from "@mui/material/styles";

const background = "#292929";
const purple = "#B6A2D1";
const gray = "#cecece";
const green = "#23BFBB";

const theme = createTheme({
  palette: {
    primary: {
      main: purple,
    },
    secondary: {
      main: green,
    },
    background: {
      // default: background,
      // default: "#0d1210",
      default: "#0e1412",
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
          backgroundColor: background,
        },
      },
    },
  },
});

// export const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//     border: 0,
//     borderRadius: 3,
//     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//     color: "white",
//     height: 48,
//     padding: "0 30px",
//   },
// }));

export default theme;
