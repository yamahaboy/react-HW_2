import { ReactNode } from "react";
import { ButtonStyled, ChildrenText } from "./styles";
export interface IButton {
  children?: ReactNode;
  className: string;
  imageSrc?: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ children, className, type = "button" }: IButton) => {
  return (
    <div>
      <ChildrenText>{className}</ChildrenText>
      <ButtonStyled type={type} className={className}>
        {children}
      </ButtonStyled>
    </div>
  );
};
