import { Button } from "../../components/Button/Button";
import { PencilIcon } from "../../images/index";
import { ButtonBlock, ButtonCol } from "./styles";
export const BlockOfButtons = () => {
  return (
    <ButtonBlock>
      <ButtonCol>
        <Button className="primary">Button Sample</Button>
        <Button className="secondary">Button Sample</Button>
      </ButtonCol>
      <ButtonCol>
        <Button className="small">Button Sample</Button>
        <Button className="normal">Button Sample</Button>
        <Button className="medium">Button Sample</Button>
      </ButtonCol>
      <ButtonCol>
        <Button className="normal-rest">Button</Button>
        <Button className="normal-hover">Button</Button>
        <Button className="normal-pressed">Button</Button>
        <Button className="normal-disable">Button</Button>
      </ButtonCol>
      <ButtonCol>
        <Button className="icon-rest">
          <PencilIcon />
          Button
        </Button>
        <Button className="icon-hover">
          <PencilIcon />
          Button
        </Button>
        <Button className="icon-pressed">
          <PencilIcon />
          Button
        </Button>
        <Button className="icon-disable">
          <PencilIcon />
          Button
        </Button>
      </ButtonCol>
      <ButtonCol>
        <Button className="outline-rest">Button</Button>
        <Button className="outline-hover">Button</Button>
        <Button className="outline-pressed">Button</Button>
        <Button className="outline-disable">Button</Button>
      </ButtonCol>
    </ButtonBlock>
  );
};
