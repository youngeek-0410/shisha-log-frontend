"use client";

// 開発用データ
const pipeData = [
  {
    id: 0,
    name: "shishabucks",
  },
  {
    id: 1,
    name: "test",
  },
];

import {
  Box,
  Button,
  Divider,
  FormControl,
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
import { UseFormRegister, useForm, Controller, Control } from "react-hook-form";

type FormProps = {
  register: UseFormRegister<FormValues>;
  control: Control<FormValues>;
};

type FormValues = {
  title: string;
  pipeId: number;
  bowlId: number;
  hmsId: number;
  process: string[];
  evaluation: string;
};

const steps = ["equipment", "process", "evaluation"];

// const changeFormComponent = (activeStep: number, register: UseFormRegister<FormValues>) => {
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
  const { register, handleSubmit, reset, control } = useForm<FormValues>();
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
  return (
    <>
      <Input {...register("title")} />
      <FormControl sx={{ width: "200px" }}>
        <InputLabel id="pipe-select-label">Pipe</InputLabel>
        {/* <Select labelId="pipe-select-label" id="pipe-select" label="Pipe">
          <MenuItem value={0}>Ten</MenuItem>
          <MenuItem value={1}>Twenty</MenuItem>
          <MenuItem value={2}>Thirty</MenuItem>
        </Select> */}
        <Controller
          name="pipeId"
          control={control}
          // defaultValue={0}
          render={({ field }) => (
            <Select
              {...field}
              labelId="pipe-select-label"
              label="Pipe"
              onChange={(e) => field.onChange(e.target.value)}
            >
              {pipeData.map((v, i) => (
                <MenuItem key={i} value={v.id}>
                  {v.name}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
    </>
  );
};

const ProcessForm = ({ register }: FormProps) => {
  return <Input {...register("process")} />;
};

const Evaluation = ({ register }: FormProps) => {
  return <Input {...register("evaluation")} />;
};
