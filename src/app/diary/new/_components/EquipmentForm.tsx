"use client";

import React, { useState } from "react";
import {
  Box,
  Grid,
  Input,
  Select,
  MenuItem,
  Button,
  Typography,
  FormControl,
  InputLabel,
  IconButton,
  Stack,
  TextareaAutosize,
} from "@mui/material";
import { Control, Controller, UseFormRegister, UseFormWatch, useFieldArray } from "react-hook-form";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CustomHeading from "@/_components/customHeading";

type EquipmentFormProps = {
  register: UseFormRegister<DiaryFormValues>;
  control: Control<DiaryFormValues>;
  data: any;
};

type EquipmentSelecterProps = {
  register: UseFormRegister<DiaryFormValues>;
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

  const [flavors, setFlavors] = useState<Flavor[]>([{ brandId: "10", tasteId: "10", amount: 10 }]);

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
                register={register}
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

      <Stack spacing={1}>
        <Box>
          <Grid container spacing={1} alignItems="center" mb={1}>
            <Grid item xs={4} textAlign="center">
              <Typography>Brand:</Typography>
            </Grid>
            <Grid item xs={4} textAlign="center">
              <Typography>Taste:</Typography>
            </Grid>
            <Grid item xs={4} textAlign="center">
              <Typography>Weight:</Typography>
            </Grid>
          </Grid>

          <Stack>
            <Grid container spacing={1} alignItems="center" mb={1}>
              {flavors.map((flavor, index) => (
                <>
                  <Grid item xs={4} textAlign="center">
                    <FormControl sx={{ width: "80%" }} size="small">
                      <Select
                        value={flavor.brandId}
                        onChange={(e) => {
                          setFlavors(
                            flavors.map((flavor, interIndex) => {
                              return index == interIndex
                                ? { brandId: e.target.value, tasteId: flavor.tasteId, amount: flavor.amount }
                                : flavor;
                            })
                          );
                        }}
                      >
                        <MenuItem value={10}>hoge</MenuItem>
                        <MenuItem value={20}>fuga</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4} textAlign="center">
                    <FormControl sx={{ width: "80%" }} size="small">
                      <Select
                        value={flavor.tasteId}
                        onChange={(e) => {
                          setFlavors(
                            flavors.map((flavor, interIndex) => {
                              return index == interIndex
                                ? { brandId: flavor.brandId, tasteId: e.target.value, amount: flavor.amount }
                                : flavor;
                            })
                          );
                        }}
                      >
                        <MenuItem value={10}>hoge</MenuItem>
                        <MenuItem value={20}>fuga</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4} textAlign="center">
                    <FormControl sx={{ width: "80%" }} size="small">
                      <Box display={"flex"}>
                        <Input type="number" />
                        <Typography>g</Typography>
                      </Box>
                    </FormControl>
                  </Grid>
                </>
              ))}
            </Grid>
            <IconButton
              aria-label="add flavor"
              color="primary"
              onClick={() => {
                setFlavors([...flavors, { brandId: "10", tasteId: "10", amount: 0 }]);
              }}
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </Stack>
        </Box>

        <Box>
          <Typography>Service:</Typography>
          <Input
            multiline
            minRows={3}
            placeholder="例：キウイとレモンは混ぜて残りのミントとセパレートで"
            color="primary"
            sx={{ width: "100%" }}
          />
        </Box>

        <Typography>Image:</Typography>
      </Stack>
    </>
  );
};

const EquipmentSelecter: React.FC<EquipmentSelecterProps> = ({ control, register, propName, label, data }) => (
  <FormControl sx={{ width: "200px" }} size="small">
    <InputLabel id={label}>{label}</InputLabel>
    <Controller
      name={propName}
      control={control}
      render={({ field }) => (
        <Select {...field} labelId={label} label={label}>
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
