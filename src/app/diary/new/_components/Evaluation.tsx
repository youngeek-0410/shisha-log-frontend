import { Control, UseFormRegister } from "react-hook-form";
import { Box, Stack, TextareaAutosize, Typography } from "@mui/material";
import CustomHeading from "@/_components/customHeading";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
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
            <Stack direction={"row"} alignItems={"center"}>
              {Array.from("12345").map((_, index) => (
                <Box key={"start" + index} pt={"4px"}>
                  {creator >= index ? (
                    <div
                      onClick={() => {
                        setCreator(index - 1);
                      }}
                    >
                      <StarIcon fontSize="small" />
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        setCreator(index);
                      }}
                    >
                      <StarBorderIcon fontSize="small" />
                    </div>
                  )}
                </Box>
              ))}
            </Stack>
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
            {Array.from("12345678910").map((_, index) => (
              <Box key={"start" + index} pt={"4px"}>
                {taste >= index ? (
                  <div
                    onClick={() => {
                      setTaste(index - 1);
                    }}
                  >
                    <StarIcon fontSize="small" />
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      setTaste(index);
                    }}
                  >
                    <StarBorderIcon fontSize="small" />
                  </div>
                )}
              </Box>
            ))}
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
