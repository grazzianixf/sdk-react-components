import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  const { label, ...rest } = props;

  return <button {...rest}>{label}</button>;
};

export default Button;