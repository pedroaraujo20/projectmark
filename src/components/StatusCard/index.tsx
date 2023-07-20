import { Card, Colors, Container, Header, Progress } from "./styles";

interface StatusCardProps {
  color: Colors;
  title: string;
}

export function StatusCard({ title, color }: StatusCardProps) {
  return (
    <Container color={color}>
      <Header color={color}>
        <span>{title}</span>

        <Progress color={color}>
          <div />
        </Progress>
      </Header>

      <Card color={color} />
    </Container>
  );
}
