import { useState } from "react";

import { FilterProps } from "../../components/Filter";
import { Filters } from "../../components/Filters";
import { Header } from "../../components/Header";
import { StatusCard } from "../../components/StatusCard";
import { CardsContainer, Container, Content, Title } from "./styles";

enum AllFilters {
  BASIC = "Basic",
  ADVANCED = "Advanced",
  EXPERT = "Expert",
  CUSTOM = "Custom",
}

const cardsByFilters = {
  [AllFilters.BASIC]: (
    <>
      <StatusCard color="blue" title="submitted " />
      <StatusCard color="cyan" title="won" />
    </>
  ),
  [AllFilters.ADVANCED]: (
    <>
      <StatusCard color="purple" title="lead" />
      <StatusCard color="orange" title="rfc in progress " />
      <StatusCard color="blue" title="submitted " />
    </>
  ),
  [AllFilters.EXPERT]: (
    <>
      <StatusCard color="purple" title="lead" />
      <StatusCard color="orange" title="rfc in progress " />
      <StatusCard color="blue" title="submitted " />
      <StatusCard color="cyan" title="won" />
      <StatusCard color="pink" title="lost" />
      <StatusCard color="gray" title="closed" />
    </>
  ),
  [AllFilters.CUSTOM]: (
    <>
      <StatusCard color="purple" title="lead" />
      <StatusCard color="cyan" title="won" />
      <StatusCard color="pink" title="lost" />
      <StatusCard color="gray" title="closed" />
    </>
  ),
};

export function Home() {
  const [activeFilter, setActiveFilter] = useState<AllFilters>(
    AllFilters.BASIC
  );

  const filters: FilterProps[] = [
    {
      filterName: AllFilters.BASIC,
      isActive: activeFilter === AllFilters.BASIC,
      onClick: (filterName) => setActiveFilter(filterName as AllFilters),
    },
    {
      filterName: AllFilters.ADVANCED,
      isActive: activeFilter === AllFilters.ADVANCED,
      onClick: (filterName) => setActiveFilter(filterName as AllFilters),
    },
    {
      filterName: AllFilters.EXPERT,
      isActive: activeFilter === AllFilters.EXPERT,
      onClick: (filterName) => setActiveFilter(filterName as AllFilters),
    },
    {
      filterName: AllFilters.CUSTOM,
      isActive: activeFilter === AllFilters.CUSTOM,
      onClick: (filterName) => setActiveFilter(filterName as AllFilters),
    },
  ];

  return (
    <Container>
      <Header />

      <Content>
        <Title>
          Please select the type of sales pipeline that best fits to you company
        </Title>

        <Filters filters={filters} />

        <CardsContainer>{cardsByFilters[activeFilter] || null}</CardsContainer>
      </Content>
    </Container>
  );
}
