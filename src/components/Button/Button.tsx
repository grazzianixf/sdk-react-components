import React from "react";

export interface ButtonProps {
  label: string;
  onClick: any
}

const Button = (props: ButtonProps) => {
  const { label, onClick, ...rest } = props;

  return <button onClick={onClick} {...rest}>{label}</button>;
};

export default Button;