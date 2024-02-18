"use client";

import React, { ChangeEvent, Dispatch, SetStateAction, useMemo, useRef, useState } from "react";
import { Box, Grid, Select, MenuItem, Button, Typography, FormControl, IconButton, Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CustomHeading from "@/_components/customHeading";
import { ControlledInput, Input } from "@/_components/form/Input";
import { EquipmentSelecter } from "@/_components/form/EquipmentSelecter";

type EquipmentFormProps = {
  data: any;
  flavors: Flavor[];
  setFlavors: Dispatch<SetStateAction<Flavor[]>>;
  fileName: string;
  setFileName: Dispatch<SetStateAction<string>>;
};

type equipmentItem = {
  itemData: any;
  name: string;
  label: string;
};

const flavorList: FlavorList[] = [
  { id: "631437-2jd8-1is9-3js8-fb22a0fhwi41", flavor_name: "EarlGrey", brand_name: "Afzal" },
  { id: "631437-2jd8-1is9-3js8-fb22a0fhwi42", flavor_name: "Peach", brand_name: "Afzal" },
  { id: "631437-2jd8-1is9-3js8-fb22a0fhwi43", flavor_name: "Orange", brand_name: "Kenny" },
  { id: "631437-2jd8-1is9-3js8-fb22a0fhwi44", flavor_name: "Apple", brand_name: "Kenny" },
];

export const EquipmentForm: React.FC<EquipmentFormProps> = ({ data, flavors, setFlavors, fileName, setFileName }) => {
  const equipmentItemList: equipmentItem[] = [
    {
      itemData: data,
      name: "bottle",
      label: "Bottle",
    },
    {
      itemData: data,
      name: "bowl",
      label: "Bowl",
    },
    {
      itemData: data,
      name: "heat_management",
      label: "Heat Management",
    },
    {
      itemData: data,
      name: "charcoal",
      label: "Charcoal",
    },
  ];

  const { register, control, setValue } = useFormContext();
  const inputFileRef = useRef<HTMLInputElement>(null);

  const brandNames = useMemo(() => {
    return flavorList
      .map((flavor) => flavor.brand_name)
      .filter((brandName, index, self) => self.indexOf(brandName) == index);
  }, [flavorList]);
  const flavorsList = useMemo(() => {
    return flavors.map((flavor) => {
      return flavor.brandName ? flavorList.filter((apiFlavor) => apiFlavor.brand_name == flavor.brandName) : flavorList;
    });
  }, [flavorList, flavors]);

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
                control={control}
                data={v.itemData}
                name={v.name}
                label={v.label}
              ></EquipmentSelecter>
            ))}
        </Box>

        <Box display="flex" alignItems="center">
          <Typography>Climate :</Typography>
          <Input
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
                        value={flavor.brandName}
                        onChange={(e) => {
                          setFlavors(
                            flavors.map((flavor, interIndex) => {
                              return index == interIndex
                                ? { brandName: e.target.value, id: flavor.id, amount: flavor.amount }
                                : flavor;
                            })
                          );
                        }}
                      >
                        {brandNames.map((brandName, index) => (
                          <MenuItem value={brandName} key={"brandName" + index}>
                            {brandName}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4} textAlign="center">
                    <FormControl sx={{ width: "80%" }} size="small">
                      <Select
                        value={flavor.id}
                        onChange={(e) => {
                          setFlavors(
                            flavors.map((flavor, interIndex) => {
                              return index == interIndex
                                ? { brandName: flavor.brandName, id: e.target.value, amount: flavor.amount }
                                : flavor;
                            })
                          );
                        }}
                      >
                        {flavorsList[index].map((flavorList, index) => (
                          <MenuItem value={flavorList.id} key={"flavorList" + index}>
                            {flavorList.flavor_name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4} textAlign="center">
                    <FormControl sx={{ width: "80%" }} size="small">
                      <Box display={"flex"}>
                        <Input
                          type="number"
                          value={flavor.amount}
                          onChange={(e) => {
                            setFlavors(
                              flavors.map((flavor, interIndex) => {
                                return index == interIndex
                                  ? { brandName: flavor.brandName, id: flavor.id, amount: Number(e.target.value) }
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
                setFlavors([...flavors, { brandName: "", id: "", amount: undefined }]);
              }}
            >
              <AddCircleOutlineIcon />
            </IconButton>
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
          />
        </Box>

        <Box>
          <Typography>Image:</Typography>
          <ControlledInput
            name="image"
            control={control}
            type="file"
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
