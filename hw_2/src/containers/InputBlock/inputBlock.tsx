import { InputText } from "../../components/InputText/InputText";
import { GridInputs } from "./styles";

export const InputBlock = () => {
  return (
    <GridInputs>
      <InputText type="default" placeholder="Placeholder" children="Default" />
      <InputText type="focused" placeholder="|" children="Focused" />
      <InputText type="filled" placeholder="Placeholder" children="Filled" />
      <InputText type="error" placeholder="John" children="Error" />
      <InputText type="disable" placeholder="Placeholder" children="Disable" />
      <InputText type="hover" placeholder="Placeholder" children="Hover" />
      <InputText type="typing" placeholder="Type |" children="Typing" />
      <InputText type="success" placeholder="John" children="Success" />
    </GridInputs>
  );
};
