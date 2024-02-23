import { FieldErrorsImpl } from "react-hook-form";
import { ErrorMessage as HFErrorMessage } from "@hookform/error-message";
import { Typography } from "@mui/material";

type Props = {
  name: string;
  errors?: FieldErrorsImpl;
};

export const ErrorMessage = ({ name, errors }: Props) => {
  return (
    <HFErrorMessage
      name={name}
      errors={errors}
      render={({ message }) => <Typography color={"red"}>{message}</Typography>}
    />
  );
};
