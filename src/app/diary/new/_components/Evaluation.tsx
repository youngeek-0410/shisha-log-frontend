import { Control, UseFormRegister } from "react-hook-form";
import { Input } from "@mui/material";

type EvaluationProps = {
  register: UseFormRegister<DiaryFormValues>;
  control: Control<DiaryFormValues>;
};

export const Evaluation: React.FC<EvaluationProps> = ({ register, control }) => <Input {...register("eval")} />;
