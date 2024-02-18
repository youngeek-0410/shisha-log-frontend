import { Controller, FieldPath, FieldValues, UseControllerProps } from "react-hook-form";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

// 汎用的なやつ作る

type ControlSelectProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = UseControllerProps<
  TFieldValues,
  TName
>;

type EquipmentSelecterProps = {
  label: string;
  data: any;
};

export const EquipmentSelecter = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  control,
  name,
  label,
  data,
}: EquipmentSelecterProps & ControlSelectProps<TFieldValues, TName>) => (
  <FormControl sx={{ width: "200px" }} size="small">
    <InputLabel id={label}>{label}</InputLabel>
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <Select {...field} labelId={label} label={label}>
            {data.map((v: any) => (
              <MenuItem key={v.id} value={v.id}>
                {v.name}
              </MenuItem>
            ))}
          </Select>
        );
      }}
    />
  </FormControl>
);
