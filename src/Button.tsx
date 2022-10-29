import React from "react";
import classes from "./Button.module.css";

type ButtonVariant = "contained" | "outlined";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button(props: ButtonProps) {
  const { children, variant = "contained", ...otherProps } = props;

  return (
    <button type="button" className={classes[variant]} {...otherProps}>
      {children}
    </button>
  );
}
