import { Controller, FieldErrorsImpl, FieldPath, FieldValues, UseControllerProps } from "react-hook-form";
import { Select, FormControl, InputLabel, Typography } from "@mui/material";
import { ReactNode } from "react";
import { ErrorMessage } from "./ErrorMessage";

// 汎用的なやつ作る

type ControlSelectProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = UseControllerProps<
  TFieldValues,
  TName
>;

type EquipmentSelecterProps = {
  label: string;
  errors: FieldErrorsImpl;
  children: ReactNode;
};

export const EquipmentSelecter = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  control,
  name,
  label,
  children,
  errors,
}: EquipmentSelecterProps & ControlSelectProps<TFieldValues, TName>) => (
  <FormControl sx={{ width: "200px" }} size="small">
    <InputLabel id={label}>{label}</InputLabel>
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <Select {...field} labelId={label} label={label}>
            {children}
          </Select>
        );
      }}
    />
    <ErrorMessage name={name} errors={errors} />
  </FormControl>
);
