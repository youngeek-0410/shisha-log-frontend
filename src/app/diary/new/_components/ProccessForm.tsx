import { Control, UseFormRegister } from "react-hook-form";
import { TextareaAutosize } from "@mui/material";
import CustomHeading from "@/_components/customHeading";

type ProcessFormProps = {
  register: UseFormRegister<DiaryFormValues>;
  control: Control<DiaryFormValues>;
};

export const ProcessForm: React.FC<ProcessFormProps> = ({ register, control }) => (
  <>
    <CustomHeading>Sucking Out</CustomHeading>
    <TextareaAutosize
      minRows={10}
      style={{
        width: "100%",
        backgroundColor: "#292929",
        borderRadius: "5px",
        borderColor: "#B6A2D1",
        color: "#B6A2D1",
        marginTop: "20px",
      }}
      {...register("process")}
    />
  </>
);
