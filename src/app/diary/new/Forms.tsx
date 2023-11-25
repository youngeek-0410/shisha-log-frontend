import React from "react";
import { Box, Grid, Input, Select, MenuItem, Button, Typography, FormControl, InputLabel } from "@mui/material";
import { Control, Controller, UseFormRegister, useFieldArray } from "react-hook-form";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CustomHeading from "@/component/customHeading";

type EquipmentFormProps = {
  register: UseFormRegister<any>;
  control: Control<any>;
  testData: any;
};

export const EquipmentForm: React.FC<EquipmentFormProps> = ({ register, control, testData }) => {
  const initialFlavor = { id: 0, taste: "", brand: "", amount: undefined };
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
        <Input {...register("title")} placeholder="Title" sx={{ marginBottom: 1 }} />

        <Box display="flex" flexDirection="column" gap={1}>
          <EquipmentSelecter control={control} data={testData} propName="pipeId" label="Pipe"></EquipmentSelecter>
          <EquipmentSelecter control={control} data={testData} propName="bowlId" label="Bowl"></EquipmentSelecter>
          <EquipmentSelecter
            control={control}
            data={testData}
            propName="hmsId"
            label="Heat Management"
          ></EquipmentSelecter>
          <EquipmentSelecter
            control={control}
            data={testData}
            propName="charcoalId"
            label="Charcoal"
          ></EquipmentSelecter>
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
          <Grid container spacing={1} alignItems="center" key={index} mb={1}>
            <Grid item xs={4}>
              <Select {...field} {...register(`flavor.${index}.brand`)} fullWidth size="small">
                {testData.map((v: any, i: any) => (
                  <MenuItem key={i} value={v.id}>
                    {v.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Select {...field} {...register(`flavor.${index}.taste`)} fullWidth size="small">
                {testData.map((v: any, i: any) => (
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
              <Button onClick={() => (isFirstField ? append(initialFlavor) : remove(index))}>
                {isFirstField ? <AddCircleOutlineIcon /> : <RemoveCircleOutlineIcon color="error" />}
              </Button>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};

type ProcessFormProps = {
  register: UseFormRegister<any>;
  control: Control<any>;
};

export const ProcessForm: React.FC<ProcessFormProps> = ({ register, control }) => <Input {...register("process")} />;

type EvaluationProps = {
  register: UseFormRegister<any>;
  control: Control<any>;
};

export const Evaluation: React.FC<EvaluationProps> = ({ register, control }) => <Input {...register("eval")} />;

type EquipmentSelecterProps = {
  control: Control<any>;
  propName: string;
  label: string;
  data: any;
};

export const EquipmentSelecter: React.FC<EquipmentSelecterProps> = ({ control, propName, label, data }) => (
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
