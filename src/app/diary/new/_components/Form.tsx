"use client";

import React, { useState } from "react";
import { Box, Button, Divider, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { EquipmentForm } from "./EquipmentForm";
import { ProcessForm } from "./ProccessForm";
import { Evaluation } from "./Evaluation";
import { CreateDiaryInput, useCreateDiaryForm } from "@/domains/forms/create-diary";
import { useRouter } from "next/navigation";

type FormProps = {
  data: any;
};

const steps = ["equipment", "process", "evaluation"];

const Form: React.FC<FormProps> = ({ data }) => {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const router = useRouter();

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  //const handleReset = () => setActiveStep(0);

  const onSubmit: SubmitHandler<CreateDiaryInput> = (data) => {
    alert(JSON.stringify(data));
    router.push("/diary");
  };

  const methods = useCreateDiaryForm();
  const [flavors, setFlavors] = useState<Flavor[]>([{ brandName: "", id: "", amount: undefined }]);
  const [fileName, setFileName] = useState("");

  const changeFormComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <EquipmentForm
            data={data}
            flavors={flavors}
            setFlavors={setFlavors}
            fileName={fileName}
            setFileName={setFileName}
          />
        );
      case 1:
        return <ProcessForm />;
      case 2:
        return <Evaluation />;
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

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {activeStep === steps.length ? (
            <Box>
              <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                  Back
                </Button>
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
      </FormProvider>
    </Box>
  );
};

export default Form;
