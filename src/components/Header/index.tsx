import { Container } from "./styles";
import logo from "../../assets/logo.svg";
import { Steps } from "../Steps";
import { Button } from "../Button";

const steps = [
  { step: 1, stepDescription: "Sales Pipeline Settings", isActive: true },
  { step: 2, stepDescription: "Opportunity Details Settings", isActive: false },
];

export function Header() {
  return (
    <Container>
      <img src={logo} alt="Project Mark Logo" />

      <Steps steps={steps} />

      <Button title="Next" />
    </Container>
  );
}
