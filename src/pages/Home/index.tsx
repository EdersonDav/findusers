import { Container } from "./style";

import { Search } from "../../components/Search";
import { ListSearchResult } from "../../components/ListSearchResult";

export const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Search />
      <ListSearchResult />
    </Container>
  );
};
