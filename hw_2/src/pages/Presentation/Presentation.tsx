import { Header } from "../../containers/Header/Header";

import { PresentationPage, ComponentName, DefaultInput } from "./styles";

export const Presentation = () => {
  return (
    <PresentationPage>
      <Header />
      <ComponentName>Text Input</ComponentName>
      <DefaultInput type="Default" placeholder="Placeholder" />
    </PresentationPage>
  );
};
