"use client";

import React from "react";
import { Box, Grid, Input, Select, MenuItem, Button, Typography, FormControl, InputLabel } from "@mui/material";
import { Control, Controller, UseFormRegister, useFieldArray } from "react-hook-form";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CustomHeading from "@/_components/customHeading";

type EquipmentFormProps = {
  register: UseFormRegister<DiaryFormValues>;
  control: Control<DiaryFormValues>;
  data: any;
};

type EquipmentSelecterProps = {
  control: Control<DiaryFormValues>;
  propName: keyof DiaryFormValues;
  label: string;
  data: any;
};

type equipmentItem = {
  itemData: any;
  propName: keyof DiaryFormValues;
  label: string;
};

export const EquipmentForm: React.FC<EquipmentFormProps> = ({ register, control, data }) => {
  const equipmentItemList: equipmentItem[] = [
    {
      itemData: data,
      propName: "bottleId",
      label: "Bottle",
    },
    {
      itemData: data,
      propName: "bowlId",
      label: "Bowl",
    },
    {
      itemData: data,
      propName: "hmsId",
      label: "Heat Management",
    },
    {
      itemData: data,
      propName: "charcoalId",
      label: "Charcoal",
    },
  ];

  const { fields, append, remove } = useFieldArray({
    control,
    name: "flavor",
  });

  return (
    <>
      <Box mb={3}>
        <Box mb={2}>
          <CustomHeading>Equipment</CustomHeading>
        </Box>

        <Box display="flex" flexDirection="column" gap={1}>
          {equipmentItemList &&
            equipmentItemList.map((v, i) => (
              <EquipmentSelecter
                key={i}
                control={control}
                data={v.itemData}
                propName={v.propName}
                label={v.label}
              ></EquipmentSelecter>
            ))}
        </Box>

        <Box display="flex" alignItems="center">
          <Typography>Climate :</Typography>
          <Input
            type="number"
            {...register("temperature")}
            inputProps={{
              style: { textAlign: "center" },
            }}
            sx={{
              width: "50px",
            }}
          />
          <Typography>℃,</Typography>

          <Input
            type="number"
            {...register("humidity")}
            inputProps={{
              style: { textAlign: "center" },
            }}
            sx={{
              width: "50px",
            }}
          />
          <Typography>%</Typography>
        </Box>
      </Box>

      <Box mb={2}>
        <CustomHeading>Flavor</CustomHeading>
      </Box>
      <Grid container spacing={1} alignItems="center" mb={1}>
        <Grid item xs={4} textAlign="center">
          <Typography>Brand</Typography>
        </Grid>
        <Grid item xs={4} textAlign="center">
          <Typography>Taste</Typography>
        </Grid>
      </Grid>

      {fields.map((field, index) => {
        const isFirstField = index === 0;
        return (
          <Grid container spacing={1} alignItems="center" key={field.id} mb={1}>
            <Grid item xs={4}>
              <Select key={field.id} {...register(`flavor.${index}.brandId`)} fullWidth size="small">
                {data.map((v: any, i: any) => (
                  <MenuItem key={i} value={v.id}>
                    {v.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Select key={field.id} {...register(`flavor.${index}.tasteId`)} fullWidth size="small">
                {data.map((v: any, i: any) => (
                  <MenuItem key={i} value={v.id}>
                    {v.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={2}>
              <Box display="flex">
                <Input
                  type="number"
                  {...register(`flavor.${index}.amount`)}
                  inputProps={{
                    style: { textAlign: "center" },
                  }}
                />
                <Typography>g</Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Button
                onClick={() => (isFirstField ? append({ brandId: 0, tasteId: 0, amount: undefined }) : remove(index))}
              >
                {isFirstField ? <AddCircleOutlineIcon /> : <RemoveCircleOutlineIcon color="error" />}
              </Button>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};

const EquipmentSelecter: React.FC<EquipmentSelecterProps> = ({ control, propName, label, data }) => (
  <FormControl sx={{ width: "200px" }} size="small">
    <InputLabel id={label}>{label}</InputLabel>
    <Controller
      name={propName}
      control={control}
      render={({ field }) => (
        <Select {...field} labelId={label} label={label} onChange={(e) => field.onChange(e.target.value)}>
          {data.map((v: any) => (
            <MenuItem key={v.id} value={v.id}>
              {v.name}
            </MenuItem>
          ))}
        </Select>
      )}
    />
  </FormControl>
);
