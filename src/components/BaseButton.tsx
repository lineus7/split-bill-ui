import { cn } from "@/utils/style";
import { Button, ButtonProps } from "@mui/material";

type BaseButtonProps = ButtonProps & {
  label: string;
};

export const BaseButton = ({ label, ...props }: BaseButtonProps) => {
  return (
    <Button
      variant="contained"
      className={cn("p-3", props.className)}
      {...props}
    >
      {label}
    </Button>
  );
};
