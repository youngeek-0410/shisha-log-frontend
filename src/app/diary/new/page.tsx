"use client";

import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";
import { UseFormRegister, useForm, Controller, Control, useFieldArray } from "react-hook-form";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CustomHeading from "@/component/customHeading";

// 開発用データ
const testData = [
  {
    id: 0,
    name: "Option1",
  },
  {
    id: 1,
    name: "Option2",
  },
];

const steps = ["equipment", "process", "evaluation"];

type FormValues = {
  title: string;
  pipeId: number;
  bowlId: number;
  hmsId: number;
  charcoalId: number;
  temperature: number;
  humidity: number;
  flavor: Flavor[];
  process: string[];
  eval: string;
};

type Flavor = {
  id: number;
  taste: string;
  brand: string;
  amount: number | undefined;
};

type FormProps = {
  register: UseFormRegister<FormValues>;
  control: Control<FormValues>;
};

const changeFormComponent = (
  activeStep: number,
  register: UseFormRegister<FormValues>,
  control: Control<FormValues>
) => {
  switch (activeStep) {
    case 0:
      return <EquipmentForm register={register} control={control} />;
    case 1:
      return <ProcessForm register={register} control={control} />;
    case 2:
      return <Evaluation register={register} control={control} />;
  }
};

const NewDiary: NextPage = () => {
  const { register, handleSubmit, reset, control } = useForm<FormValues>({
    defaultValues: { flavor: [{ brand: "", taste: "" }] },
  });
  const onSubmit = (d: FormValues) => {
    alert(JSON.stringify(d));
    reset();
    handleReset();
  };

  const [activeStep, setActiveStep] = useState<number>(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box m={3}>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ marginBottom: 2 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Divider light />
      <form onSubmit={handleSubmit(onSubmit)}>
        {activeStep === steps.length ? (
          <div>
            <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button type="submit">Submit</Button>
            </Box>
          </div>
        ) : (
          <div>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            {changeFormComponent(activeStep, register, control)}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext}>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
            </Box>
          </div>
        )}
      </form>
    </Box>
  );
};

export default NewDiary;

const EquipmentForm = ({ register, control }: FormProps) => {
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
        <Box sx={{ marginBottom: 1 }}>
          <Input {...register("title")} placeholder="Title" />
        </Box>

        <CustomizedSelecter control={control} data={testData} propName="pipeId" label="Pipe"></CustomizedSelecter>
        <CustomizedSelecter control={control} data={testData} propName="bowlId" label="Bowl"></CustomizedSelecter>
        <CustomizedSelecter
          control={control}
          data={testData}
          propName="hmsId"
          label="Heat Management"
        ></CustomizedSelecter>
        <CustomizedSelecter
          control={control}
          data={testData}
          propName="charcoalId"
          label="Charcoal"
        ></CustomizedSelecter>

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

      <Box>
        <Box mb={2}>
          <CustomHeading>Flavor</CustomHeading>
        </Box>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={4} textAlign="center">
            <Typography>Brand</Typography>
          </Grid>
          <Grid item xs={4} textAlign="center">
            <Typography>Taste</Typography>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
        </Grid>

        {fields.map((field, index) => {
          const isFirstField = index === 0;
          return (
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={4}>
                <Select {...field} {...register(`flavor.${index}.brand`)} fullWidth>
                  {testData.map((v: any, i: any) => (
                    <MenuItem key={i} value={v.id}>
                      {v.name}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={4}>
                <Select {...field} {...register(`flavor.${index}.taste`)} fullWidth>
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
      </Box>
    </>
  );
};

const ProcessForm = ({ register }: FormProps) => {
  return <Input {...register("process")} />;
};

const Evaluation = ({ register }: FormProps) => {
  return <Input {...register("eval")} />;
};

// データ構造が決まったら型直す
const CustomizedSelecter = ({
  control,
  propName,
  label,
  data,
}: {
  control: Control<FormValues>;
  propName: "pipeId" | "bowlId" | "hmsId" | "charcoalId";
  label: string;
  data: any;
}) => {
  return (
    <FormControl sx={{ width: "200px" }}>
      <InputLabel id={label}>{label}</InputLabel>
      <Controller
        name={propName}
        control={control}
        render={({ field }) => (
          <Select {...field} labelId={label} label={label} onChange={(e) => field.onChange(e.target.value)}>
            {data.map((v: any, i: any) => (
              <MenuItem key={i} value={v.id}>
                {v.name}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};
