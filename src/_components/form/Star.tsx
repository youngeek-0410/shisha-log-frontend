import { Box, Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Controller, FieldPath, FieldValues, UseControllerProps } from "react-hook-form";

type Props = {
  starNum: number;
  onChange: (number: number) => void;
  length: number;
  size?: "medium" | "small" | "inherit" | "large";
};

type StarProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = UseControllerProps<
  TFieldValues,
  TName
>;

export const Star = ({ starNum, onChange, length, size = "medium" }: Props) => {
  return (
    <Stack direction={"row"} alignItems={"center"}>
      {Array.from("1".repeat(length)).map((_, index) => (
        <Box key={"start" + index} pt={"4px"}>
          {starNum >= index + 1 ? (
            <div
              onClick={() => {
                onChange(index);
              }}
            >
              <StarIcon fontSize={size} />
            </div>
          ) : (
            <div
              onClick={() => {
                onChange(index + 1);
              }}
            >
              <StarBorderIcon fontSize={size} />
            </div>
          )}
        </Box>
      ))}
    </Stack>
  );
};

export const ControlledStar = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  control,
  name,
  defaultValue,
  ...rest
}: Props & StarProps<TFieldValues, TName>) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { value } }) => {
        return <Star {...rest} starNum={value} />;
      }}
    />
  );
};
