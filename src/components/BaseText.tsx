import { cn } from "@/utils/style";

type BaseTextProps = {
  children: React.ReactNode;
  variant?: "title" | "subtitle" | "body";
};

export const BaseText = ({ children, variant = "body" }: BaseTextProps) => {
  let baseClassName = "";
  switch (variant) {
    case "title":
      baseClassName = "text-2xl font-extrabold";
      break;
    case "subtitle":
      baseClassName = "text-xl font-bold";
      break;
    case "body":
      baseClassName = "text-base";
      break;
    default:
      baseClassName = "text-base";
      break;
  }
  return <p className={cn(baseClassName)}>{children}</p>;
};
