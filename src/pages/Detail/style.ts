import styled from "styled-components";

export const Container = styled.main`
  a{
    display: flex;
    align-items: center;
    font-size: 14px;
    color: var(--blue);
    svg{
      margin-right: 5px;
      font-size: 20px;
    }
    &:visited{
      color: var(--blue);
    }
  }
`