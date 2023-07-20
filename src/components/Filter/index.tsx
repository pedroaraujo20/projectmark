import { Checkbox } from "../Checkbox";
import { Container, FilterName } from "./styles";

export interface FilterProps {
  isActive: boolean;
  onClick: (filterName: string) => void;
  filterName: string;
}

export function Filter({ isActive, filterName, onClick }: FilterProps) {
  return (
    <Container isActive={isActive} onClick={() => onClick(filterName)}>
      <Checkbox checked={isActive} />

      <FilterName>{filterName}</FilterName>
    </Container>
  );
}
