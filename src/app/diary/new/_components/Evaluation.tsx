import { useFormContext } from "react-hook-form";
import { Stack, Typography } from "@mui/material";
import CustomHeading from "@/_components/customHeading";
import { ControlledStar } from "@/_components/form/Star";
import { TextareaAutosize } from "@/_components/form/Textarea";

export const Evaluation: React.FC = () => {
  const { register, control, setValue, getValues } = useFormContext();

  return (
    <>
      <CustomHeading>Review</CustomHeading>
      <Stack mt={"20px"}>
        <Stack>
          <Stack direction={"row"}>
            <Typography fontSize={"18px"}>Creator:</Typography>
            <ControlledStar
              name="creator_evaluation"
              control={control}
              defaultValue={0}
              starNum={getValues("creator_evaluation")}
              onChange={(number) => setValue("creator_evaluation", number)}
              length={5}
            />
          </Stack>
          <Stack gap={3} style={{ padding: 8 }}>
            <Stack>
              <Typography>Good Points:</Typography>
              <TextareaAutosize minRows={6} {...register("creator_good_points")} />
            </Stack>
            <Stack>
              <Typography>Bad Points:</Typography>
              <TextareaAutosize minRows={6} {...register("creator_bad_points")} />
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Stack direction={"row"}>
            <Typography fontSize={"18px"}>Taste:</Typography>
            <ControlledStar
              name="taste_evaluation"
              control={control}
              defaultValue={0}
              starNum={getValues("taste_evaluation")}
              onChange={(number) => setValue("taste_evaluation", number)}
              length={10}
            />
          </Stack>
          <Stack gap={3} style={{ padding: 8 }}>
            <Stack>
              <Typography>Comments:</Typography>
              <TextareaAutosize minRows={6} {...register("taste_comments")} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
