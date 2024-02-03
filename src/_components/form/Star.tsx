import { Box, Stack } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

type Props = {
  starNum: number;
  setStarNum: Dispatch<SetStateAction<number>>;
  length: number;
};

export const Star = ({ starNum, setStarNum, length }: Props) => {
  return (
    <Stack direction={"row"} alignItems={"center"}>
      {Array.from("1".repeat(length)).map((_, index) => (
        <Box key={"start" + index} pt={"4px"}>
          {starNum >= index + 1 ? (
            <div
              onClick={() => {
                setStarNum(index);
              }}
            >
              <StarIcon fontSize="small" />
            </div>
          ) : (
            <div
              onClick={() => {
                setStarNum(index + 1);
              }}
            >
              <StarBorderIcon fontSize="small" />
            </div>
          )}
        </Box>
      ))}
    </Stack>
  );
};
