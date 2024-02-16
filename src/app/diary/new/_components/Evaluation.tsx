import { Control, UseFormRegister } from "react-hook-form";
import { Stack, TextareaAutosize, Typography } from "@mui/material";
import CustomHeading from "@/_components/customHeading";
import { Star } from "@/_components/form/Star";
import { useState } from "react";

type EvaluationProps = {
  register: UseFormRegister<DiaryFormValues>;
  control: Control<DiaryFormValues>;
};

export const Evaluation: React.FC<EvaluationProps> = ({ register, control }) => {
  const [creator, setCreator] = useState(-1);
  const [taste, setTaste] = useState(-1);
  return (
    <>
      <CustomHeading>Review</CustomHeading>
      <Stack mt={"20px"}>
        <Stack>
          <Stack direction={"row"}>
            <Typography fontSize={"18px"}>Creator:</Typography>
            <Star starNum={creator} setStarNum={setCreator} length={5} />
          </Stack>
          <Stack gap={3} style={{ padding: 8 }}>
            <Stack>
              <Typography>Good Points:</Typography>
              <TextareaAutosize
                minRows={6}
                style={{
                  width: "100%",
                  backgroundColor: "#292929",
                  borderRadius: "5px",
                  borderColor: "#B6A2D1",
                  color: "#B6A2D1",
                }}
              />
            </Stack>
            <Stack>
              <Typography>Bad Points:</Typography>
              <TextareaAutosize
                minRows={6}
                style={{
                  width: "100%",
                  backgroundColor: "#292929",
                  borderRadius: "5px",
                  borderColor: "#B6A2D1",
                  color: "#B6A2D1",
                }}
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Stack direction={"row"}>
            <Typography fontSize={"18px"}>Taste:</Typography>
            <Star starNum={taste} setStarNum={setTaste} length={10} />
          </Stack>
          <Stack gap={3} style={{ padding: 8 }}>
            <Stack>
              <Typography>Comments:</Typography>
              <TextareaAutosize
                minRows={6}
                style={{
                  width: "100%",
                  backgroundColor: "#292929",
                  borderRadius: "5px",
                  borderColor: "#B6A2D1",
                  color: "#B6A2D1",
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
