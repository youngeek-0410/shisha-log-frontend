import { Control, UseFormRegister } from "react-hook-form";
import { FormValues } from "./page";
import { Input } from "@mui/material";

type EvaluationProps = {
  register: UseFormRegister<FormValues>;
  control: Control<FormValues>;
};

export const Evaluation: React.FC<EvaluationProps> = ({ register, control }) => <Input {...register("eval")} />;
