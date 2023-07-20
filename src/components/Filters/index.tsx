import { Filter, FilterProps } from "../Filter";
import { Container } from "./styles";

interface FiltersProps {
  filters: FilterProps[];
}

export function Filters({ filters }: FiltersProps) {
  return (
    <Container>
      {filters.map((filter) => (
        <Filter key={filter.filterName} {...filter} />
      ))}
    </Container>
  );
}
