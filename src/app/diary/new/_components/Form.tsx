"use client";

import React from "react";
import { Box, Button, Divider, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { EquipmentForm } from "./EquipmentForm";
import { ProcessForm } from "./ProccessForm";
import { Evaluation } from "./Evaluation";

type FormProps = {
  data: any;
};

const steps = ["equipment", "process", "evaluation"];

const Form: React.FC<FormProps> = ({ data }) => {
  const { register, handleSubmit, reset, control, watch } = useForm<DiaryFormValues>({
    defaultValues: {
      bottleId: 1,
      bowlId: 1,
      hmsId: 1,
      charcoalId: 1,
      flavor: [{}],
    },
  });
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  const handleReset = () => setActiveStep(0);

  const onSubmit: SubmitHandler<DiaryFormValues> = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
    reset();
    handleReset();
  };

  const changeFormComponent = () => {
    switch (activeStep) {
      case 0:
        return <EquipmentForm register={register} control={control} data={data} />;
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
          <Box>
            <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button type="submit">Submit</Button>
            </Box>
          </Box>
        ) : (
          <Box>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            {changeFormComponent()}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext}>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
            </Box>
          </Box>
        )}
      </form>
    </Box>
  );
};

export default Form;