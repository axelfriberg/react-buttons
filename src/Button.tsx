import React from "react";
import classes from "./Button.module.css";

type ButtonVariant = "contained" | "outlined";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "contained",
    startIcon,
    endIcon,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={[classes.button, classes[variant]].join(" ")}
      {...otherProps}
    >
      {startIcon && <span className={classes["start-icon"]}>{startIcon}</span>}
      {children}
      {endIcon && <span className={classes["end-icon"]}>{endIcon}</span>}
    </button>
  );
}
