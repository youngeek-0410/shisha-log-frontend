import { useFormContext } from "react-hook-form";
import CustomHeading from "@/_components/customHeading";
import { TextareaAutosize } from "@/_components/form/Textarea";

export const ProcessForm: React.FC = () => {
  const { register } = useFormContext();
  return (
    <>
      <CustomHeading>Sucking Out</CustomHeading>
      <TextareaAutosize minRows={10} {...register("sucking_text")} />
    </>
  );
};
