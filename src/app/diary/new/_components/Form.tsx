"use client";

import React, { useState } from "react";
import { Box, Button, Divider, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { SubmitHandler, FormProvider } from "react-hook-form";
import { EquipmentForm } from "./EquipmentForm";
import { ProcessForm } from "./ProccessForm";
import { Evaluation } from "./Evaluation";
import { CreateDiaryInput, useCreateDiaryForm } from "@/domains/forms/create-diary";
import { useRouter } from "next/navigation";
import { GetEquimentsByUserIdResponse, useCreateDiaryByUserId } from "@/api/create-diary-form/equipment-form";
import { generateDateString } from "@/utils/date";

type FormProps = {
  data: GetEquimentsByUserIdResponse;
  userId: string;
};

const steps = ["equipment", "process", "evaluation"];

const Form: React.FC<FormProps> = ({ data, userId }) => {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const router = useRouter();

  const handleNext = () => {
    if (activeStep == 0) {
      const bottleId = getValues("bottle");
      const bowlId = getValues("bowl");
      const heatManagementId = getValues("heat_management");
      const charcoalId = getValues("charcoal");
      const flavorList = getValues("diary_flavor_list");
      const temp = getValues("climate_temp");
      const humidity = getValues("climate_humidity");

      const isCompleteFlavorList = flavorList.every((flavor) => flavor.id && flavor.amount);
      if (bottleId && bowlId && heatManagementId && charcoalId && isCompleteFlavorList && temp && humidity) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        clearErrors("diary_flavor_list");
      } else {
        if (!bottleId) {
          setError("bottle", { message: "Bottleは入力必須です" }, { shouldFocus: true });
        }
        if (!bowlId) {
          setError("bowl", { message: "Bowlは入力必須です" }, { shouldFocus: true });
        }
        if (!heatManagementId) {
          setError("heat_management", { message: "Heat Managementは入力必須です" }, { shouldFocus: true });
        }
        if (!charcoalId) {
          setError("charcoal", { message: "Charcoalは入力必須です" }, { shouldFocus: true });
        }
        if (!isCompleteFlavorList) {
          setError("diary_flavor_list", { message: "Flavorを完全に入力してください" });
        }
        if (!temp) {
          setError("climate_temp", { message: "温度を入力してください" });
        }
        if (!humidity) {
          setError("climate_humidity", { message: "湿度を入力してください" });
        }
      }
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  //const handleReset = () => setActiveStep(0);

  const methods = useCreateDiaryForm();
  const { getValues, setError, clearErrors } = methods;
  const [fileName, setFileName] = useState("");

  const createDiary = useCreateDiaryByUserId();
  const onSubmit: SubmitHandler<CreateDiaryInput> = (data) => {
    createDiary.mutate(
      {
        user_id: userId,
        equipments: {
          bottle_id: data.bottle,
          bowl_id: data.bowl,
          heat_management_id: data.heat_management,
          charcoal_id: data.charcoal,
          climate: {
            temperature: data.climate_temp,
            humidity: data.climate_humidity,
          },
        },
        diary_flavor_list: data.diary_flavor_list,
        image: data.image,
        sucking_text: data.sucking_text,
        review: {
          creator_evaluation: data.creator_evaluation,
          taste_evaluation: data.taste_evaluation,
          creator_good_points: data.creator_good_points,
          creator_bad_points: data.creator_bad_points,
          taste_comments: data.taste_comments,
        },
        create_date: generateDateString(),
      },
      {
        onSuccess: () => {
          router.push("/diary");
        },
        onError: () => {},
      }
    );
  };

  const changeFormComponent = () => {
    switch (activeStep) {
      case 0:
        return <EquipmentForm data={data} fileName={fileName} setFileName={setFileName} />;
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
