import { Typography, styled } from "@mui/material";

type HeadingProps = {
  children: React.ReactNode;
};

const CustomHeading: React.FC<HeadingProps> = ({ children }) => {
  return <CustomTypography sx={{ display: "inline" }}>{children}</CustomTypography>;
};

const CustomTypography = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  position: "relative",
  marginBottom: 2,
  "&:before": {
    content: '""',
    position: "absolute",
    bottom: "-7px",
    width: "100%",
    height: "1px",
    backgroundColor: theme.palette.primary.main,
  },
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: "-7px",
    right: "-10px",
    width: "30%",
    height: "1px",
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default CustomHeading;
