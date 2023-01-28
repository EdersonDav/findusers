import { Container } from "./style";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const { user } = useParams();
  return (
    <Container>
      <h1>Detail</h1>
      <h2>{user}</h2>
      <a href="/">back</a>
    </Container>
  );
};
