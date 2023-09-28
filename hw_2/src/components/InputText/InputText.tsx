import { InputStyled, ChildrenText } from "./styles";

export interface IProps {
  type:
    | "default"
    | "disable"
    | "focused"
    | "hover"
    | "filled"
    | "typing"
    | "error"
    | "success";
  placeholder?: string;
  children?: string;
}

export const InputText = ({ type, placeholder, children }: IProps) => {
  return (
    <div>
      <ChildrenText>{children}</ChildrenText>
      <InputStyled
        className="input-text"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};
