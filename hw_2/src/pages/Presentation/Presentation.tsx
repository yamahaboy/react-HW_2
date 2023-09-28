import { Header } from "../../containers/Header/Header";
import { InputBlock } from "../../containers/InputBlock/inputBlock";
import { BlockOfButtons } from "../../containers/BlockOfButtons/BlockOfButtons";

import { PresentationPage, ComponentName } from "./styles";

export const Presentation = () => {
  return (
    <PresentationPage>
      <Header />
      <ComponentName>Text Input</ComponentName>
      <InputBlock />
      <ComponentName>Buttnons</ComponentName>
      <BlockOfButtons />
    </PresentationPage>
  );
};
