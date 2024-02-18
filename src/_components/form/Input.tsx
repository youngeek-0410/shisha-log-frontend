import { Input as RHFInput, InputProps } from "@mui/material";
import { InputHTMLAttributes, Ref, forwardRef } from "react";
import { Controller, FieldPath, FieldValues, UseControllerProps } from "react-hook-form";

const WrapInput = (props: InputProps, ref: Ref<HTMLInputElement>) => {
  return <RHFInput ref={ref} {...props} />;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(WrapInput);

type ControlInputProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = UseControllerProps<
  TFieldValues,
  TName
>;

const WrapControlledInput = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>(
  {
    name,
    control,
    ...rest
  }: Omit<InputHTMLAttributes<HTMLInputElement>, "ref"> & ControlInputProps<TFieldValues, TName>,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => {
        return <input ref={ref} onChange={(e) => onChange(e)} {...rest} />;
      }}
    />
  );
};

export const ControlledInput = forwardRef<
  HTMLInputElement,
  Omit<InputHTMLAttributes<HTMLInputElement>, "ref"> & ControlInputProps<any, any>
>(WrapControlledInput) as <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>(
  p: Omit<InputProps, "ref"> & ControlInputProps<TFieldValues, TName> & { ref?: Ref<HTMLInputElement> }
) => JSX.Element;
