import { Header } from "../../containers/Header/Header";
import { InputText } from "../../components/InputText/InputText";
import { PresentationPage, ComponentName } from "./styles";

export const Presentation = () => {
  return (
    <PresentationPage>
      <Header />
      <ComponentName>Text Input</ComponentName>
      <InputText type="default" placeholder="Placeholder" children="Default" />
      <InputText type="disable" placeholder="Placeholder" children="Disable" />
      <InputText type="focused" placeholder="Placeholder" children="Focused" />
    </PresentationPage>
  );
};
