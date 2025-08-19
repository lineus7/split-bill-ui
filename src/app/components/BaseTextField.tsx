import { TextField, TextFieldProps } from "@mui/material";

export const BaseTextField = ({
  size = "medium",
  ...props
}: TextFieldProps) => {
  return <TextField size={size} {...props} />;
};
