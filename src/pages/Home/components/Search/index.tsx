import { useState } from "react";
import { useDispatch } from "react-redux";

import { gitHubApi } from "../../../../services/GitHubAPI";
import { saveResult } from "../../../../redux/sliceResult";
import { InputContainer } from "./style";

export const Search = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  const searchUser = async () => {
    if (userName) {
      const results = await gitHubApi.searchUsers(userName);

      dispatch(saveResult(results));
    }
  };

  return (
    <InputContainer>
      <label htmlFor="input-search">Search User</label>
      <input
        value={userName}
        type="text"
        id="input-search"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button type="submit" onClick={searchUser}>
        Go
      </button>
    </InputContainer>
  );
};
