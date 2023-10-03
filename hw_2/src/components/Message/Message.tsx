import { StyledMessage, StyledIcon } from "./styles";

export interface IMessage {
  type: "warning" | "success" | "error" | "information";
}
export const Message = ({ type }: IMessage) => {
  const article = type === "warning" || type === "success" ? "a" : "an";

  return (
    <StyledMessage type={type}>
      This is {article} {type} message.
      <StyledIcon color={type} />
    </StyledMessage>
  );
};
