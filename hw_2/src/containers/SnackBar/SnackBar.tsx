import { Message } from "../../components/Message/Message";
import { CenterSnackbars, GridSnackbars } from "./styles";
export const SnackBar = () => {
  return (
    <CenterSnackbars>
      <GridSnackbars>
        <Message type="warning" />
        <Message type="error" />
        <Message type="success" />
        <Message type="information" />
      </GridSnackbars>
    </CenterSnackbars>
  );
};
