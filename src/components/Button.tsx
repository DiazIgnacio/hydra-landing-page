import { ReactNode } from "react";
import cn from "../utils/cn";

interface ButtonProps {
  className?: string;
  variant: "filled" | "outlined";
  children: ReactNode;
}

const Button = ({ className, variant, children }: ButtonProps) => {
  const backgroundcolor =
    variant === "outlined"
      ? "border-[3px] border-[#f3f3f3] text-white"
      : "bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-[#302c42] ";
  return (
    <button
      className={cn(
        `${backgroundcolor} rounded-full px-9 py-4 text-[12px] font-bold`,
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
