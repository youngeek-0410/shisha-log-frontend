import { Input as RHFInput, InputProps as ChakraInput } from "@mui/material";
import { InputHTMLAttributes, Ref, forwardRef } from "react";
import { Controller, FieldErrorsImpl, FieldPath, FieldValues, UseControllerProps } from "react-hook-form";
import { ErrorMessage } from "./ErrorMessage";

type InputProps = { errors?: FieldErrorsImpl; disableErrorMessage?: boolean } & ChakraInput;

const WrapInput = (props: InputProps, ref: Ref<HTMLInputElement>) => {
  console.log(props.errors, props.disableErrorMessage);
  return (
    <>
      <RHFInput ref={ref} {...props} />
      {!props.disableErrorMessage && <ErrorMessage name={props.name ?? ""} errors={props.errors} />}
    </>
  );
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
  p: Omit<ChakraInput, "ref"> & ControlInputProps<TFieldValues, TName> & { ref?: Ref<HTMLInputElement> }
) => JSX.Element;
