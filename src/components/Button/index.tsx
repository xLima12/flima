import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  className: string;
  name?: string;
  icon?: React.ReactNode;
  onClick?: (e?) => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  className,
  name,
  icon,
  onClick,
}) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {icon} {name}
    </button>
  );
};

export default Button;
