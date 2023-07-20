import { Box, Container, Content, Description } from "./styles";

type Step = {
  step: number;
  isActive: boolean;
  stepDescription: string;
};

interface BoxProps {
  steps: Step[];
}

export function Steps({ steps }: BoxProps) {
  return (
    <Container>
      {steps.map((step) => (
        <Content key={step.step}>
          <Box isActive={step.isActive}>
            <span>{step.step}</span>
          </Box>

          <Description>{step.stepDescription}</Description>
        </Content>
      ))}
    </Container>
  );
}
