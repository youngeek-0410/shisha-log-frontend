import { Control, UseFormRegister } from "react-hook-form";
import { FormValues } from "./Form";
import { Input } from "@mui/material";

type ProcessFormProps = {
  register: UseFormRegister<FormValues>;
  control: Control<FormValues>;
};

export const ProcessForm: React.FC<ProcessFormProps> = ({ register, control }) => <Input {...register("process")} />;
