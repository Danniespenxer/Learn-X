import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", children, ...props }) => (
  <button
    className={clsx(
      "btn",
      variant === "primary" && "btn-primary",
      variant === "secondary" && "btn-secondary",
      variant === "outline" && "btn-outline"
    )}
    {...props}
  >
    {children}
  </button>
);

export default Button;