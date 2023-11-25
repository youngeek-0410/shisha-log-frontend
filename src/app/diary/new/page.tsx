"use client";

import React from "react";
import { NextPage } from "next";
import { Box, Button, Divider, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { EquipmentForm, Evaluation, ProcessForm } from "./Forms";

const steps = ["equipment", "process", "evaluation"];

const testData = [
  {
    id: 1,
    name: "Option1",
  },
  {
    id: 2,
    name: "Option2",
  },
];

export type Flavor = {
  // id: number;
  brandId: number;
  tasteId: number;
  amount: number | undefined;
};

export type FormValues = {
  title: string;
  pipeId: number;
  bowlId: number;
  hmsId: number;
  charcoalId: number;
  temperature: number;
  humidity: number;
  flavor: Flavor[];
  process: string;
  eval: string;
};

const NewDiary: NextPage = () => {
  const { register, handleSubmit, reset, control } = useForm<FormValues>({
    defaultValues: { flavor: [{}] },
  });
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  const handleReset = () => setActiveStep(0);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
    reset();
    handleReset();
  };

  const changeFormComponent = () => {
    switch (activeStep) {
      case 0:
        return <EquipmentForm register={register} control={control} testData={testData} />;
      case 1:
        return <ProcessForm register={register} control={control} />;
      case 2:
        return <Evaluation register={register} control={control} />;
      default:
        return null;
    }
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
            {changeFormComponent()}
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
