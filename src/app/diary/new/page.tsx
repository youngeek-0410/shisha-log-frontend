"use client";

import { Box, Button, Divider, Input, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";
import { UseFormRegister, useForm } from "react-hook-form";

type FormProps = {
  register: UseFormRegister<FormValues>;
};

type FormValues = {
  title: string;
  process: string[];
  evaluation: string;
};

const steps = ["equipment", "process", "evaluation"];

const changeFormComponent = (activeStep: number, register: UseFormRegister<FormValues>) => {
  switch (activeStep) {
    case 0:
      return <EquipmentForm register={register} />;
    case 1:
      return <ProcessForm register={register} />;
    case 2:
      return <Evaluation register={register} />;
  }
};

const NewDiary: NextPage = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
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
            {changeFormComponent(activeStep, register)}

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

const EquipmentForm = ({ register }: FormProps) => {
  return <Input {...register("title")} />;
};

const ProcessForm = ({ register }: FormProps) => {
  return <Input {...register("process")} />;
};

const Evaluation = ({ register }: FormProps) => {
  return <Input {...register("evaluation")} />;
};
