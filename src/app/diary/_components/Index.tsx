"use client";

import CustomHeading from "@/_components/customHeading";
import { Star } from "@/_components/form/Star";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { diaries, flavors } from "./testData";
import { useDiariesPagination } from "@/hooks/useDiariesPagenation";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useRouter } from "next/navigation";

export const Index: React.FC = () => {
  const [creator, setCreator] = useState(-1);
  const [taste, setTaste] = useState(-1);
  const [sortTerms, setSortTerms] = useState({ date: "none", creator: "none", taste: "none" });
  const [selectedFlavors, setSelectedFlavors] = useState<{ id: Number; name: string }[]>([]);

  const shapedDiaries = useMemo(() => {
    let tmpDiaries = diaries;
    if (sortTerms.date != "none") {
      tmpDiaries =
        sortTerms.date == "desc"
          ? tmpDiaries.sort((cur, next) => cur.create_date.getTime() - next.create_date.getTime()).reverse()
          : tmpDiaries.sort((cur, next) => cur.create_date.getTime() - next.create_date.getTime());
    }
    if (sortTerms.creator != "none") {
      tmpDiaries =
        sortTerms.creator == "desc"
          ? tmpDiaries.sort((cur, next) => cur.creator_evaluation - next.creator_evaluation).reverse()
          : tmpDiaries.sort((cur, next) => cur.creator_evaluation - next.creator_evaluation);
    }
    if (sortTerms.taste != "none") {
      tmpDiaries =
        sortTerms.taste == "desc"
          ? tmpDiaries.sort((cur, next) => cur.taste_evaluation - next.taste_evaluation).reverse()
          : tmpDiaries.sort((cur, next) => cur.taste_evaluation - next.taste_evaluation);
    }
    return tmpDiaries
      .filter(
        (diary) =>
          diary.diary_flavor_list.find((flavor) =>
            selectedFlavors.find((selectedFlavor) => selectedFlavor.name == flavor.flavor_name)
          ) || selectedFlavors.length == 0
      )
      .filter((diary) => diary.creator_evaluation >= creator)
      .filter((diary) => diary.taste_evaluation >= taste);
  }, [sortTerms, creator, taste, selectedFlavors]);

  // page
  const { page, setPage, hasNext, hasPrev } = useDiariesPagination({ diaries: shapedDiaries });

  const router = useRouter();

  return (
    <>
      <Stack gap={"10px"}>
        <Stack gap={"10px"}>
          <CustomHeading>Narrowing down</CustomHeading>
          <Typography fontSize={"18px"}>Fravor:</Typography>
          <Autocomplete
            multiple
            id="tags-outlined"
            options={flavors}
            getOptionLabel={(flavor) => flavor.name}
            filterSelectedOptions
            onChange={(_, value) => {
              setSelectedFlavors(value);
            }}
            renderInput={(params) => <TextField {...params} label="Select flavors" placeholder="Flavors" />}
          />
          <Stack direction={"row"}>
            <Typography fontSize={"18px"}>Creator:</Typography>
            <Star
              starNum={creator}
              onChange={(number) => {
                setCreator(number);
              }}
              length={5}
            />
          </Stack>
          <Stack direction={"row"}>
            <Typography fontSize={"18px"}>Taste:</Typography>
            <Star
              starNum={taste}
              onChange={(number) => {
                setTaste(number);
              }}
              length={10}
            />
          </Stack>
          <Stack direction={"row"} gap={"10px"}>
            <Typography fontSize={"18px"}>Sort:</Typography>
            <FormControl style={{ flexGrow: 1 }}>
              <InputLabel>Date</InputLabel>
              <Select
                label="Date"
                size="small"
                onChange={(e) => {
                  setSortTerms({ ...sortTerms, date: e.target.value as string, creator: "none", taste: "none" });
                }}
              >
                <MenuItem value={"desc"}>Desc</MenuItem>
                <MenuItem value={"asc"}>Asc</MenuItem>
              </Select>
            </FormControl>
            <FormControl style={{ flexGrow: 1 }}>
              <InputLabel>Creator</InputLabel>
              <Select
                label="Creator"
                size="small"
                onChange={(e) => {
                  setSortTerms({ ...sortTerms, creator: e.target.value as string, taste: "none", date: "none" });
                }}
              >
                <MenuItem value={"desc"}>Desc</MenuItem>
                <MenuItem value={"asc"}>Asc</MenuItem>
              </Select>
            </FormControl>
            <FormControl style={{ flexGrow: 1 }}>
              <InputLabel>Taste</InputLabel>
              <Select
                label="Taste"
                size="small"
                onChange={(e) => {
                  setSortTerms({ ...sortTerms, taste: e.target.value as string, creator: "none", date: "none" });
                }}
              >
                <MenuItem value={"desc"}>Desc</MenuItem>
                <MenuItem value={"asc"}>Asc</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
        <Stack gap={"10px"}>
          <CustomHeading>Lists</CustomHeading>
          <Stack flexDirection={"row"} textAlign={"center"} color={"text.secondary"} mt={"20px"}>
            <Box flexGrow={"1"} p={"5px"} border={"1px solid"} borderColor={"primary.main"}>
              <Typography fontSize={"14px"}>Fravor</Typography>
            </Box>
            <Box p={"5px"} minWidth={"55px"} border={"1px solid"} borderColor={"primary.main"} borderLeft={"0px"}>
              <Typography fontSize={"14px"}>Day</Typography>
            </Box>
            <Box p={"5px"} minWidth={"55px"} border={"1px solid"} borderColor={"primary.main"} borderLeft={"0px"}>
              <Typography fontSize={"14px"}>Taste</Typography>
            </Box>
            <Box p={"5px"} minWidth={"65px"} border={"1px solid"} borderColor={"primary.main"} borderLeft={"0px"}>
              <Typography fontSize={"14px"}>Creator</Typography>
            </Box>
          </Stack>
          <Box>
            {shapedDiaries.slice(page * 10).map((diary) => {
              const flavorNames = diary.diary_flavor_list
                .map((flavor) => flavor.flavor_name + flavor.amount)
                .toString();
              return (
                <Stack flexDirection={"row"} textAlign={"center"} color={"text.secondary"} key={diary.id}>
                  <Box
                    flexGrow={"1"}
                    p={"5px"}
                    border={"1px solid"}
                    borderColor={"primary.main"}
                    maxWidth={"185px"}
                    height={"48px"}
                    overflow={"scroll"}
                  >
                    <Typography fontSize={"12px"} style={{ wordBreak: "break-all" }}>
                      {flavorNames}
                    </Typography>
                  </Box>
                  <Box p={"5px"} minWidth={"55px"} border={"1px solid"} borderColor={"primary.main"} borderLeft={"0px"}>
                    <Typography fontSize={"14px"}>{`${
                      diary.create_date.getMonth() + 1
                    }/${diary.create_date.getDate()}`}</Typography>
                  </Box>
                  <Box p={"5px"} minWidth={"55px"} border={"1px solid"} borderColor={"primary.main"} borderLeft={"0px"}>
                    <Typography fontSize={"14px"}>{diary.taste_evaluation}</Typography>
                  </Box>
                  <Box p={"5px"} minWidth={"65px"} border={"1px solid"} borderColor={"primary.main"} borderLeft={"0px"}>
                    <Typography fontSize={"14px"}>{diary.creator_evaluation}</Typography>
                  </Box>
                </Stack>
              );
            })}
            <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
              <IconButton
                size="large"
                disabled={!hasPrev}
                onClick={() => {
                  setPage(page - 1);
                }}
              >
                <NavigateBeforeIcon color={"primary"} fontSize="large" />
              </IconButton>
              <IconButton
                size="large"
                disabled={!hasNext}
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                <NavigateNextIcon color={"primary"} fontSize="large" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Stack>
      <Stack flexDirection={"row"} justifyContent={"center"}>
        <Button
          onClick={() => {
            router.push("/diary/new");
          }}
        >
          Create Diary
        </Button>
      </Stack>
    </>
  );
};
