import { Alert, Snackbar } from "@mui/material";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  type: "error" | "success" | "info" | "warning";
};

export const Toast = ({ isOpen, onClose, message, type }: Props) => {
  return (
    <Snackbar
      open={isOpen}
      onClose={onClose}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={onClose} severity={type} variant="filled" sx={{ width: "80%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
