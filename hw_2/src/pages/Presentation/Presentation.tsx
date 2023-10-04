import { Header } from "../../containers/Header/Header";
import { InputBlock } from "../../containers/InputBlock/inputBlock";
import { BlockOfButtons } from "../../containers/BlockOfButtons/BlockOfButtons";

import { PresentationPage, ComponentName } from "./styles";
import { SnackBar } from "../../containers/SnackBar/SnackBar";
import { Bar } from "../../containers/ProgressBar/ProgressBar";

export const Presentation = () => {
  return (
    <PresentationPage>
      <Header />
      <ComponentName>Text Input</ComponentName>
      <InputBlock />
      <ComponentName>Buttnons</ComponentName>
      <BlockOfButtons />
      <ComponentName>Snackbar</ComponentName>
      <SnackBar />
      <ComponentName>Progress Bar</ComponentName>
      <Bar />
    </PresentationPage>
  );
};
