import { Container } from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title, ...props }: ButtonProps) {
  return (
    <Container {...props}>
      <span>{title}</span>
    </Container>
  );
}
