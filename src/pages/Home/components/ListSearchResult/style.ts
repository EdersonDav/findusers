import styled from "styled-components";
import Pagination from 'react-responsive-pagination';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    color: var(--txt-2);
    font-weight: 500;
    margin-bottom: 50px;
  }
`

export const ResultContainer = styled.section`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  justify-content: center;
`

export const UsersCard = styled.a`
  width: 300px;
  box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);
  border-radius: 8px;
  margin-bottom: 20px;
  background: var(--shape-white);
  padding: 20px;
  display: flex;
  align-items: center;
  &:hover{
    background: var(--txt-6);
    box-shadow: 11px 13px 24px rgb(0 0 0 / 19%);
    transform: scale(1.01);
  }
`

export const UserImage = styled.div`
  border-radius: 30%;
  background: var(--background);
  overflow: hidden;
  height: 80px;
  min-height: 80px;
  width: 80px;
  margin-right: 40px;
  img{
    vertical-align: middle;
    height: 100%;
  }
`

export const PaginationResults = styled(Pagination)`
  display: flex;
`