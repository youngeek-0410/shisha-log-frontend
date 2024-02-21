"use client";

import React, { ChangeEvent, Dispatch, SetStateAction, useMemo, useRef } from "react";
import {
  Box,
  Grid,
  MenuItem,
  Button,
  Typography,
  FormControl,
  IconButton,
  Stack,
  Autocomplete,
  TextField,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CustomHeading from "@/_components/customHeading";
import { ControlledInput, Input } from "@/_components/form/Input";
import { EquipmentSelecter } from "@/_components/form/EquipmentSelecter";
import { GetEquimentsByUserIdResponse } from "@/api/create-diary-form/equipment-form";
import { ErrorMessage } from "@/_components/form/ErrorMessage";

type EquipmentFormProps = {
  data: GetEquimentsByUserIdResponse;
  fileName: string;
  setFileName: Dispatch<SetStateAction<string>>;
};

export const EquipmentForm: React.FC<EquipmentFormProps> = ({ data, fileName, setFileName }) => {
  const flavorList = data.user_flavor_list.map((flavor) => {
    return { id: flavor.id, name: flavor.brand_name + " " + flavor.flavor_name };
  });

  const {
    register,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const inputFileRef = useRef<HTMLInputElement>(null);
  const flavors: { id: string; amount: number }[] = watch("diary_flavor_list");

  return (
    <>
      <Box mb={3}>
        <Box mb={2}>
          <CustomHeading>Equipment</CustomHeading>
        </Box>

        <Box display="flex" flexDirection="column" gap={1}>
          <EquipmentSelecter control={control} name={"bottle"} label={"Bottle"} errors={errors}>
            {data.user_bottle_list.map((bottle) => (
              <MenuItem key={bottle.id} value={bottle.id}>
                {bottle.bottle_name}
              </MenuItem>
            ))}
          </EquipmentSelecter>
          <EquipmentSelecter control={control} name={"bowl"} label={"Bowl"} errors={errors}>
            {data.user_bowl_list.map((bowl) => (
              <MenuItem key={bowl.id} value={bowl.id}>
                {bowl.bowl_name}
              </MenuItem>
            ))}
          </EquipmentSelecter>
          <EquipmentSelecter control={control} name={"heat_management"} label={"Heat Management"} errors={errors}>
            {data.user_heat_management_list.map((heat_management) => (
              <MenuItem key={heat_management.id} value={heat_management.id}>
                {heat_management.heat_management_name}
              </MenuItem>
            ))}
          </EquipmentSelecter>
          <EquipmentSelecter control={control} name={"charcoal"} label={"Charcoal"} errors={errors}>
            {data.user_charcoal_list.map((charcoal) => (
              <MenuItem key={charcoal.id} value={charcoal.id}>
                {charcoal.charcoal_name}
              </MenuItem>
            ))}
          </EquipmentSelecter>
        </Box>

        <Box display="flex" alignItems="center">
          <Typography>Climate :</Typography>
          <Input
            disableErrorMessage
            type="number"
            {...register("climate_temp")}
            inputProps={{
              style: { textAlign: "center" },
            }}
            sx={{
              width: "50px",
            }}
          />
          <Typography>℃,</Typography>

          <Input
            disableErrorMessage
            type="number"
            {...register("climate_humidity")}
            inputProps={{
              style: { textAlign: "center" },
            }}
            sx={{
              width: "50px",
            }}
          />
          <Typography>%</Typography>
        </Box>
        <ErrorMessage name={"climate_temp"} errors={errors} />
        <ErrorMessage name={"climate_humidity"} errors={errors} />
      </Box>

      <Box mb={2}>
        <CustomHeading>Flavor</CustomHeading>
      </Box>

      <Stack spacing={1}>
        <Box>
          <Grid container spacing={1} alignItems="center" mb={1}>
            <Grid item xs={6} textAlign="center">
              <Typography>Flavor:</Typography>
            </Grid>
            <Grid item xs={6} textAlign="center">
              <Typography>Weight:</Typography>
            </Grid>
          </Grid>

          <Stack>
            <Grid container spacing={1} alignItems="center" mb={1}>
              {flavors?.map((flavor, index) => (
                <>
                  <Grid item xs={6} textAlign="center">
                    <FormControl sx={{ width: "80%" }} size="small">
                      <Autocomplete
                        disablePortal
                        options={flavorList}
                        value={flavorList.find((tmp) => tmp.id == flavor.id)}
                        getOptionLabel={(flavor) => flavor.name}
                        onChange={(_, value) =>
                          value &&
                          setValue(
                            "diary_flavor_list",
                            flavors?.map((flavor, interIndex) => {
                              return index == interIndex ? { id: value?.id, amount: flavor.amount } : flavor;
                            })
                          )
                        }
                        renderInput={(params) => <TextField {...params} label="Select flavors" placeholder="Flavors" />}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} textAlign="center">
                    <FormControl sx={{ width: "80%" }} size="small">
                      <Box display={"flex"}>
                        <Input
                          type="number"
                          errors={errors}
                          value={flavor.amount}
                          onChange={(e) => {
                            setValue(
                              "diary_flavor_list",
                              flavors?.map((flavor, interIndex) => {
                                return index == interIndex
                                  ? { id: flavor.id, amount: e.target.value && Number(e.target.value) }
                                  : flavor;
                              })
                            );
                          }}
                        />
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
                setValue("diary_flavor_list", [...flavors, { id: "", amount: undefined }]);
              }}
            >
              <AddCircleOutlineIcon />
            </IconButton>
            <ErrorMessage name="diary_flavor_list" errors={errors} />
          </Stack>
        </Box>

        <Box>
          <Typography>Serve:</Typography>
          <Input
            multiline
            minRows={3}
            placeholder="例：キウイとレモンは混ぜて残りのミントとセパレートで"
            color="primary"
            sx={{ width: "100%" }}
            {...register("serve_text")}
            errors={errors}
          />
        </Box>

        <Box>
          <Typography>Image:</Typography>
          <ControlledInput
            name="image"
            control={control}
            type="file"
            accept="image/*"
            value={""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const files = e.currentTarget.files;
              if (!files || files.length == 0) {
                setValue("image", undefined);
                setFileName("");
              } else {
                const file = files[0];

                const reader = new FileReader();
                reader.onload = () => {
                  const base64 = reader.result;
                  if (typeof base64) {
                    setValue("image", base64);
                    setFileName(file.name);
                  }
                };
                reader.readAsDataURL(file);
              }
            }}
            ref={inputFileRef}
            style={{ display: "none" }}
          />
          <Button
            onClick={() => {
              inputFileRef.current?.click();
            }}
          >
            ファイルを選択
          </Button>
          <Typography>{fileName}</Typography>
        </Box>
      </Stack>
    </>
  );
};
