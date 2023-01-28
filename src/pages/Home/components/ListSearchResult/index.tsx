import { useSelector } from "react-redux";

import { useDataResult } from "../../../../redux/sliceResult";
import { ResultContainer } from "./style";

export const ListSearchResult = () => {
  const result = useSelector(useDataResult);

  return (
    <ResultContainer>
      {result.users.map((user) => (
        <div key={user.id}>
          <h1>{user.login}</h1>
          <a href={`/${user.login}`}>ver detalhes</a>
        </div>
      ))}
    </ResultContainer>
  );
};
