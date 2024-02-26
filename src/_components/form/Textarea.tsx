import { TextareaAutosizeProps, TextareaAutosize as RHFTextareaAutosize } from "@mui/material";
import { Ref, forwardRef } from "react";

const WrapTextareaAutosize = (props: TextareaAutosizeProps, ref: Ref<HTMLTextAreaElement>) => {
  return (
    <RHFTextareaAutosize
      ref={ref}
      style={{
        width: "100%",
        backgroundColor: "#292929",
        borderRadius: "5px",
        borderColor: "#B6A2D1",
        color: "#B6A2D1",
        marginTop: "20px",
      }}
      {...props}
    />
  );
};

export const TextareaAutosize = forwardRef<HTMLTextAreaElement, TextareaAutosizeProps>(WrapTextareaAutosize);
